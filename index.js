var restify = require('restify');
var Curl = require('node-libcurl').Curl;

function respond(req, res, next) {
  var query = curlRequest(req.username, req.url, function(status, body, headers){
    res.send(body);
    res.end();
    next();
  });
}

function curlRequest(token, query, callback) {
  var curl = new Curl();
  var endpoint = "https://bibles.org/" + query;
  var escapedEndpoint = endpoint.replace(/\[]/g, "\[\]") // prevent globbing error
  console.log(token);
  console.log(escapedEndpoint);
  curl.setOpt('URL', escapedEndpoint);
  curl.setOpt('SSL_VERIFYPEER', false);
  curl.setOpt('FOLLOWLOCATION', true);
  curl.setOpt('HTTPAUTH', 'CURLAUTH_BASIC');
  curl.setOpt('USERPWD', token);
  curl.on('end', function( status, body, headers ) {
    callback(status, body, headers);
    this.close();
  });
  curl.on( 'error', curl.close.bind( curl ) );
  curl.perform();
}

var server = restify.createServer();
server.use(restify.authorizationParser());

restify.CORS.ALLOW_HEADERS.push('authorization');

server.use(restify.CORS({
  origins: ['*'],
  credentials: false, // defaults to false
  headers: ['']  // sets expose-headers
}));

server.get('.*', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
