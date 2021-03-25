### jQuery Ajax

```Javascript
doCall: function(httpMethod, url, request, token) {
			var response = {};
			$.ajax({
				type: httpMethod,
				async: false,
				url: url,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(request),
				headers: {
					"Authorization": "Basic " + btoa("xtok:" + token),
					"Content-Type": "application/json"
				},
				success: function(data, status, xhr) {
					response.data = data;
					response.status = status;
					response.xhr = xhr;
				},
				error: function(xhr, status, error) {
					response.xhr = xhr;
					response.status = status;
					response.error = error;
				}
			});
			return response;
		}

```
> important: direct data consumption like _read_ is not possible anymore with v4
### oModel.read
```javascript
var oFilter = new sap.ui.model.Filter("Tournummer", sap.ui.model.FilterOperator.EQ, sRoute);
var aFilters = [];
aFilters.push(oFilter);


var mParameters = {};
mParameters.urlParameters = {
	"$expand": "StoppSet"
};
mParameters.filters = aFilters;
mParameters.success = function(oData, oResponse) {
	console.log(oData);
};
mParameters.error = function(oError) {
	console.log(oError);
};

var oModel = new sap.ui.model.odata.ODataModel(this.getServiceURL());
oModel.read("/TourSet", mParameters);

```
