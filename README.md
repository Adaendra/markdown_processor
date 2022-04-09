# Markdown Processor

![GitHub package.json Version](https://img.shields.io/github/package-json/v/Adaendra/markdown_processor?color=brightgreen) ![GitHub License](https://img.shields.io/github/license/Adaendra/markdown_processor)

Project to make personalized **HTML** or **pdf** files from **Markdown** files.

*Examples*
```
# Process the TEST.md process (by default it will be an HTML file)
md-processor process -f "TEST.md"

# Process multiple files
md-processor process -f "TEST.md" -f "TEST2.md"

# Use a specific theme
md-processor process -f "TEST.md" --theme "rpg"

# Create a pdf file
md-processor process -f "TEST_FILE.md" --theme "rpg" -o pdf
```

For more informations about the available commands : [CLI documentation](documentation/how-to/cli.md)

<br/>

---

<br/>

## To install
The CLI is available on [npm](https://www.npmjs.com/package/markdown-processor).

```bash
npm i markdown-processor
```

<br/>

---

<br/>

## Prerequisite
> **You must have pagedjs and pagedjs cli installed to generate pdf files.**
> ```
> npm install -g pagedjs-cli pagedjs
> ```

<br/>

---

<br/>

## Themes available
- dark
- default
- rpg

### Custom theme
If you are not interested about one of these theme, you can generate a theme squeleton and use your own theme!

> If you are using a custom theme, you must have all the fonts locally.

*Examples*
```
# Generate locally a CSS Squeleton with a timestamped name
md-processor generate_squeleton

# Generate locally a CSS Squeleton with the name you've decided
md-processor generate_squeleton -n my_custom_theme

# Copy the CSS of an existing theme
md-processor generate_squeleton --theme rpg
```

<br/>

---

<br/>

## Documentation
Links to the detailed documentation of the project.

### Usage
- [CLI](documentation/how-to/cli.md)
- [Typo feature](documentation/how-to/typo_feature.md)

### Development
- [Development docs](documentation/dev/development.md)
- [Technologies/Tool used](documentation/dev/references.md)
- [Unit Testing](documentation/dev/unit_testing.md)

---

## Thanks
To make this project working correctly, we are using some policies/libraries... 

First, the complete list is [here](documentation/dev/references.md) and big up to all the people who worked on it!
