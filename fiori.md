## Find installed SAPUI5 runtime version
You have two options for that
* find it out with the help of the client  
Open with the key 'F12' the Developer Tools -> Console -> and type in: `sap.ui.version`
* check the version on the system  
In SAP ABAP Stack-> Open the ABAP Application Server URL -> 
`http://[host]:[port]/sap/public/bc/ui5_ui5/`  
in your browser
### How to find host and port
* host  
Choose System - > status -> Navigate to Other Kernel information  
& under system information tab you can find the host IP address.
* port  
Go to the Transaction `SMICM` -> Choose from the menu "GOTO -> Services".
## Find Launchpad 
`/n/ui2/flp`    
or    
`http://<host>.<domain>:<port>/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=<client>`    
### What if your browser can't find the site?
you probably just forgot to edit your hosts file. check your sap logon for the needed ip addresses 
## Find Launchpad Designer
| ta | info    |
|----------------|---------------------------------------------|
| /UI2/FLPD_CONF | Fiori Launchpad Designer (cross-client)     |
| /UI2/FLPD_CUST | Fiori Launchpad Designer (client-specific)  |     

`http://<host>.<domain>:<port>/sap/bc/ui5_ui5/sap/arsrvc_upb_admn/main.html?sap-client=<client>&scope=CUST`
`/sap/bc/ui5_ui5/sap/arsrvc_upb_admn/main.html?sap-client=100&sap-language=DE&scope=CONF`

## Empty NWGW cache

* `/UI2/INVALIDATE_GLOBAL_CACHES`
* `/UI2/INVALIDATE_CLIENT_CACHES`
* `/UI5/APP_INDEX_CALCULATE`

## URL parameter

* Deactivate component Preload ```&sap-ui-xx-componentPreload=off```
* Debug Mode ```sap-ui-debug=true```

`?sap-ui-debug=true&sap-ui-xx-componentPreload=off`

### URL Parameters for the SAP Fiori Launchpad

* To deactivate cache busting in your web browser. ```?sap-ushell-nocb=true``` before the `#` in lp      
This is only needed for troubleshooting purposes    

* To improve performance, the SAPUI5 cache buster tokens themselves are cached on the front-end server, with a validity of two hours. If you need to bypass this server-side cache, set this parameter to "true". ```sap-ushell-cb-nocache```

`?sap-ushell-nocb=true&sap-ushell-cb-nocache=true`

* force standard theme

```flp?sap-theme=sap_belize```

## Support Assistent
The Support Assistant enables developers to check whether their apps are built according to the SAPUI5 best practices and guidelines.
> The minimum SAPUI5 version in which the Support Assistant is available is 1.44.17.

To run the Support Assistant with URL parameter:
* ```sap-ui-support=true```
* In a separate window, use the parameter ```sap-ui-support=true,window```

To run from the Technical Information Dialog:    
> CTRL + SHIFT + ALT + P
