### SAPUI5 get URL parameters  
`http://hdrpknc.de:8034/sap/bc/ui5_ui5/sap/zui5_karte/index.html?sap-client=200&sap-ui-language=DE&sap-ui-appcache=false&param1=amk`

The parameter is here `param1=amk`

`var sValue = jQuery.sap.getUriParameters().get("param1");`
### Using Native HTML in XML Views
```xml
<mvc:View controllerName="hdrpknc.controller.ViewMain" 
	xmlns:html="http://www.w3.org/1999/xhtml"
	xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m">
	<App>
	 	<pages>
	 		<Page title="{i18n>title}">
				<content>
					<html:div id="mapid"></html:div>
					<Button text="Press Me. I am a SAPUI5 Button"/>
					<html:button>No, press me. I am native HTML Button.</html:button>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>
```

### Asynchronous module definition (AMD)

Not supported

```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"leaflet_testprojekt/libs/leaflet"
], function(Controller) {
	"use strict";

	return Controller.extend("leaflet_testprojekt.controller.ViewMain", {
		onAfterRendering: function() {
			var map2 = document.getElementById("__xmlview0--mapid");
			var mymap = L.map(map2).setView([51.505, -0.09], 13);
		}
	});
});

```
Supported

```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"leaflet_testprojekt/libs/leaflet"
], function(Controller, Leaflet) {
	"use strict";

	return Controller.extend("leaflet_testprojekt.controller.ViewMain", {
		onAfterRendering: function() {
			var map2 = document.getElementById("__xmlview0--mapid");
			var mymap = Leaflet.map(map2).setView([51.505, -0.09], 13);
		}
	});
});

```
### Load External CSS

In manifest.json 

```JSON
		"resources": {
			"css": [
				{
					"uri": "css/style.css"
				},
				{
					"uri": "css/leaflet.css"
				},
				{
					"uri": "css/MarkerCluster.css"
				},
				{
					"uri": "css/MarkerCluster.Default.css"
				}
			]
		}
	},
	"sap.platform.abap": {
```


### JS Duplicate Object

```javascript
var duplicateObject = JSON.parse(JSON.stringify(originalObject));
```

### Fullscreenmode with Index – File

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
appWidthLimited: false
