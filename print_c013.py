import json
with open("app.js", "r", encoding="utf-8") as f:
    first_line = f.readline().strip()
    
cases_str = first_line[len("const CASES = "):-1]
cases = json.loads(cases_str)
c013 = next((c for c in cases if c["scenario_id"] == "C013"), None)
print(json.dumps(c013, indent=2))
