# CLI

Documentation about the CLI commands.

---

## Commands
### process
Process a file to transform Markdown file.

#### Options
|Name|Description|Default|Required|
|---|---|---|---|
|**-n, --name <file_name_destination>**|Name of the generated file. If not defined, the name will be the current timestamp.|*/*|no|
|**-d, --destination <file_path_destination>**|Path to the generated file.|./|no|
|**-f, --file <file_to_process>**|Path to the MarkDown to process.|*/*|yes|
|**-t, --titre <title_in_html_file>**|Title to show in the HTML file| |no|
