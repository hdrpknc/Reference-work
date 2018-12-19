
### General

There are many benefits to using views: -> use google


### CDS – One Concept, Two Flavors
Da **ABAP Dictionary Views**(SE11) nur auf der Applikationsebene beschränkt sind gibt es die **HANA CDS Views**. 
Den **HANA CDS Views** ermöglichen die Definierung von Datenmodellen auf der Ebene der Datenbank, wo sich auch direkt die XS Engine befindet. Als „Programmiersprache“ wird das mächtigere *native SQL* zur Definierung dieser Views verwendet.
Die **ABAP CDS Views** sind unabhängig von einer SAP HANA DB. In der ABAP Dictionary(SE11) können *ABAP CDS Views* aktiviert werden, welche wie jede andere View im Quellcode mittels einer TYPE-Anweisung verwendet werden kann. Hier wird übrigens *OpenSQL* anstatt *natives SQL* verwendet

* HANA CDS Views -> Bindung an einer einzigen Datenbanktechnologie -> Features des Code Pushdowns. 
* ABAP CDS Views -> Freiheit in den Datenbanken -> nicht zu jedem Zeitpunkt alle Features verfügbar -> Features des Code Pushdowns. 

### CDS Examples

```SQL
where tj02t.spras = $session.system_language
```
