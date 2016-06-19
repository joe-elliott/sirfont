var SketchPicker = require('react-color').SketchPicker;

var MasterPane = react.createClass({
    displayName: 'masterPane',
    render: function() {
        return react.createElement(
            'div',
            null,
            react.createElement(SketchPicker)
        );
    }
});

module.exports = MasterPane;