import { SketchPicker } from 'react-color';
import configStore from '../store/configStore';
import React from 'react';
import fonts from '../app/fonts.js';
import defines from '../app/defines.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        return {
                 fontSize: defines.DEFAULT_FONT_SIZE,
                 showOptions: defines.DEFAULT_SHOW_OPTIONS,
                 fontName: defines.DEFAULT_FONT_NAME,
                 backgroundColor: defines.DEFAULT_BACKGROUND_COLOR
               }
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
    
    componentDidMount: function() {
        this.onChangeToken = configStore.store.addListener(this._onChange);
    },

    componentWillUnmount: function() {
        configStore.store.remove(this.onChangeToken);
    },

    _onChange: function() {
        this.setState({
            showOptions: configStore.store.showOptions,
            fontName: configStore.store.fontName,
            fontSize: configStore.store.fontSize,
            backgroundColor: configStore.store.backgroundColor  
        });
    },

    render: function() {
        
        var rgb = defines.utils.hexToRgb(this.state.backgroundColor);
        var luminance = defines.utils.colorLuminance(rgb.r, rgb.g, rgb.b);
        var iconBackgroundColor = luminance >  .5 ? '#000000' : '#FFFFFF';

        var backgroundIconStyle = {
            fontFamily: this.state.fontName,
            backgroundColor: iconBackgroundColor,
            color: this.state.backgroundColor
        };

        var foregroundIconStyle = {
            fontFamily: this.state.fontName,
            backgroundColor: this.state.backgroundColor,
            color: iconBackgroundColor
        };

        var masterPaneDiv = null;
        if(this.state.showOptions) {
            masterPaneDiv = <div key='animationKey' className='master-pane'>
                                <div className='options-icon-container'>
                                    <div className='options-icon' style={backgroundIconStyle}>{defines.OPTIONS_ICON_LETTER}</div>
                                </div>
                                <div className='options-icon-container'>
                                    <div className='options-icon' style={foregroundIconStyle}>{defines.OPTIONS_ICON_LETTER}</div>
                                </div>

                                <SketchPicker onChange={this.onBackgroundColorChange} color={defines.DEFAULT_BACKGROUND_COLOR} /> 
                                <SketchPicker onChange={this.onForegroundColorChange} color={defines.DEFAULT_FOREGROUND_COLOR} />
                                <input type='range' min={4} max={1000} onChange={this.onFontSizeChange} value={this.state.fontSize} />
                                <ul>
                                    {
                                        fonts.map(function(font, idx) { return <FontListItem key={idx} name={font.name}/> })
                                    }
                                </ul>
                            </div>;
        }

        return  <ReactCSSTransitionGroup transitionName="show-hide-options" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    {masterPaneDiv}
               </ReactCSSTransitionGroup>;
    }
});