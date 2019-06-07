import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div><span><p>a: <span>{this.props.a}</span></p><button onClick={()=>this.props.UpdateA(this.props.b)}>UpdateA</button></span><span><p>b: <span>{this.props.b}</span></p><button onClick={()=>this.props.UpdateB(this.props.a)}>UpdateB</button></span></div>
      </div>
    );
  }
 
}
const mapStateToProps = (state)=>{
  return{
    a: state.rA.a,
    b: state.rB.b
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    UpdateA : (b)=>{dispatch({type:'UPDATE_A',b : b})},
    UpdateB : (a)=>{dispatch({type:'UPDATE_B',a : a})},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
