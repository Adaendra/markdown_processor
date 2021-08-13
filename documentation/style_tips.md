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
