import React from "react";

class TwitterMessage extends React.Component {
  state={message:""}

  handleChange = event =>{
    this.setState({message:event.target.value})
    
  }


  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>remainingChars: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
