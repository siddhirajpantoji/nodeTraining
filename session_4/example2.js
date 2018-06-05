// npm config set registry http://registry.npmjs.org/
//AND/ OR 
// npm config set http-proxy hybrid-web.cluster-a.blackspider.com:8081
/**
 * Fire above command if you are getting firewall issues for installing npm packages  
 */

var express = require('express');
var app = express();
app.use('/', express.static(__dirname)); // Creates a static Server 
app.listen(3000); //the port you want to usenode