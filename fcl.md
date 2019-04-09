1. Create empty template project from webide
2. Change App.view.xml
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
```XML
<mvc:View controllerName="a41s.support_tickets.controller.App" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m">
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
</mvc:View>
```
