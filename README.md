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
md-processor process -f "TEST.md" -t "rpg"

# Create a pdf file
md-processor process -f "TEST.md" -t "rpg" -o pdf
```

## Prerequisite
> **You must have pagedjs and pagedjs cli installed to generate pdf files.**
> ```
> npm install -g pagedjs-cli pagedjs
> ```

<br/>

## Themes available
- dark
- default
- rpg

### Custom theme
If you are not interested about one of these theme, you can generate a theme squeleton and use your own theme!

> If you are using a custom theme, you must have all the fonts locally.

<br/>

---

<br/>

## Documentation
Links to the detailed documentation of the project.

### Usage
- [CLI](./documentation/cli.md)
- [Typo feature](./documentation/typo_feature.md)

### Development
- [Development docs](./documentation/development.md)
- [Technologies/Tool used](./documentation/references.md)
- [Unit Testing](./documentation/unit_testing.md)


