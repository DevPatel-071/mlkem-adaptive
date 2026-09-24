import json
import random

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

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
c013 = next((c for c in cases if c["scenario_id"] == "C013"), None)

if not c013:
    print("Could not find C013")
    exit(1)

# Generate 5 new cases based on C013
for i in range(61, 66):
    new_case = c013.copy()
    new_case["scenario_id"] = f"C{i:03d}"
    new_case["case_file"] = f"C{i:03d}_high_very_high_var.csv"
    
    # Slight variations in hardware stats to make them unique
    new_case["battery_pct"] = max(0, min(100, c013["battery_pct"] + random.randint(-5, 5)))
    new_case["cpu_pct"] = max(0, min(100, c013["cpu_pct"] + random.randint(-5, 5)))
    new_case["ram_kb"] = max(0, c013["ram_kb"] + random.randint(-15, 15))
    new_case["latency_ms"] = max(0, c013["latency_ms"] + random.randint(-5, 5))
    
    cases.append(new_case)

new_first_line = "const CASES = " + json.dumps(cases, separators=(',', ':')) + ";"
lines[0] = new_first_line

with open("app.js", "w", encoding="utf-8") as f:
    f.write('\n'.join(lines))

print("Successfully added 5 new cases based on C013. Total cases now:", len(cases))
