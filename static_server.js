var express = require('express');
var app = express();

app.use(express.static('WebContent'));
app.use(express.static('./'));


var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
 target: "http://101.255.30.134:8034"
});
var resourceProxy = httpProxy.createProxyServer({
 target: "https://sapui5.hana.ondemand.com/1.52.8/resources/sap-ui-core.js"
});

app.route('/sap/*$').all(function(req, res) {
 proxy.web(req, res);
});

app.route('/resources/*$').all(function(req, res) {
 resourceProxy.web(req, res);
});

var server = app.listen('8080', function() {

console.log("Listening on localhost:8080");

});
