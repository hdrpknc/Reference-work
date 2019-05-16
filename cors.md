### Example for ICF-based Services

IF_HTTP_EXTENSION~HANDLE_REQUEST - Wird vom Server für jeden eingehenden HTTP Request gerufen
```ABAP
  METHOD if_http_extension~handle_request.

    DATA l_method TYPE string.
    DATA lv_request_uri TYPE string.

    lv_request_uri = server->request->get_header_field( if_http_header_fields_sap=>request_uri ).

    "Ergänzung für CORS
    server->response->set_header_field(
      EXPORTING
          name = 'Access-Control-Allow-Origin'
          value = '*'
          ).
    "Ergänzung für CORS - ENDE

    l_method = server->request->get_method( ).

    CASE l_method.

      WHEN if_http_entity=>co_request_method_get.

        handle_get( server ).

      WHEN OTHERS.
        "Fehler: unbekannte Anfrage
        server->response->set_status(
          code = 405
          reason = if_http_status=>reason_405 ). "'Method Not Allowed'
    ENDCASE.


  ENDMETHOD.
  ```
  
  
