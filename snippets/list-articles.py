import os
import json

def generate_files_json(directory, output_file):
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                # Get the relative path to the file
                relative_path = os.path.relpath(os.path.join(root, file), start=directory)
                html_files.append(relative_path)

    with open(output_file, 'w') as f:
        json.dump({"files": html_files}, f, indent=4)
    
    return html_files

if __name__ == "__main__":
    articles_directory = 'articles'
    output_file = os.path.join('snippets', 'article-list.json')
    generate_files_json(articles_directory, output_file)
