# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Page break component + doc

### Changed
- Changed D&D Stats bloc to have a specific for creatures (multicolumns) and one for weapons (one column).
- Update RPG Theme
- Support multiple folders to generate one file

### Fixed
- CSS and Font import
- Paragraph & Blockquote CSS

---

## [1.1.0] - 2022-02-27
### Added
- Blockquote D&D Stats bloc

---

## [1.0.0] - 2022-02-27
### Changed
- Documentation

---

## [0.7.0] - 2021-09-01
### Added
- Image option to have a link in the table of content. [#23]
- Multiple levels of Horizontal Rule [#26]
- **process** option to use an option file to manage all the options [#18]

### Changed
- Update CLI **version** command 
- Themes:
    - dark
    - default
    - rpg
- Documentation

---

## [0.6.0] - 2021-08-15
### Changed
- Update documentation [#22] [#19]
- Update **rpg** theme [#20] [#19]

---

## [0.5.0] - 2021-08-12
### Added
- Possibility to add a **Table of Content** [#14]

### Changed
- Update doc
- CSS correction 
- Add **Table of Content** in the CSS Squeleton

---

## [0.4.0] - 2021-08-11
### Added 
- CLI option for **process** operation to use a folder as Markdown input. [#4]
- Dark Theme [#2]

### Changed
- Documentation
- Code comments
- Process operation 
    - Remove **page** option
    - Add **output** option to generate PDF [#6]
- CSS correction [#13]

---

## [0.3.0] - 2021-08-08
### Added
- CLI command to generate a theme squeleton or clone an existing theme [#7]
- CLI option for **process** operation to use custom theme [#11]
- CLI option for **process** operation to set the html in a page format. [#5]

### Changed
- Documentation
- CLI command to allow multiple files in entry [#3]

---

## [0.2.0] - 2021-08-07
### Added
- CLI commands to use the processor [#1]
    - process
        - title
        - name
        - destination
        - file *[to process]*
        - css theme [#9]
- Documentation
    - CLI
    - Typo feature
- Themes
    - RPG [#8]
        
### Fixed
- Management of
    - code blocks
    - checkbox list
- Default CSS style

---

## [0.1.0] - 2021-07-31
### Added
- Documentation
    - CHANGELOG
    - README
    - Unit Testing
- Set Markdown processing for :
    - Title
    - List
    - SubList
    - Ordered list
    - Horizontal rule
    - Bold
    - Italic
    - Strikethrough
    - Link
    - Image
        - Legend
        - Add style parameter
    - Array
    - Bloc of code
    - Task list
    - Definitions
    - Blockquote
        - Normal
        - Info
        - Warning
        - Error 
    - Paragraph
