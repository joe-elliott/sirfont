export default {
    LEFT_MARGIN_TO_SHOW_OPTIONS : 500,
    DEFAULT_FOREGROUND_COLOR : '#000000',
    DEFAULT_BACKGROUND_COLOR : '#ffffff',
    DEFAULT_FONT_SIZE : 14,
    DEFAULT_FONT_NAME : null,
    DEFAULT_SHOW_OPTIONS : false,
    OPTIONS_ICON_LETTER : 'a',

    utils : {
        colorLuminance: colorLuminance,
        hexToRgb: hexToRgb
    }
}

function colorLuminance(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function hexToRgb(hex) {
 var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}