import React, { Component } from 'react';
import Item from "../Item/Item";
import './inputBox.css';

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state={
            itemList: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount () {
        this.refs.myInput.focus()
      }
    
    deleteItem=(key,e)=>{
        let itemList = this.state.itemList
        delete itemList[key]
        this.setState({
            itemList:itemList
        })
        e.stopPropagation();
        
    }
    checkClick=(key,e)=>{
        let itemList = this.state.itemList
        let checkedItem = itemList[key]
        delete itemList[key]
        if (checkedItem.isChecked){
            checkedItem.isChecked = false
            this.setState({
                itemList:[checkedItem].concat(itemList)
            })
        }else{
            checkedItem.isChecked = true
            this.setState({
                itemList:itemList.concat(checkedItem)
            })
        }
        e.stopPropagation();
    }
        

    onSubmit=()=>{
        this.state.itemList.push({
            text:this.refs.myInput.value, 
            isChecked:false,
            timeStamp:new Date()
        })
        this.setState({
            itemList:this.state.itemList
        });
        this.refs.myInput.value = ""
        this.refs.myInput.focus()
    }

    handleKeyDown(event){
        if (event.keyCode === 13) {
            this.onSubmit()
        }
    }


    render() {
        let todoList = this.state.itemList.map((item,key)=>
        <div key={key}>
            <Item content={item.text} 
            deleteItem={this.deleteItem.bind(this, key)}
            checkClick={this.checkClick.bind(this,key)}
            checked={this.state.itemList[key].isChecked}
            />
        </div>,
    );

    return (
        <div>
            <input type="text" ref="myInput" placeholder="今天要做点什么呢" onKeyDown={this.handleKeyDown}/>
            <button onClick={this.onSubmit} >添加</button>
            {todoList}
        </div>
    );
  }
}
