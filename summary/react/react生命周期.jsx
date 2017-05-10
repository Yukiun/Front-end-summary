import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class test extends Component {
    // propsTypes和defaultProps被声明为静态属性,可以从类的外面访问,如:test.propsTypes ||test.defaultProps
    static propTypes = {
        textProps: React.PropTypes.string,
        testBool: React.PropTypes.bool,
        onChange: React.PropTypes.func,
    }
    static defaultProps = {
        // 这是默人props
    }
    constructor(props) {
        super(props);
        this.state = {
            textProps: '测试',
        };
    }
    // react生命周期组件在挂载和卸载时,组件更新时
    // 1, 数据的挂载
    componentWillMount() {
        // 会在render方法之前执行
        // 执行setState,会更新state,但是组件只渲染一次,这是无意义的执行,初始化state都可以放在this.state()
    }
    componentDidMount() {
        // 会在render方法之后执行
        // 执行setState,会更新state,在初始化过程中就渲染了两次
    }
    // 2,组件的卸载
    componentWillUnMount() {
        // 卸载组件,这里常常会执行一些清理方法,如,事件回收或是清除定时器
    }

    // 数据更新过程, 父组件向下传递props或者组件自身执行setState方法时发生的一系列更新

    // 如果组件是因为父组件更新props而更新的,会首先执行componentWillReceiveProps(nextProps)
    componentWillReceiveProps(nextProps) {
        // this.setProps({});
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex,
            });
        }
    }
    // 需要接受更新的props和state,让开发者增加必要的条件判断,让其在需要更新时更新,不需要更新时不更新,当返回false,组件不在向下执行生命周期方法
    shouldComponentUpdate(nextProps, nextState) {
        // return true
    }
    componentWillUpdate(nextProps, nextState) {
        // ..不能执行setState
    }
    componentDidUpdate(preProps, prevState) {
        // ..
    }

    
    // 如果组件自身的state更新了,会依次执行shouldComponentUpdate.componentWillUpdate,render和componentDisUpdate
    render() {
        return (
            <div className="test">
                这是测试组件
            </div>
        );
    }
}

export default test;