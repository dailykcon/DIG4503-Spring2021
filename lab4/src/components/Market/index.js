  
import React from 'react';
import MarketItem from "../MarketItem";

class Market extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}
    render() {
        return (
          <div>
            <button
              onClick={() => {const items = this.state.items;items.push(<MarketItem count={items.length} />);this.setState({ items: items });}}>
              Click here to add an item!
            </button>
                
            {this.state.items.map((count, key) => {
                return <div key={key}>{count}</div>;
                })}
          </div>
        );
      }
    }
    
    export default Market;


/*   
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
*/    

