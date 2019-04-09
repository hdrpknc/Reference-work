1. Create empty template project from webide
2. Create appContext model -> Change Component.js or Manifest.json    

add to init
```JS
	// set appContext model
	this.setModel(new JSONModel(), "appContext");
```    

OR add to manifest 
```JSON
	"appContext": {
		"type": "sap.ui.model.json.JSONModel",
		"settings": {},
		"preload": false
	}
```
3. add MainService to Manifest

```JSON
	"models": {
		"i18n": {
			"type": "sap.ui.model.resource.ResourceModel",
			"settings": {
				"bundleName": "a41s.support_tickets.i18n.i18n"
			}
		},
		"": {
			"dataSource": "mainService",
			"preload": true
		}
	},
```

3. (optional) add `getContentDensityClass` to Component.js
```JS
/**
 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
 * design mode class should be set, which influences the size appearance of some controls.
 * @public
 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
 */
getContentDensityClass : function() {
	if (this._sContentDensityClass === undefined) {
		// check whether FLP has already set the content density class; do nothing in this case
		// eslint-disable-next-line sap-no-proprietary-browser-api
		if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
			this._sContentDensityClass = "";
		} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
			this._sContentDensityClass = "sapUiSizeCompact";
		} else {
			// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
			this._sContentDensityClass = "sapUiSizeCozy";
		}
	}
	return this._sContentDensityClass;
}
```
4. Change App.view.xml
from
```XML
<mvc:View controllerName="a41s.support_tickets.controller.App" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m">
	<Shell id="shell">
		<App id="app">
			<pages>
				<Page id="page" title="{i18n>title}">
					<content></content>
				</Page>
			</pages>
		</App>
	</Shell>
</mvc:View>
```
to
```XML
<mvc:View
	controllerName="a41s.support_tickets.controller.App"
	displayBlock="true"
	height="100%"
	xmlns="sap.m"
	xmlns:f="sap.f"
	xmlns:mvc="sap.ui.core.mvc">
	<App
		id="app"
		busy="{appView>/busy}"
		busyIndicatorDelay="{appView>/delay}">
		<f:FlexibleColumnLayout
			id="layout"
			layout="{appView>/layout}"
			backgroundDesign="Translucent">
		</f:FlexibleColumnLayout>
	</App>
</mvc:View>

```
5. change App.controller.js to 
```JS
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("a41s.support_tickets.controller.App", {
		onInit: function () {
			var oViewModel = new JSONModel({
				busy: false,
				delay: 0,
				layout: "OneColumn",
				previousLayout: "",
				actionButtonsInfo: {
					midColumn: {
						fullScreen: false
					}
				}
			});
			this.getView().setModel(oViewModel, "appView");

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
```
