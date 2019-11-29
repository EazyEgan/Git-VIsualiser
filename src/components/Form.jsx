import React from 'react';const Form = (props) => {
  return (
  
  <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
	  
        <input class="searchBar" name="username" type="text" placeholder="Enter a GitHub Username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />

      </label>
     
      <input
        type="submit"
        value="🔍"
      />
    
    </form>
)};export default Form;
	
	