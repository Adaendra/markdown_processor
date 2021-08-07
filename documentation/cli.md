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
|**-f, --file <files_to_process>**|Path to the MarkDown files to process.|*/*|*/*|yes|
|**-t, --titre <title_in_html_file>**|Title to show in the HTML file|*/*| |no|
|**--theme <css_theme>**|CSS Theme to use in the generated HTML file|- default<br/>- rpg|default|no|

---

## Notes
### Multiple files
If you are listing multiple file to process, they will be added in the same order than listed in the command.
