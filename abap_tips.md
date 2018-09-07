
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



### find and get notes
1. first find the error badi-, class- or app- name
2. go to https://support.sap.com/en/my-support/knowledge-base.html
3. copy note number and download sap note with ta 'snote'
