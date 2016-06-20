var os = require('os');
var fs = require('fs');
var path = require('path');

//create font dir if it doesn't exist
var appdir = os.homedir() + '/.sirFont';
var fontdir = appdir + '/fonts';

if(!fs.existsSync(appdir)) fs.mkdirSync(appdir);
if(!fs.existsSync(fontdir)) fs.mkdirSync(fontdir);

var fileNames = fs.readdirSync(fontdir);

var fonts = fileNames.map(function(fileName) {
    return {
        name: path.parse(fileName).name,
        path: fontdir + '/' + fileName
    }
});

module.exports = fonts;