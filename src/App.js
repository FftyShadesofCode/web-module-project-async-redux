import React from "react";
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './store';
import { useEffect } from 'react';


const App = (props) => {


  useEffect(() => {
    props.fetchData()
  },[])

  console.log(props.all)

  return (
    <div className="App">
      <div className='people'>
      {props.all.map(person => (
        <div key={person.char_id} className='person'>
          <h3>{person.name}</h3>
          <p>{person.occupation}</p>
          <img src={person.img} alt={person.name}/>
        </div>
      ))}
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    all:state.all,
  }
}
export default connect(mapStateToProps,{fetchData})(App);
 