// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Connect from './Connect';
import './styles/window.scss';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// Now we can render our application into it
render(<Connect />, document.getElementById('root'));
