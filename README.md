# commonscript
Javascript library of common js functions for front-end

# Usage
This library is most useful when used in inline event hadlers like onclick.\

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
    <title>CommonScript Inline Event Handler Sample</title>
    
    <!-- Include the commonscript.min.js library -->
    <script src="https://cdn.jsdelivr.net/gh/vgalvoso/commonscript@v1/commonscript.min.js"></script>
</head>
<body>
    <h1>CommonScript Inline Event Handler Sample</h1>

    <!-- Sample HTML elements to interact with -->
    <input type="text" id="myInput" placeholder="Enter text">
    <div class="myDiv"></div>
    <button id="myButton" class="highlight">Click Me</button>
    <p id="outputParagraph"></p>
    
    <!-- Inline event handlers utilizing commonscript functions -->
    <button onclick="setVal('#myInput', 'Hello, CommonScript!')">Set Input Value</button>
    <button onclick="alert(getVal('#myInput'))">Get Input Value</button>
    <button onclick="setHtml('.myDiv', '<p>This is a sample paragraph.</p>')">Set Div Inner HTML</button>
    <button onclick="alert(getHtml('.myDiv'))">Get Div Inner HTML</button>
    <button onclick="addClass('#myButton', 'new-class')">Add Class to Button</button>
    <button onclick="removeClass('#myButton', 'highlight')">Remove Class from Button</button>
    <button onclick="setVal('#myInput','')">Clear</button>
    <br>
    <!-- Input field for filtering -->
    <input type="text" id="searchInput" onkeyup="filterTable('#searchInput','#dataTableBody')" placeholder="Search...">
    
    <!-- Sample table to filter -->
    <table id="dataTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody id="dataTableBody">
            <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>USA</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Canada</td>
            </tr>
            <tr>
                <td>Alice Johnson</td>
                <td>28</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Bob Brown</td>
                <td>35</td>
                <td>Australia</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
```
[sample usage]: https://github.com/vgalvoso/commonscript#sample-usage


