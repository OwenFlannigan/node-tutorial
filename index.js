var express = require('express');
var app = express();

app.use(express.static('public'));

var users = {
    owen: {
        password: 'password'
    },
    jessica: {
        password: 'password'
    }
};

app.get('/login', function (req, res) {
    var username = req.query.username;
    var password = req.query.password;

    var user = users[username];
    if (user) {
        if (user.password == password) {
            res.send('Logged in as ' + username);
        } else {
            res.send('Incorrect password for ' + username);
        }
    } else {
        res.send('User does not exist');
    }

});

app.listen(3000, function () {
    console.log('Node app listening on port 3000!');
});