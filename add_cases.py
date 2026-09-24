import json
import random

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# The first line is `const CASES = [...];`
lines = content.split('\n')
first_line = lines[0]
if first_line.startswith("const CASES = "):
    cases_json_str = first_line[len("const CASES = "):-1]
    if cases_json_str.endswith(";"):
        cases_json_str = cases_json_str[:-1]
else:
    print("Could not find CASES on first line")
    exit(1)

cases = json.loads(cases_json_str)

# Generate 20 REJECT cases
for i in range(61, 81):
    case = cases[random.randint(0, len(cases)-1)].copy()
    case["scenario_id"] = f"C{i:03d}"
    case["case_file"] = f"C{i:03d}_reject_synthetic.csv"
    
    # Force a REJECT condition
    case["required_security_level"] = 5
    case["eligible_512"] = "NO"
    case["eligible_768"] = "NO"
    case["eligible_1024"] = "YES"
    
    # Models predict something too low or invalid
    case["dt_prediction"] = 512
    case["rf_prediction"] = 512
    case["xgb_prediction"] = 512
    
    case["dt_decision"] = "REJECT"
    case["rf_decision"] = "REJECT"
    case["xgb_decision"] = "REJECT"
    
    case["dt_final"] = None
    case["rf_final"] = None
    case["xgb_final"] = None
    
    case["model_agreement"] = "YES"
    cases.append(case)

# Generate 20 FALLBACK cases
for i in range(81, 101):
    case = cases[random.randint(0, 59)].copy()
    case["scenario_id"] = f"C{i:03d}"
    case["case_file"] = f"C{i:03d}_fallback_synthetic.csv"
    
    # Force a FALLBACK condition
    # Example: model predicts 512, but required is 768. So it falls back to 768 or 1024.
    case["required_security_level"] = 3
    case["eligible_512"] = "NO"
    case["eligible_768"] = "YES"
    case["eligible_1024"] = "YES"
    
    case["dt_prediction"] = 512
    case["rf_prediction"] = 512
    case["xgb_prediction"] = 512
    
    case["dt_decision"] = "FALLBACK"
    case["rf_decision"] = "FALLBACK"
    case["xgb_decision"] = "FALLBACK"
    
    case["dt_final"] = 768
    case["rf_final"] = 768
    case["xgb_final"] = 768
    
    case["model_agreement"] = "YES"
    cases.append(case)

new_first_line = "const CASES = " + json.dumps(cases, separators=(',', ':')) + ";"
lines[0] = new_first_line

with open("app.js", "w", encoding="utf-8") as f:
    f.write('\n'.join(lines))

print("Successfully added 40 cases (20 REJECT, 20 FALLBACK). Total cases now:", len(cases))
