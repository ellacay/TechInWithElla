
import React from 'react';

const ContactMe = (()=>{
    return(
        <div>
       

        <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>


        <label>
        Last Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
     


      <label>
      Email:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />

      </form>
        </div>
    )})

    export default ContactMe