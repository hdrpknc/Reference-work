1. **Create a Service Consumer** (not a provider service like we do for SAP WS to be called from outside SAP).
    * Use Transaction: SE80 (Right Mouse on Package, Create, Enterprise Service)
    * Select “Service Consumer” and then “Continue”
    * I will use the option “external WSDL” since I will be calling a web service that is provided by a URL stored on my machine.  The URL I will use is: http://10.16.16.86/HelloWorld_WS/WebService2.asmx?WSDL
    * Enter the URL and Select “Continue”
    * Enter your package name
    * The Prefix (ZPREFIX_WS2) is used as the prefix to the actual consumer service proxy name.  You can define any unique prefix you wish.
    * At this point you have created a proxy which can be used from ABAP to call the external web service provided by the specified URL.  If you refresh your package, you will see several new items. 
    * Select the Client Proxy (Service Consumer) you just built and activate it.
> For each consumer web service you create, you will also need to create a logical port.  A logical port allows the developer to specify the attributes of the web service call.  For example specifying security requirements or whether the call should be synchronous or asynchronous.

> For each consumer web service you create, you will also need to create a logical port.  A logical port allows the developer to specify the attributes of the web service call.  For example specifying security requirements or whether the call should be synchronous or asynchronous.  

2. **Creating the Logical Port** using Transaction SOAMANAGER
    * TA SOAMANAGER
    * Select Tab: “Service Administration” then select “Web Service Configuration”
