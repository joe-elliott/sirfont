import React from 'react';
import render from 'react-dom';
import AppWindow from '../components/AppWindow.js';
import defines from '../app/defines.js'
import configStore from '../store/configStore.js'

render.render(
    <AppWindow/>,
    document.getElementById('root')
);

document.onmousemove = (event) => {
    //hides/shows the options menu
    configStore.dispatcher.dispatch({
        actionType: configStore.actionTypes.showOptions,
        newValue: event.pageX < defines.LEFT_MARGIN_TO_SHOW_OPTIONS 
    });
};