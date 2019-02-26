
### How to skip any authority check

1. Execute command `/H`
2. Execute the transaction/report. ABAB debugger will be launched.
3. In the menu bar select Breakpoints --> Breakpoint at --> Statement...
4. In the popup window write `authority-check` and accept (enter)
5. F8 to continue with the execution. The execution will stop when first authority-check statement is reached.
6. F5 to execute the statement and check if system variable sy-subrc has a value not equal to 0.
7. If it has a value not equal to 0, this means that you don't have authorization for this authority check and that you will be allowed to go on with the execution. If it is 0, F8 to go on until the next authority-check statement.
8. When you reach an authority-check and execute it and sy-subrc has a  value not equal to 0, then you will have to update sy-subrc to 0 in order to be allowed to go on with the execution.
9. F8 to go on. You will have to repeat previous steps in all authority-check statements reached where sy-subrc is valuated to non 0 value when it is executed

### Delete repository objects

1. SE03
2.  “Change Object Directory Entries” / Objektkatalogeinträge ändern 

### find and get notes
1. first find the error badi-, class- or app- name
2. go to https://support.sap.com/en/my-support/knowledge-base.html
3. copy note number and download sap note with ta `snote`
4. implement note
5. transport to testsystem

### try catch
```ABAP
*declarations for Try/Catch block exception handling
DATA: exc TYPE REF TO cx_root.
DATA: msg TYPE string.
TRY.
  CALL METHOD proxy_test->generate_interaction_id
      EXPORTING
        generate_interaction_id        = input
      IMPORTING
        generate_interaction_id_respon = output.
  CATCH cx_ai_system_fault INTO exc .
    msg = exc->get_text( ).
    WRITE:/  msg.
  CATCH zkedbcx_service_exception INTO exc.
    msg = exc->get_text( ).
    WRITE:/  msg.
ENDTRY.
```
### link from abap with sso

```ABAP
* single sign-on
  constants lc_icf_url type string value '/sap/public/myssocntl'. "#EC SYNTCHAR
  data lv_sso_active   type abap_bool.
  call method cl_icf_tree=>if_icf_tree~service_from_url
    exporting
      url                   = lc_icf_url
      hostnumber            = 0
      authority_check       = abap_false
    importing
      icfactive             = lv_sso_active
    exceptions
      wrong_application     = 1
      no_application        = 2
      not_allow_application = 3
      wrong_url             = 4
      no_authority          = 4
      others                = 5.
  if sy-subrc ne 0.
    lv_sso_active = abap_false.
  endif.
*    if lv_sso_active eq abap_false.
*      message e027(bsp_wd) with lc_icf_url.
*    endif.

  data lv_urlc type c length 1024.
  lv_urlc = lv_url.

* start browser with single sign-on
  if lv_sso_active = abap_true.
    data lv_container type ref to cl_gui_container.         "#EC NEEDED
    data lv_viewer    type ref to cl_gui_html_viewer.

    create object lv_viewer
      exporting
        parent             = lv_container
      exceptions
        cntl_error         = 1
        cntl_install_error = 2
        dp_install_error   = 3
        dp_error           = 4
        others             = 5.
    if sy-subrc ne 0.
      message id sy-msgid type sy-msgty number sy-msgno with sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
              display like 'E'.
    endif.

    call method lv_viewer->enable_sapsso
      exporting
        enabled    = abap_true
      exceptions
        cntl_error = 1
        others     = 2.
    if sy-subrc ne 0.
      message id sy-msgid type sy-msgty number sy-msgno with sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
              display like 'E'.
    endif.

    call method lv_viewer->detach_url_in_browser
      exporting
        url        = lv_urlc
      exceptions
        cntl_error = 1
        others     = 2.
    if sy-subrc ne 0.
      message id sy-msgid type sy-msgty number sy-msgno with sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
              display like 'E'.
    endif.

    call method cl_gui_cfw=>flush
      exceptions
        cntl_system_error = 1
        cntl_error        = 2
        others            = 3.
    if sy-subrc ne 0.
      message id sy-msgid type sy-msgty number sy-msgno with sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
              display like 'E'.
    endif.

* start browser without single-sign-on
  else.
    call function 'CALL_BROWSER'
      exporting
        url                    = lv_urlc
*       WINDOW_NAME            = ' '
        new_window             = abap_true
      exceptions
        frontend_not_supported = 1
        frontend_error         = 2
        prog_not_found         = 3
        no_batch               = 4
        unspecified_error      = 5
        others                 = 6.
    if sy-subrc <> 0.
      message id sy-msgid type 'S' number sy-msgno with sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
              display like 'E'.
    endif.
  endif.
```
