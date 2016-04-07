var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); 
    var email = req.body.email;

var post = new models.Message({
"email": email,
"content": content,
"created": Date.now()
});
};