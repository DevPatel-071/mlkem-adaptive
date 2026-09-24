import json

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

# The original array had exactly 60 items
cases = cases[:60]

new_first_line = "const CASES = " + json.dumps(cases, separators=(',', ':')) + ";"
lines[0] = new_first_line

with open("app.js", "w", encoding="utf-8") as f:
    f.write('\n'.join(lines))

print("Successfully removed the extra cases. Total cases now:", len(cases))
