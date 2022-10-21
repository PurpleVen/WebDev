import React from 'react';

function Form() {
    function handleClick(e) {
      e.preventDefault();
      console.log('Clicked');
      alert('Clicked! The event handler works');
    }
  
    return (
      <form onSubmit={handleClick}>
        <h2>The onSubmit event is used</h2>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default Form;