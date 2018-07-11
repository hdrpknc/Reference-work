

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
`http://hdrpknc.de:8034/sap/bc/ui5_ui5/sap/zui5_karte/index.html?sap-client=200&sap-ui-language=DE&sap-ui-appcache=false&*param1=amk*`
