

# Work of Reference
## SAPUI5
### Find installed SAPUI5 runtime version
You have two options for that
* find it out with the help of the client  
Open with the key 'F12' the Developer Tools -> Console -> and type in: `sap.ui.version`
* check the version on the system  
In SAP ABAP Stack-> Open the ABAP Application Server URL -> 
`http://[host]:[port]/sap/public/bc/ui5_ui5/`  
in your browser
#### How to find host and port
* host  
Choose System - > status -> Navigate to Other Kernel information  
& under system information tab you can find the host IP address.
* port  
Go to the Transaction `SMICM` -> Choose from the menu "GOTO -> Services".
### Find Launchpad 
`/n/ui2/flp`
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
### Lifecycle hooks
SAPUI5 provides the following lifecycle hooks:
#### onInit:
Called when a view is instantiated and its controls (if available) have already been created; used to modify the view before it is displayed to bind event handlers and do other one-time initialization.
```javascript
	onInit: function() {
		var oModelAppContext = new sap.ui.model.json.JSONModel();
		oModelAppContext.setData({
			aMessages: []
		});
		sap.ui.getCore().setModel(oModelAppContext, "appContext");
		this.getView().setModel(sap.ui.getCore().getModel("appContext"));
		MP.oMessagePopover.setModel(sap.ui.getCore().getModel("appContext"));
	},
```
#### onExit:
Called when the view is destroyed; used to free resources and finalize activities.
#### onAfterRendering:
Called when the view has been rendered and, therefore, its HTML is part of the document; used to do post-rendering manipulations of the HTML. SAPUI5 controls get this hook after being rendered.
#### onBeforeRendering:
Invoked before the controller view is re-rendered and not before the first rendering; use onInit() for invoking the hook before the first rendering.
### Custom Formatters
Formatter.js
```javascript
sap.ui.define([], function() {
	"use strict";
	return {
		formatDistance: function(sValue) {
			if (sValue === null) {
				return null;
			} else if (sValue === undefined) {
				return undefined;
			} else {
				return sValue.replace(".", ",");
			}
		},
```
MainView.controller.js
```javascript
sap.ui.define([
	//other...
	"Kartenintegration/utils/Formatter"
], function(Controller, Map, Connection, Store, TTB, MP, MB, Formatter) {
	"use strict";

	return Controller.extend("Kartenintegration.controller.ViewMain", {

		formatter: Formatter,
		onInit: function() {
```
MainView.view.xml
```xml
<table:template>
	<Text text="{path: 'distanz', formatter: '.formatter.formatDistance'}" wrapping="false"/>
</table:template>
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
### jQuery Ajax

```Javascript
doCall: function(httpMethod, url, request, token) {
			var response = {};
			$.ajax({
				type: httpMethod,
				async: false,
				url: url,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(request),
				headers: {
					"Authorization": "Basic " + btoa("xtok:" + token),
					"Content-Type": "application/json"
				},
				success: function(data, status, xhr) {
					response.data = data;
					response.status = status;
					response.xhr = xhr;
				},
				error: function(xhr, status, error) {
					response.xhr = xhr;
					response.status = status;
					response.error = error;
				}
			});
			return response;
		}

```
### oModel.read
```javascript
var oFilter = new sap.ui.model.Filter("Tournummer", sap.ui.model.FilterOperator.EQ, sRoute);
var aFilters = [];
aFilters.push(oFilter);


var mParameters = {};
mParameters.urlParameters = {
	"$expand": "StoppSet"
};
mParameters.filters = aFilters;
mParameters.success = function(oData, oResponse) {
	console.log(oData);
};
mParameters.error = function(oError) {
	console.log(oError);
};

var oModel = new sap.ui.model.odata.ODataModel(this.getServiceURL());
oModel.read("/TourSet", mParameters);

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
