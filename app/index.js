import React from 'react';
import render from 'react-dom';
import AppWindow from '../components/AppWindow.js';
import defines from '../app/defines.js'

render.render(
    <AppWindow/>,
    document.getElementById('root')
);

document.onmousemove = (event) => {

if(event.pageX < defines.LEFT_MARGIN_TO_SHOW_OPTIONS) {
        console.log('coords: ' + event.pageX + ',' + event.pageY);
    }    
};