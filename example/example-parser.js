var MbusMaster = require('../index.js');

var mbusMaster = new MbusMaster(mbusOptions);

var rawFrame = "68A1A16808007266432863C51400040927000004788EA4C503046D2933FC2604157D6F0000441550670000840115796F00000406697F0000440625770000840106697F000084100600000000C410060000000084110600000000426CDF2C026CFF2C8420060000000084300600000000043B00000000143BAC210000042B00000000142B3CA50000025B1800025F19000461FCFFFFFF0223D00901FD17000490280B0000009816";

mbusMaster.decodeFrame(rawFrame, function(err, data) {
    if (!err && data) {
        console.log('Meter: ' + data.SlaveInformation.Manufacturer + "_" + data.SlaveInformation.Id);
        console.log('data: ' + JSON.stringify(data));
    }
else if (err)
        console.log('error: ' + err);
});
