
### Using Templates

#### initial view name

`App`

#### manifest dataSources

```JSON
		"resources": "resources.json",
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
		"sourceTemplate": {
			"id": "sap.ui.ui5-template-plugin.2masterdetail",
			"version": "1.60.1"
		}
```

#### manifest title

`"title": "{{appTitle}}",`
