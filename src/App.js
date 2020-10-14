import React, { Component } from "react";
import Button from './components/Button.js';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      buttons:[{id:0,count:0,disabled:true},{id:1,count:0,disabled:true},{id:2,count:0,disabled:true},{id:3,count:0,disabled:true}],
      count_item:0,  
    }

  }


    incrementCount =(id)=>{
      const update = this.state.buttons.map(item=>{
        if(item.id===id){
          item.count++
          item.disabled=false
          if(item.count===1)this.setState(prevState =>({ count_item: prevState.count_item + 1}))
        }
        return item 
      })
      this.setState({buttons:update})
     // this.setState(prevState =>({ count_button: prevState.count_button + 1 ,disabled:false})  )
  }

  decrementCount =(id)=>{
    const update =this.state.buttons.map(item=>{
     if(item.id===id){
          item.count--
          if(item.count<=0){
            item.disabled=true
            this.setState(prevState =>({ count_item: prevState.count_item - 1}))
        }
     } 
   return item
  })
  this.setState({buttons:update})
}



  render() {
    

    const element = (
     
      <div className="App" >
        <div className="header">
          <div className="count_items">{this.state.count_item}</div>
        </div>
          {this.state.buttons.map(item=>
             <div class="buttons" >
             <div className="count_button">{item.count}</div>
             <Button title={"-"} action={()=>this.decrementCount(item.id)} disabled={item.disabled}/>
             <Button title={"+"} action={()=>this.incrementCount(item.id)}  />
           </div> )}
          </div>

    );
    return element;
  }
}

export default App;
