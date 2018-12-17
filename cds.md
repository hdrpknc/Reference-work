
### Allgemein

There are many benefits to using views:

* Enforce Business Rules – Use views to define business rules, such as when an items is active, or what is meant by “popular.”  By placing complicated or misunderstood business logic into the view, you can be sure to present a unified portrayal of the data.  This increases use and quality.
* Consistency – Simplify complicated query logic and calculations by hiding it behind the view’s definition.  Once defined they calculations are reference from the view rather than being restated in separate queries.  This makes for less mistakes and easier maintenance of code.
* Security – Restrict access to a table, yet allow users to access non-confidential data via views.  For example, you can restrict access to the employee table, that contains social security numbers, but allow access to a view containing name and phone number.
* Simplicity – Databases with many tables possess complex relationships, which can be difficult to navigate if you aren’t comfortable using Joins.  Use views to provide a “flattened” view of the database for reporting or ad-hoc queries.
* Space – Views take up very little space, as the data is stored once in the source table.  Some DBMS all you to create an index on a view, so in some cases views do take up more space than the definition.
 

Disadvantages of Views

* Performance – What may seem like a simple query against a view could turn out to be a hugely complex job for the database engine.  That is because each time a view is referenced, the query used to define it, is rerun.
* Modifications – Not all views support INSERT, UPDATE, or DELETE operations.  In general, in order to support these operations, the primary key and required fields must be present in the view.  Complex multi-table views are generally read only.


### CDS – One Concept, Two Flavors
Da **ABAP Dictionary Views**(SE11) nur auf der Applikationsebene beschränkt sind gibt es die **HANA CDS Views**. 
Den **HANA CDS Views** ermöglichen die Definierung von Datenmodellen auf der Ebene der Datenbank, wo sich auch direkt die XS Engine befindet. Als „Programmiersprache“ wird das mächtigere *native SQL* zur Definierung dieser Views verwendet.
Die **ABAP CDS Views** sind unabhängig von einer SAP HANA DB. In der ABAP Dictionary(SE11) können *ABAP CDS Views* aktiviert werden, welche wie jede andere View im Quellcode mittels einer TYPE-Anweisung verwendet werden kann. Hier wird übrigens *OpenSQL* anstatt *natives SQL* verwendet

## HANA CDS Views -> Bindung an einer einzigen Datenbanktechnologie -> Features des Code Pushdowns. 
## ABAP CDS Views -> Freiheit in den Datenbanken -> nicht zu jedem Zeitpunkt alle Features verfügbar -> Features des Code Pushdowns. 
