import React, {Component} from 'react';
import MarketItem from './MarketItem';
import DeleteItem from './DeleteItem';
import ClearAll from './ClearAll';

class Market extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  };

render() {
  return(
    <div>
      <MarketItem count={this.state.count}/>
      <button onClick={() => this.setState({count: this.state.count +1})}>Add Item</button>
      <br></br>
      <DeleteItem count={this.state.count}/>
      <button onClick = {()=> this.setState({count: this.state.count -1})}>Delete Item</button>
      <ClearAll count={this.state.count}/>
      <button onClick = {()=> this.setState({count: this.setState.count =0})}>Clear All</button>
    </div>
  );
}
}

export default Market;