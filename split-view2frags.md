### Compose view through fragments

ViewMain.view.xml
```XML
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" controllerName="Kartenintegration.controller.ViewMain">
    <core:Fragment               fragmentName="Kartenintegration.fragments.HelloDialog" type="XML" />
    <core:Fragment id="idblabla" fragmentName="Kartenintegration.fragments.HelloDialog" type="XML" />
</mvc:View>
```
webapp/fragments/HelloDialog.fragment.xml
```XML
<core:FragmentDefinition
   xmlns="sap.m"
   xmlns:core="sap.ui.core" >
   <Dialog
      id="helloDialog"
      title="Hello {/recipient/name}">
   </Dialog>
</core:FragmentDefinition>
```


#### Retrieving Control Instances by Their ID

Due to the above prefixing that guarantees unique IDs, there are different cases possible which require different calls.
Assuming the control has the ID ```myControl```, there are two ways how to retrieve it by its ID.

- Retrieving a control instance when the **fragment is not part of a view**
  - When no fragment ID was given: ```myControl = sap.ui.getCore().byId("myControl")```
  - When a fragment ID myFrag was given: ```myControl = sap.ui.core.Fragment.byId("myFrag", "myControl")```
- Retrieving a control instance when the **fragment is embedded into a view** and the code is inside a controller. The controller is called this in the following examples
  - When no fragment ID was given: ```myControl = this.byId("myControl")```
  - When a fragment ID myFrag was given: ```myControl = this.byId(sap.ui.core.Fragment.createId("myFrag", "myControl"))```
  
  
 
