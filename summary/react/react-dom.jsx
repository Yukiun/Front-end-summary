import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 // ReactDom的api findDOMNode.unmountComponentAtNode和render

 class App extends Comment {
     componentDidMount() {
        //  this为当前组件的实例
        // DOM真正被添加到HTML中的生命周期方法是componentDidMount和componentDidUpdate方法,
        // react
         const dom = ReactDOM.findDOMNode(this);
     }
     render() {

     }
 }
