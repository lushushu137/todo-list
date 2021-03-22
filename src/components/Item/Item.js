import React, { Component } from 'react';
import './Item.css'

export default class Item extends Component {
    
    render() {
    return (
      <div 
      className={this.props.checked?'doneItem':'defaultItem'}
     >
          <div className="checkBox" onClick={this.props.checkClick}></div>
          <p>{this.props.content}</p>      
          <div className='delete' onClick={this.props.deleteItem}>删除</div>
      </div>
    );
  }
}
