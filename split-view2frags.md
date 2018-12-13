### Splitting the view


#### Retrieving Control Instances by Their ID

Due to the above prefixing that guarantees unique IDs, there are different cases possible which require different calls.
Assuming the control has the ID ```myControl```, there are two ways how to retrieve it by its ID.

- Retrieving a control instance when the fragment is not part of a view
  - When no fragment ID was given: ```myControl = sap.ui.getCore().byId("myControl")```
