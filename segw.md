
### redefined IF_MGW_APPL_SRV_RUNTIME~GET_ENTITYSET

```ABAP
 METHOD /iwbep/if_mgw_appl_srv_runtime~get_entityset.
    TRY.
        IF iv_entity_name = 'CustomizingDepartment'.
          CALL METHOD me->customdepartment_get_entityset
            EXPORTING
              iv_entity_name           = iv_entity_name
              iv_entity_set_name       = iv_entity_set_name
              iv_source_name           = iv_source_name
              it_filter_select_options = it_filter_select_options
              it_order                 = it_order
              is_paging                = is_paging
              it_navigation_path       = it_navigation_path
              it_key_tab               = it_key_tab
              iv_filter_string         = iv_filter_string
              iv_search_string         = iv_search_string
              io_tech_request_context  = io_tech_request_context
            IMPORTING
              er_entityset             = er_entityset
              es_response_context      = es_response_context.
          .
        ELSEIF iv_entity_name = 'CustomizingFunction'.
          CALL METHOD me->customfunction_get_entityset
            EXPORTING
              iv_entity_name           = iv_entity_name
              iv_entity_set_name       = iv_entity_set_name
              iv_source_name           = iv_source_name
              it_filter_select_options = it_filter_select_options
              it_order                 = it_order
              is_paging                = is_paging
              it_navigation_path       = it_navigation_path
              it_key_tab               = it_key_tab
              iv_filter_string         = iv_filter_string
              iv_search_string         = iv_search_string
              io_tech_request_context  = io_tech_request_context
            IMPORTING
              er_entityset             = er_entityset
              es_response_context      = es_response_context.
          .
        ELSE.
          CALL METHOD super->/iwbep/if_mgw_appl_srv_runtime~get_entityset
            EXPORTING
              iv_entity_name           = iv_entity_name
              iv_entity_set_name       = iv_entity_set_name
              iv_source_name           = iv_source_name
              it_filter_select_options = it_filter_select_options
              it_order                 = it_order
              is_paging                = is_paging
              it_navigation_path       = it_navigation_path
              it_key_tab               = it_key_tab
              iv_filter_string         = iv_filter_string
              iv_search_string         = iv_search_string
              io_tech_request_context  = io_tech_request_context
            IMPORTING
              er_entityset             = er_entityset
              es_response_context      = es_response_context.
        ENDIF.
      CATCH /iwbep/cx_mgw_busi_exception .
      CATCH /iwbep/cx_mgw_tech_exception .
    ENDTRY.
  ENDMETHOD.
```
#### CUSTOMDEPARTMENT_GET_ENTITYSET

```ABAP
  method CUSTOMDEPARTMENT_GET_ENTITYSET.

    DATA lt_tb911 TYPE TABLE OF tb911.

    SELECT * from TB911 INTO TABLE lt_tb911
      WHERE spras = sy-langu.


* Fill ER_ENTITYSET
  copy_data_to_ref(
    EXPORTING
         is_data = lt_tb911
    CHANGING
         cr_data = er_entityset ).

  endmethod.
```
