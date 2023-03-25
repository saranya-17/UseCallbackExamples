import './App.css';
import Parent from './CallbackComponents/Parent';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}

export default React.memo(App);
