# Style tips
## Columns
Set-up multiple columns
```css
columns: 2;
```

[Documentation](https://www.w3schools.com/cssref/css3_pr_columns.asp)

---

## Footer
To have counter at the bottom of your page.
```css
@page:left {
    @bottom-right {
        content: counter(page);
    }
}
@page:right {
    @bottom-left {
        content: counter(page);
    }
}
```

---

## Full page image
First, declare your image with a specific class
```markdown
![Image {"class":"full-page page-break-after"}](https://pbs.twimg.com/media/EcrQxjsX0AQJoXD?format=jpg&name=large)
```

Then declare the class to have the image in full page
```css
.full-page img{
    float:top;
    float-reference: page;
    position: absolute;
    top: -20px; /* margin top of the page */
    left: -20px; /* left margin of the page */
    width: calc(100% + 40px);
    height: calc(100% + 44px);
    page-break-before: always;
}

.page-break-after {
    page-break-after: always;
}
```

You may declare the "page-break-after", only on the last element of each full page list elements that follow.

---

## Page breaks
```css
/* To have a page break after an element. */
page-break-after: always;

/* To have a page break before an element. */
page-break-before: always;
```

[Page-Break-After documentation](https://www.w3schools.com/cssref/pr_print_pageba.asp)

[Page-Break-Before documentation](https://www.w3schools.com/cssref/pr_print_pagebb.asp)

---

## Page margin boxes
The list of all the margin boxes where you can add elements.

```css
@top-left-corner {...}
@top-left {...}
@top-center {...}
@top-right {...}
@top-right-corner {...}
@left-top {...}
@left-middle {...}
@left-bottom {...}
@right-top {...}
@right-middle {...}
@right-bottom {...}
@bottom-left-corner {...}
@bottom-left {...}
@bottom-center {...}
@bottom-right {...}
@bottom-right-corner {...}
```

---

## Background Image for a PDF file
For **@page**, define your background-image and your background size and let the magic work!
```css
@media print {
    @page {
        background-image:url('./resources/PHB-background-costal.png');
        background-size: 100% 100%;
    }
}
```
