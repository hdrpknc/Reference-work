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
