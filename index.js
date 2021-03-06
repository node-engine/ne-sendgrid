'use strict';

var sendgrid = require('sendgrid')(process.env.SENDGRID_APIKEY);
// var axios = require('axios');

var neSendgrid = {

    sendText: function (email, res) {

        var self = this;

        sendgrid.send({
            to: email.to,
            from: email.from,
            subject: email.subject,
            text: email.body
        }, function (err, status) {
            if (err) {
                var error = err;
                console.log(error);
                var status = {};
                status.message = error;
                status.date = new Date();
                email.status = status;
                var redirectPath = "/contact" + "?message=Message failed to send";
                console.log('neSendgrid: Error sending email');
                return res.redirect(redirectPath);
            } else {
                console.log(status);
                status.date = new Date();
                email.status = status;
                var redirectPath = "/contact" + "?message=Message sent";
                console.log('neSendgrid: Email saved');
                return res.redirect(redirectPath);
            }
        });
    },

    sendHTML: function (email, res) {

        var self = this;
        console.log('neSendgrid: Sending email');

        sendgrid.send({
            to: email.to,
            from: email.from,
            subject: email.subject,
            html: email.body
        }, function (err, status) {
            if (err) {
                var error = err;
                console.log(error);
                var status = {};
                status.message = error;
                status.date = new Date();
                email.status = status;
                var redirectPath = "/contact" + "?message=Message failed to send";
                console.log('neSendgrid: Error sending email');
                return res.redirect(redirectPath);
            } else {
                console.log(status);
                status.date = new Date();
                email.status = status;
                var redirectPath = "/contact" + "?message=Message sent";
                console.log('neSendgrid: Email saved');
                return res.redirect(redirectPath);
            }
        });
    }

    /*
    saveEmail: function (email, res) {
        console.log('neSendgrid: Saving email');
        var dataPath = process.env.ROOTURL + '/data/nesendgrid'; // + "?token=" + req.cookies.token;
        var postObject = email;

        axios.post(dataPath, postObject).then(function (response) {
            var redirectPath = "/contact" + "?message=Message sent";
            console.log('neSendgrid: Email saved');
            return res.redirect(redirectPath);
        })['catch'](function (response) {
            var redirectPath = "/contact" + "?message=Message failed to send";
            console.log('neSendgrid: Error saving email');
            return res.redirect(redirectPath);
        });
    }
    */
};

module.exports = neSendgrid;