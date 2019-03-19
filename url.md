
## URL parameter

* Deactivate component Preload ```&sap-ui-xx-componentPreload=off```
* Debug Mode ```sap-ui-debug=true```

`?sap-ui-debug=true&sap-ui-xx-componentPreload=off`    
`?sap-ui-xx-componentPreload=off`

### URL Parameters for the SAP Fiori Launchpad

* To deactivate cache busting in your web browser. ```?sap-ushell-nocb=true``` before the `#` in lp      
This is only needed for troubleshooting purposes    

* To improve performance, the SAPUI5 cache buster tokens themselves are cached on the front-end server, with a validity of two hours. If you need to bypass this server-side cache, set this parameter to "true". ```sap-ushell-cb-nocache```

`?sap-ushell-nocb=true&sap-ushell-cb-nocache=true`

* force standard theme ```flp?sap-theme=sap_belize```

### SAPUI5 get URL parameters  
`http://hdrpknc.de:8034/sap/bc/ui5_ui5/sap/zui5_karte/index.html?sap-client=200&sap-ui-language=DE&sap-ui-appcache=false&param1=amk`

The parameter is here `param1=amk`

`var sValue = jQuery.sap.getUriParameters().get("param1");`

