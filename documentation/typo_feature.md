# Typo feature
## Title
```markdown
# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6
```
![title example](./typo_feature/title.PNG)

---

<br/>

## List
```markdown
- a
+ b
* c
```
![list example](./typo_feature/list.PNG)

---

<br/>

## SubList
```markdown
- a
+ b
* c
    - c1
    + c2
    * c3
```
![sublist example](./typo_feature/sublist.PNG)

---

<br/>

## Ordered list
```markdown
1. A
1. B
1. C
    1. C1
    1. C2
    1. C3
1. D
```
![ordered list example](./typo_feature/ordonned_list.PNG)

---

<br/>

## Horizontal rule
```markdown
---
```
![horizontal rule example](./typo_feature/horizontal_rule.PNG)

---

<br/>

## Bold
```markdown
**bold text**
```
![bold example](./typo_feature/bold.PNG)

---

<br/>

## Italic
```markdown
*italic text*
```
![italic example](./typo_feature/italic.PNG)

---

<br/>

## Strikethrough
```markdown
~~strikethrough~~
```
![strikethrough example](./typo_feature/strikethrough.PNG)

---

<br/>

## Link
```markdown
[Link](http://google.com)
```
![link example](./typo_feature/link.PNG)

---

<br/>

## Image
```markdown
![Image](https://pbs.twimg.com/media/EcrQxjsX0AQJoXD?format=jpg&name=large)
```
![image example](./typo_feature/image.PNG)

### Options
In a JSON Object, you can override the following options:

|Name|Type|Example|Description|
|---|---|---|---|
|showLegend|boolean|true|Boolean to know if you want to show or hide the legend of the image|
|width|string|80px|To define the width of the image|
|height|string|90px|To define the height of the image|
|class|string|css_class|Define which CSS style class must be added to your image|
|table_of_content|integer|1|Between 1 to 6. Define the title level to your image in the table of content. The title use will be the legend.|

*example*
```markdown
![Image {"showLegend":true}](https://pbs.twimg.com/media/EcrQxjsX0AQJoXD?format=jpg&name=large)
```
![image legend example](./typo_feature/image_legend.PNG)



---

<br/>

## Paragraph
```markdown
First Paragraph

Second Paragraph
```
![paragraph example](./typo_feature/paragraph.PNG)

---

<br/>

## Array
```markdown
|A|B|
|---|---|
|1|2|
|3|4|
```
![array example](./typo_feature/array.PNG)

---

<br/>

## Bloc of code
```markdown
```javascript
var test = "yolo";
```
```
![code example](./typo_feature/code.PNG)

---

<br/>

## Task list
```markdown
- [ ] Task 1
- [ ] Task 2
- [x] Task 3
```
![task list example](./typo_feature/task_list.PNG)

---

<br/>

## Definitions
```markdown
Definition
: a
: b
```
![definition example](./typo_feature/definition.PNG)

---

<br/>

## Blockquote
### Normal
```markdown
> Normal
```
![blockquote_normal example](./typo_feature/blockquote_normal.PNG)
### Info
```markdown
> **[INFO]**
> Info
```
![blockquote_info example](./typo_feature/blockquote_info.PNG)
### Warning
```markdown
> **[WARNING]**
> Warning
```
![blockquote_warning example](./typo_feature/blockquote_warning.PNG)
### Error 
```markdown
> **[ALERT]**
> Alert
```
![blockquote_alert example](./typo_feature/blockquote_alert.PNG)
