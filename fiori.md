### Find Launchpad 
`/n/ui2/flp`    
or    
`http://<host>.<domain>:<port>/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=<client>`    
### Find Launchpad Designer
| ta | info    |
|----------------|---------------------------------------------|
| /UI2/FLPD_CONF | Fiori Launchpad Designer (cross-client)     |
| /UI2/FLPD_CUST | Fiori Launchpad Designer (client-specific)  |     

`http://<host>.<domain>:<port>/sap/bc/ui5_ui5/sap/arsrvc_upb_admn/main.html?sap-client=<client>&scope=CUST`
`/sap/bc/ui5_ui5/sap/arsrvc_upb_admn/main.html?sap-client=100&sap-language=DE&scope=CONF`

### Empty NWGW cache

* `/UI5/APP_INDEX_CALCULATE`
* `/UI2/INVALIDATE_CLIENT_CACHES`
* `/UI2/INVALIDATE_GLOBAL_CACHES`
