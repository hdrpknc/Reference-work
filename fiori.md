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

## Find index.html

Find the bsp application under `/sap/bc/ui5_ui5/sap/` with SICF     
and test service after found

or    

`http://<host>.<domain>:<port>/sap/bc/ui5_ui5/sap/<BSP-Application>/index.html`

## Empty NWGW cache

* `/UI2/INVALIDATE_GLOBAL_CACHES`
* `/UI2/INVALIDATE_CLIENT_CACHES`
* `/UI5/APP_INDEX_CALCULATE`

## Support Assistent
The Support Assistant enables developers to check whether their apps are built according to the SAPUI5 best practices and guidelines.
> The minimum SAPUI5 version in which the Support Assistant is available is 1.44.17.

To run the Support Assistant with URL parameter:
* ```sap-ui-support=true```
* In a separate window, use the parameter ```sap-ui-support=true,window```

To run from the Technical Information Dialog:    
> CTRL + SHIFT + ALT + P

## important roles

SAP_UI_FLEX_KEY_USER
