### How to set a global font - SAPUI5

1. Make a custom CSS in your project folder, e.g. css\style.css
2. Include the CSS in your manifest.json
```
"resources": {
    "css": [
        {
        uri": "css/style.css"
        }
    ]
}
```
3. Set the following property, this excludes all SAP-Standard icons and their special fonts
```
 :not(.sapUiIcon) {
     font-family: Candara !important;
}
```


### Fullscreenmode 
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
