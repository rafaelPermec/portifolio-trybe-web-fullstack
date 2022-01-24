import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const textJSX = 'Hello, JSX! Je suis Rafael Perdigão.';
const classe = 'header__catchphrase';
const elementDiv = <h1 className={classe}>{textJSX}</h1>;

const elementToStage = React.createElement(elementDiv);ReactDOM.render(elementToStage, document.getElementById('root'));