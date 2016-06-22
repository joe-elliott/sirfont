import { SketchPicker } from 'react-color';
import configStore from '../store/configStore';
import React from 'react';
import fonts from '../app/fonts.js';

var FontListItem = React.createClass({
    handleClick: function() {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.fontName,
            newValue: this.props.name
        });
    },
    render: function() {
        return <li onClick={this.handleClick}>{this.props.name}</li>;
    }
});

export default React.createClass({
    displayName: 'masterPane',
    getInitialState: function() {
        return { fontSize: configStore.defaultValues.fontSize }
    },
    onBackgroundColorChange: function(color) {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.backgroundColor,
            newValue: color.hex 
        });
    },
    onForegroundColorChange: function(color) {
        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.foregroundColor,
            newValue: color.hex 
        });
    },
    onFontSizeChange: function(event) {
        var fontSize = event.target.value;

        this.setState({fontSize : fontSize});

        configStore.dispatcher.dispatch({
            actionType: configStore.actionTypes.fontSize,
            newValue: fontSize
        });
    },
    render: function() {
        return <div className='master-pane'>
                    <SketchPicker onChange={this.onBackgroundColorChange} color={configStore.defaultValues.backgroundColor} /> 
                    <SketchPicker onChange={this.onForegroundColorChange} color={configStore.defaultValues.foregroundColor} />
                    <input type='range' min={4} max={1000} onChange={this.onFontSizeChange} value={this.state.fontSize} />
                    <ul>
                        {
                            fonts.map(function(font, idx) { return <FontListItem key={idx} name={font.name}/> })
                        }
                    </ul>
               </div>;
    }
});