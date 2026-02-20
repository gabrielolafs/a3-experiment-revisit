import json
import os

script_dir = os.path.dirname(os.path.abspath(__file__))


full_list_of_answers = []

for file_num in range(1, 11):
    file_path = os.path.join(script_dir, "parts", f"p{file_num}.json")

    parts = []

    with open(file_path, 'r') as f:
        parts.append(json.loads(f.read()))

    part = parts[0]
    answers = part['answers']

    for i in range(60):
        for type in [f'bar-chart_{i + 1}', f'pie-chart_{i + 1}', f'stacked-bar-chart_{i + 1}']:
            try:
                full_list_of_answers.append(answers[type]['answer'])
            except:
                pass

    print(len(full_list_of_answers))

with open(f"{script_dir}/smarty_answers.json", "w") as f:
    json.dump(full_list_of_answers, f)
