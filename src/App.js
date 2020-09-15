import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { saveValueAction } from './actions';
import Component from './components/showValue';

function App({ saveValue, value, warningStatus }) {
  debugger
  return (
    <section>
      <div>
        <input type="text" onChange={({ target }) => saveValue(target.value)} />
        <ul>
          {value.split('').map((item, index) => <Component key={index} value={item} />)}
        </ul>
      </div>
      {
        warningStatus ? <span style={{color: 'red'}}>Warning: you delete a char!!!</span> : null
      }
    </section>


  );
}
function mapStateToProps(state) {
  return {
    value: state.value,
    warningStatus: state.warningStatus,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveValue: (value) => dispatch(saveValueAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
