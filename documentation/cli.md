# CLI

Documentation about the CLI commands.

---

## Commands
### process
Process a file to transform Markdown file.

#### Options
|Name|Description|Choices|Default|Required|
|---|---|---|---|---|
|**-n, --name <file_name_destination>**|Name of the generated file. If not defined, the name will be the current timestamp.|*/*|*/*|no|
|**-d, --destination <file_path_destination>**|Path to the generated file.|*/*|./|no|
|**-f, --file <files_to_process>**|Path to the MarkDown files to process.|*/*|*/*|no|
|**-t, --titre <title_in_html_file>**|Title to show in the HTML file|*/*| |no|
|**--theme <css_theme>**|CSS Theme to use in the generated HTML file|- default<br/>- rpg|default|no|
|**--custom-theme <custom theme path>**|Path to the custom theme file|*/*|*/*|no|
|**-o, --output <output>**|Output format|- html <br/>- pdf|html|no|
|--folder <folder>|Path to the folder with all the MarkDown files to process.|*/*|*/*|no|
|--table|To add a table of content. Select which levels of title must be added in. Formats: '[1-6]' or '[1-6]-[1-6]'|*/*|1-6|no|

#### Notes
##### Multiple files
If you are listing multiple file to process, they will be added in the same order than listed in the command.

---

### generate_squeleton
Generate a css squeleton to create a custom theme or clone an existing theme.

#### Options
|Name|Description|Choices|Default|Required|
|---|---|---|---|---|
|-n, --name <file_name_destination>|Name of the generated file. If not defined, the name will be the current timestamp.|*/*|*/*|no|
|--theme <css_theme>|CSS Theme to copy|- default<br/>- rpg|*/*|no|
