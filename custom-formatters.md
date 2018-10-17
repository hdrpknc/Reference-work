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
### Custom Formatters without view templates

```javascript
firstStatus: new sap.m.ObjectStatus({
 text: "Prio: {Priority}",
 state: {path: 'Priority', formatter: function(prio){return "Warning";}}
}),```javascript
