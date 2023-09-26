# commonscript
Javascript library of common js functions for front-end

# Usage
This library is most useful when used in inline event hadlers like onclick.\
See [sample usage]

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

## Sample Usage
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CommonScript Example</title>
</head>
<body>
    <input type="text" id="myInput" value="Hello, world!">
    <button onclick="clear('#myInput')">Clear Input</button>

    <p id="myParagraph">This is some text.</p>
    <button onclick="setHtml('#myParagraph', 'New content')">Change Text</button>

    <div id="myDiv" class="my-class">This is a div.</div>
    <button onclick="removeClass('#myDiv', 'my-class')">Remove Class</button>

    <table id="myTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>
    <input type="text" id="tableSearch" placeholder="Search by name">
    <button onclick="filterTable('#tableSearch', '#myTable')">Filter Table</button>

    <select id="mySelect">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
    </select>
    <input type="text" id="dropdownSearch" placeholder="Search in dropdown">
    <button onclick="filterDropdown('#dropdownSearch', '#mySelect')">Filter Dropdown</button>

    <input type="password" id="passwordField" value="mypassword">
    <button onclick="showPassword('#passwordField')">Show Password</button>

    <input type="text" id="originInput" value="Copy me!">
    <input type="text" id="destinationInput" placeholder="Paste here">
    <button onclick="passText('#originInput', '#destinationInput')">Copy Text</button>

    <button onclick="copyToClipboard('Text to copy')">Copy to Clipboard</button>

    <script src="commonscript.js"></script>
</body>
</html>
```
[sample usage]: https://github.com/vgalvoso/commonscript#sample-usage


