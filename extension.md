
## to–dos :copyright: by hdrpknc
#### before the project starts
- [ ] rfc connection between frontend and backend exists
- [ ] my user exists on frontend and backend server and is the same user
- [ ] my user exists in d and q and is the same
- [ ] user has dev-accesskey on all d systems
- [ ] test data is available on d system -> NEVER ACCEPT A EXTENSION WITH DATA ON Q OR P! NEVER!!! :see_no_evil: :hear_no_evil: :speak_no_evil:
- [ ] important SAP Notes for the app are added. determine at [fiori apps library](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/home)
____________________________________
#### extend service
- [ ] create new segw-project that redefines std. OData project 
- [ ] register new service
- [ ] get system alias to q also
> * go to `/n/iwfnd/maint_service`
> * choose your service -> click on customizing -> toggle out 'standardsystem' -> save     
>   toggle in 'standardsystem' -> save **--> this workaround helps to get a transport task dialog**
#### extend app
- [ ] create extension project in webide
__________________________________
#### get the extended app into the launchpad
- [ ] negotiate with the responsible person for the system about catalogs, groups and roles and     
how they should be defined to prevent anarchy. Or don't  :trollface:
- [ ] create customizing-task on d frontend for launchpad designer    
- [ ] create z_catalog or use a catalog: 
> A Fiori catalog can include two components:
> * Tiles which represent the visual part of a tile such as a title, subtitle, information, icon and the semantic object and action for the intent-based navigation. (There is also an option with hardcoded urls, where you don't need target mappings)
> * Target mappings which define the target application which is launched when an intent (semantic object/action) is triggered.
- [ ] create z_tile
- [ ] create target-mapping for tile otherwise the tile opens nothing 
> * Before SAP NetWeaver 7.50 for the configuration of target mappings you had to use transaction LPD_CUST in addition to the SAP Fiori launchpad designer. 
> * As of SAP NetWeaver 7.50 /SAP UI Add-On 2.0 navigation targets for the application types SAPUI5 Fiori apps, transactions, Web Dynpro applications and URLs can be defined completely within the SAP Fiori launchpad designer without using transaction LPD_CUST. The general recommendation is to define navigation targets without using LPD_CUST.    
> * [Configuring Target Mappings](https://help.sap.com/viewer/a7b390faab1140c087b8926571e942b7/7.52.0/en-US/33daedef95454af68903ef1238aa0373.html)     

Title | URL (find it with SICF) | ID (in the Component.js)
--- | --- | ---
*Title of the SAPUI5 application* | `/sap/bc/ui5_ui5/sap/zcrm_opprtnty` | **cus.crm.opportunity.CRM_OPPRTNTYExtension**

- [ ] create z_role for your catalog, group & service on frontend
> 1. Give z_role to your user
> 2. On tab menu: add your fiori catalog(and group) to the menu
> 3. On tab authorization: give your role the authorization for your extended odata-service    
      1. Fill out S_Service with the manual option
      2. Choose your service as r3tr iwsg 
_____________________________________
#### deploy and test extension
_____________________________________

## additional information
### Redefined Service
#### New Entityset methods are not generated
> SEGW does unfortunately not create these methods if you add an entity set to a redefined service.
> You have to implement the generic methods in your DPC_EXT class, check whether your newly created entity set is accessed.
> If not you can call the method of the base class that will call the methods for the other entity sets of the redefined service.
```ABAP
method /IWBEP/IF_MGW_APPL_SRV_RUNTIME~GET_ENTITY.

DATA lv_entityset_name TYPE string. 
DATA lr_entity TYPE REF TO data.

lv_entityset_name = 
io_tech_request_context->get_entity_set_name( ).

CASE lv_entityset_name. 

   WHEN ‘<NewEntitySet>'. 

   …

   WHEN OTHERS.

super->

/iwbep/if_mgw_appl_srv_runtime~get_entity

(    EXPORTING
   …
   
   IMPORTING   er_entity = er_entity ).
ENDCASE.
```
