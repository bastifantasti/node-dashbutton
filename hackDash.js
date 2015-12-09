// Button INIT
var ping = require("net-ping");
var button1 = "192.168.178.90";
var button2 = "192.168.178.97";
var dashbuttons = [button1, button2];

// YOU CAN USE THE IFTTT.com Maker Channel to control your HUE:
var request = require("request");
var yourIFTTTmakerKEY = "";
var buttonEvent1 = "dashbutton1";

// PING OPTIONS
var options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 12,
    retries: 1,
    sessionId: (process.pid % 65535),
    timeout: 1000,
    ttl: 128
};


var session = ping.createSession(options);

var checkButton1 = function(){
    session.pingHost (button1, function (error, target) {
        if (!error) {
            request("https://maker.ifttt.com/trigger/"+buttonEvent1+"/with/key/"+yourIFTTTmakerKEY, function(error, response, body) {
                console.log(body);
            });
            setTimeout(function () {
                console.log (target + ": [button1] Alive");
            }, 10000);
        } else {

        }
        session.close();
        checkButton2();
    });

};
var checkButton2 = function(){
    session.pingHost (button2, function (error, target) {
        if (!error) {

            setTimeout(function () {
                console.log (target + ": [button2] Alive");
            }, 10000);
        }else
        {

        }
        session.close();

    });
};
checkButton1();