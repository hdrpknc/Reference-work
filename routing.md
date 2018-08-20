
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
- [ ] routing configuration
