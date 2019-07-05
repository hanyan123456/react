import PropTypes from 'prop-types';
import React, { Component } from 'react';
import store from '../store'
class Home extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            // 获取store的数据
            inputValue:store.getState().inputValue,
            list:store.getState().list
        };
    }
    // 监听input里面的值，并触发dispatch将数据传入reducer中
    getInputValue=(e)=>{
    const action={
        type:'CHANGE_INPUT_VALUE',
        value:e.target.value
    }
    store.dispatch(action)
    }
    // 将input里面的值，并触发dispatch将数据传入reducer中
    addInputValue=()=>{
       const action={
           type:'ADD_LIST',
           value:this.state.inputValue
       }
       store.dispatch(action)
    }
    // 删除数据
    deleteList=(index)=>{
        const  action={
            type:'DELETE_LIST_ITEM',
           index
        }
       store.dispatch(action)
    }
    componentDidMount(){
        //接受更改后数据
      store.subscribe(this.handleStoreChange)
    }
    handleStoreChange=()=>{
        // 更新更改后数据
       this.setState(store.getState())
    }
    render() {
        const {list,inputValue}=this.state

        return (
            <div>
             <input placeholder="请输入"  onChange={this.getInputValue} value={inputValue}/>
                <button onClick={this.addInputValue}>添加</button>

                <ul>
                    {list.map((item,index)=><li key={index}>{item} <button onClick={()=>{this.deleteList(index)}}>x</button></li>)}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;