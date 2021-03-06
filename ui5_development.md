## Bootstrapping
### Variant for Bootstrapping from Content Delivery Network
SAPUI5 can either be loaded locally with a relative path from a Web server  
or externally from a Content Delivery Network (CDN).
> Loading SAPUI5 from a CDN improves your app performance: You can load from a server that (in most cases) is much closer to your location, and you can benefit from the caching mechanism and the language fallback logic.  

Check the available versions with the respective maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html)  

You can refer to a specific version by using a versioned URL as in the following example:  
```javascript
<script id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://sapui5.hana.ondemand.com/1.42.6/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-libs="sap.m"></script>
```
The specific version is here *1.42.6*

### Variant for Bootstrapping for WEBIDE

```src="../../resources/sap-ui-core.js"```

### Variant for Bootstrapping on premise

```./resources/sap-ui-core.js```

## Using Native HTML in XML Views
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
### Load External JS
In manifest.json 
```JSON
    "sap.ui5": {
        "_version": "1.1.0",
        "resources": {
            "js": [
                {
                    "uri": "<uri>"
                }
            ],
            "css": [
                {
                    "uri": "<uri>",
                    "id": "<id>"
                }
            ]
```

### UI5 root elements
* sap.m.app
* sap.m.splitapp
