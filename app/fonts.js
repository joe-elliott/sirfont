var os = require('os');
var fs = require('fs');
var path = require('path');

//create font dir if it doesn't exist
var appdir = path.join(os.homedir(), '.sirFont');
var fontdir = path.join(appdir, 'fonts');

if(!fs.existsSync(appdir)) fs.mkdirSync(appdir);
if(!fs.existsSync(fontdir)) fs.mkdirSync(fontdir);

var fileNames = fs.readdirSync(fontdir);
var fontFaceCSS = ''; 

var fonts = fileNames.map(function(fileName) {
    var fontName = path.parse(fileName).name;
    var fontPath = path.join(fontdir, fileName);
    var escapedFontPath = fontPath.split("\\").join("\\\\");

    //append font face info
    fontFaceCSS += '@font-face { font-family: ' + fontName +'; src: url("' + escapedFontPath + '") }';

    return {
        name: fontName,
        path: fontPath
    }
});

//inject into document stylesheet
var styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = fontFaceCSS;
document.getElementsByTagName('head')[0].appendChild(styleElement);

module.exports = fonts;