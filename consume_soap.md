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

2. **Creating the Logical Port** using Transaction SOAMANAGER
    * TA SOAMANAGER
    * Select Tab: “Service Administration” then select “Web Service Configuration”
    * Search for your proxy.  In my case I searched for:   “ZPREFIX_WS2CO_WEB_SERVICE2SOAP”
    * Highlight the matched row and select “Apply Selection”.  The following proxy details are displayed:
    * Notice there are 0 Logical Ports (we need to create one)
    * Select the “Configurations” Tab
    * Select the button “Create”

3. **call the web service from ABAP**
```ABAP
report  z_test_consumer_ws_2.

*declarations for Try/Catch block exception handling
data: exc type ref to cx_root.
data: msg type string.

start–of–selection.

* declare a reference to your proxy consumer object
  data proxy_test type ref to zprefix_ws2co_web_service2soap.

  try.
*     instantiate the object reference
      if proxy_test is not bound.
        create object proxy_test type zprefix_ws2co_web_service2soap.
      endif.

*     declare the input and ouput references to your web service call
*     you can find these by clicking on “Client Proxies” and selecting the
*     #External View” tab for your proxy
      data: input type zprefix_ws2get_mail_address_s1,
            output type zprefix_ws2get_mail_address_so.

*     there is one input value for this service call for user id
      input–str_user_id = sy–uname.

*     call the method (web service call) you can use the pattern to generate the code if you wish
      call method proxy_test->get_mail_address
        exporting
          input  = input
        importing
          output = output.

*     process the output
      data: wa_get_mail type zcnp_ws_phil_get_mail_1test_st.
      loop at output–get_mail_address_result–test_struct into wa_get_mail.
        write wa_get_mail–emp_email.
      endloop.
    catch cx_ai_system_fault into exc.
      msg = exc->get_text( ).
      write:/  msg.
  endtry.
  ```


