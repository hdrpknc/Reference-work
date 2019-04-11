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
3. add mainService to Manifest

```JSON

	"dataSources": {
		"mainService": {
			"uri": "/sap/opu/odata/sap/Z_TICKET_CUST_SRV/",
			"type": "OData",
			"settings": {
				"odataVersion": "2.0",
				"localUri": "localService/metadata.xml"
			}
		}
	},
	
	...........

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

4. (optional) add `getContentDensityClass` to Component.js
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
5. Change App.view.xml
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
6. change App.controller.js or leave init empty
```JS
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("a41s.support_tickets.controller.App", {
		onInit: function () {
			var oViewModel,
			fnSetAppNotBusy,
			iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			oViewModel = new JSONModel({
				busy : true,
				delay : 0,
				layout : "OneColumn",
				previousLayout : "",
				actionButtonsInfo : {
					midColumn : {
						fullScreen : false
					}
				}
			});
			this.getView().setModel(oViewModel, "appView");

			fnSetAppNotBusy = function() {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};

// since then() has no "reject"-path attach to the MetadataFailed-Event to disable the busy indicator in case of an error
			this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
			this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
```
7. add routing in manifest
```JSON
"routing": {
	"config": {
		"routerClass": "sap.f.routing.Router",
		"viewType": "XML",
		"async": true,
		"viewPath": "a41s.support_tickets.view",
		"controlAggregation": "beginColumnPages",
		"controlId": "layout",
		"clearControlAggregation": false
	},
	"routes": [
		{
			"name": "master",
			"pattern": "",
			"target": "master"
		}
	],
	"targets": {
		"master": {
			"viewType": "XML",
			"transition": "slide",
			"clearControlAggregation": false,
			"viewId": "master",
			"viewName": "Master"
		}
	}
}
```

8. change master.controller.js

```JS

	onInit: function () {
		var oViewModel = this._createViewModel();
		this.getView().setModel(oViewModel, "masterView");
		this.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
		this.getOwnerComponent().getRouter().attachBypassed(this.onBypassed, this);
	},

	/**
	 * After list data is available, this handler method updates the
	 * master list counter
	 * @param {sap.ui.base.Event} oEvent the update finished event
	 * @public
	 */
	onUpdateFinished: function (oEvent) {
		// update the master list object counter after new data is loaded
		this._updateListItemCount(oEvent.getParameter("total"));
	},

	/**
	 * Sets the item count on the master list header
	 * @param {integer} iTotalItems the total number of items in the list
	 * @private
	 */
	_updateListItemCount: function (iTotalItems) {
		var sTitle;
		// only update the counter if the length is final
		if (this._oList.getBinding("items").isLengthFinal()) {
			sTitle = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("masterTitleCount", [iTotalItems]);
			this.getView().getModel("masterView").setProperty("/title", sTitle);
		}
	},

	_createViewModel: function () {
		return new JSONModel({
			isFilterBarVisible: false,
			filterBarLabel: "",
			delay: 0,
			title: this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("masterTitleCount", [0]),
			noDataText: this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("masterListNoDataText"),
			sortBy: "TicketId",
			groupBy: "None"
		});
	},
	
	_onMasterMatched: function () {
		//Set the layout property of the FCL control to 'OneColumn'
		//this.getModel("appView").setProperty("/layout", "OneColumn");
	},

	/**
	 * Event handler for the bypassed event, which is fired when no routing pattern matched.
	 * If there was an object selected in the master list, that selection is removed.
	 * @public
	 */
	onBypassed : function () {
		//this._oList.removeSelections(true);
	}
```
9. add detail to manifest

```JSON
	"routes": [
		{
			"name": "master",
			"pattern": "",
			"target": "master"
		},
		{
			"pattern": "ticket_s/{ticketId}",
			"name": "detail",
			"target": [
				"master",
				"detail"
			]
		}
	],
	"targets": {
		"master": {
			"viewType": "XML",
			"transition": "slide",
			"clearControlAggregation": false,
			"viewId": "master",
			"viewName": "Master"
		},
		"detail": {
			"viewName": "Detail",
			"viewId": "detail",
			"viewLevel": 1,
			"controlAggregation": "midColumnPages"
		}
	}
```

10. add to master controller:

```javascript
/**
 * Event handler for the list selection event
 * @param {sap.ui.base.Event} oEvent the list selectionChange event
 * @public
 */
onSelectionChange : function (oEvent) {
	var oList = oEvent.getSource(),
		bSelected = oEvent.getParameter("selected");

	// skip navigation when deselecting an item in multi selection mode
	if (!(oList.getMode() === "MultiSelect" && !bSelected)) {
		// get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
		this._showDetail(oEvent.getParameter("listItem") || oEvent.getSource());
	}
},

/**
 * Shows the selected item on the detail page
 * On phones a additional history entry is created
 * @param {sap.m.ObjectListItem} oItem selected Item
 * @private
 */
_showDetail : function (oItem) {
	var bReplace = !Device.system.phone;
	// set the layout property of FCL control to show two columns
	this.getOwnerComponent().getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
	this.getOwnerComponent().getRouter().navTo("detail", {
		ticketId : oItem.getBindingContext().getProperty("TicketId")
	}, bReplace);
}
```
