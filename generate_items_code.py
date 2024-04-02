import os

# Path to your media folder
media_folder = 'build/static/media'

# Path to save the generated XML code
output_file = 'generated_code.txt'

# Open the output file in write mode
with open(output_file, 'w') as f:
    # Iterate over files in the media folder
    for filename in os.listdir(media_folder):
        # Construct the full path to the file
        file_path = os.path.join(media_folder, filename)
        # Construct the relative path for XML update
        relative_path = file_path.replace('\\', '/')

        # Generate XML code for the file
        xml_code = f'''<Content Update="{relative_path}">
      <CopyToOutputDirectory>Always</CopyToOutputDirectory>
    </Content>\n'''

        # Write the XML code to the output file
        f.write(xml_code)

print("XML code generated and saved to", output_file)
