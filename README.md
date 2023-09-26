# commonscript
Javascript library of common js functions for front-end

## Select an element
selector - css selector
```javascript
getElement(selector)
```

## Set value of a form related element
selector - css selector\
value - Value to set
```javascript
setVal(selector,value)
```

## Get value of a form related element
selector - css selector
```javascript
getVal(selector)
```

## Set innerHTML of an element
selector - css selector\
html - inner HTML to set
```javascript
setHtml(selector,html)
```

## Get innerHTML of an element
selector - css selector
```javascript
getHtml(selector)
```

## Clear a value or innerHTML of an element
selector - css selector
```javascript
clear(selector)
```

## Add class name to an element
selector - css selector\
class - class name to add
```javascript
addClass(selector,className)
```

## Remove class name from an element
selector - css selector\
class - class name to remove
```javascript
removeClass(selector,className)
```

## Set an attribute on an element
selector - css selector\
attr - attribute\
value - attribute value
```javascript
setAttr(selector,attr,value)
```

## Remove attribute from an element
selector - css selector\
attr - attribute to remove
```javascript
removeAttr(selector,attr)
```

## Filter a table
inputId - id of the search text input\
tableId - id of the table(body) to filter
```javascript
filterTable(inputId,tableId)
```

## Filter a searchable dropdown
inputId - id of the search text input\
divId - id of the div of dropdown options to filter
```javascript
filterTable(inputId,divId)
```

## Unmask a password field
sel - css selector
```javascript
showPassword(sel)
```

## Copy a value of form input element to other input element
origin - css selector of input element to pass value from\
destination - css selector of input element to pass value into
```javascript
passText(origin,destination)
```

## Copy a text to clipboard
text - text to copy to clipboard
```javascript
copyToClipboard(text)
```


