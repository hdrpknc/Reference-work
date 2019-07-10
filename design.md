### How to set a global font - SAPUI5

1. Make a custom CSS in your project folder, e.g. css\style.css
2. Include the CSS in your manifest.json
```json
"resources": {
    "css": [
        {
        "uri": "css/style.css"
        }
    ]
}
```
3. Set the following property, this excludes all SAP-Standard icons and their special fonts
```css
 :not(.sapUiIcon) {
     font-family: Candara !important;
}
```

### How to make SAPUI5 Icons available in Text

```css
 :not(.sapUiIcon) {
     font-family: Candara,sap-icons !important;
}
```

```xml
<core:Item key="veryhigh" text="Sehr hoch &#xe04b;"/>
```

### Fullscreenmode - old
#### with Index – File

```html
<script>
	sap.ui.getCore().attachInit(function() {
			new sap.m.Shell({
				app: new sap.ui.core.ComponentContainer({
					height : "100%",
					name : "Kartenintegration"
				}),
				appWidthLimited: false
			}).placeAt("content");
	});
</script>
```
```appWidthLimited: false```
#### with manifest.json
```json
"sap.ui": {
    "fullWidth": true,
}
```

### Fullscreenmode - new
#### with manifest.json
```json
"sap.ui5": {
	"config": {
		"fullWidth": true
	}
}
```
### if width 100% ist not working
```javascript
	<layoutData>
	    <FlexItemData growFactor="1" />
	</layoutData>
```
