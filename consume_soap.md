1. Create a Service Consumer (not a provider service like we do for SAP WS to be called from outside SAP).
    * Use Transaction: SE80 (Right Mouse on Package, Create, Enterprise Service)
    * Select “Service Consumer” and then “Continue”
    * I will use the option “external WSDL” since I will be calling a web service that is provided by a URL stored on my machine.  The URL I will use is: http://10.16.16.86/HelloWorld_WS/WebService2.asmx?WSDL

