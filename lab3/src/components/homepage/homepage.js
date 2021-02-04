import React from 'react';

class Homepage extends React.Component{
  render(fname){
    return <h1>Hello, {this.props.firstName}</h1>;
  }
}
export default Homepage;