import React from 'react';const Button = (props) => {
    return (
        <button type="button" class="btn btn-outline-primary">Primary</button> onClick={()=>{props.handleClick()}}>Search</button>
    )
  };export default Button;
  
  