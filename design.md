### How to set a global font - SAPUI5




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
