var path = require('path');
var request = require('request');

var TOKEN = '506354993:AAFJQBwRiwvhmnMFiGM57ArA5Mnfa06kdAE';

var baseRequest = request.defaults({
    baseUrl: 'https://api.telegram.org/bot506354993:AAFJQBwRiwvhmnMFiGM57ArA5Mnfa06kdAE/'
});

var noop = function (err) {
    if(err) { console.log(err); }
};
var callMethod = function (methodName, params, cb) {
    cb = cb || noop;
    var req = {uri: methodName, method: 'POST'};
    if (Object.keys(params).length) {
        req.formData = params;
    }
    baseRequest(req, function (err, response, body) {
        // console.log(err, body);
        if (err) {
            return cb(err);
        }
        cb(err, JSON.parse(body));
    });
};