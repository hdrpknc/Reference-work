
## routing sample with a split app :copyright: by hdrpknc

#### sample with webide
- [ ] start project from template
- [ ] name initial view e.g. App or ViewMain -> App.view.xml or ViewMain.view.xml
- [ ] you have to add an root element. In our case it is sap.m.SplitApp
```javascript
<mvc:View controllerName="a41smytickets.controller.ViewMain" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc"
	displayBlock="true" xmlns="sap.m">
	<SplitApp id="idAppControl"></SplitApp>
</mvc:View>
```
- [ ] the splitApp needs an id 
- [ ] add routing configuration. use the descriptor editor to add changes quickly to manifest.json 
```JSON
"sap.ui5": {
...
	"config": {
		"viewPath": "a41smytickets.view",
		"controlId": "idAppControl"
	}
}
```
* viewPath = folder where views are located
* controlId = our root element
- [ ] create Masterview and Detailview in the view folder
```javascript
<mvc:View controllerName="a41smytickets.controller.ViewMaster" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc"
	displayBlock="true" xmlns="sap.m">
			<Page title="{i18n>title}">
				<content>
						<Label text="Master"/>
				</content>
			</Page>
</mvc:View>
```
- [ ] create related controls
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("a41smytickets.controller.ViewMaster", {

	});
});
```
- [ ] now add targets with the descriptor editor. 
	1. View Name = Name of the view which shall be loaded
	2. View Level = view level is relevant for transition from one page to another
	3. Control Aggregation = choose which aggregation(master or detail) shall be triggered (e.g. masterPages or detailPages) 
