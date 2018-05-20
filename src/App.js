import React, { Component } from 'react';
import './App.css';

import data from './data';
import Select from './components/Select';
import Card from './components/Card/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data,
      selectType: 'all'
    }
  }

  selectChange = (e) => {
		this.setState ({
			selectType: e.target.value
		});	
	};

  render() {

    const cardListData = this.state.data.flights;
    
    const filterData = cardListData.filter((item) => {
			let company = item.carrier;
			if (this.state.selectType === 'all'){
				return true;
			}
			return company.indexOf(this.state.selectType) !== -1;
		});

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flights</h1>
        </header>

        <Select selectType={this.selectChange}/>

        <ul className="card-list">
            {filterData.map((item, i) =>
              <Card 
                key={i} name={item.carrier} 
                from={item.direction.from} 
                when={item.direction.when} 
                to={item.direction.to}
                departure={item.departure}
                arrival={item.arrival}
              />
              

            )}
        </ul>
      </div>
    );
  }
}


export default App;
