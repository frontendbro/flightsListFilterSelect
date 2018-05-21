import React, { Component } from "react";
import "./App.css";

import Select from "./components/Select/Select";
import Card from "./components/Card/Card";

class App extends Component {

	state = {
		selectType: "all"
	};


	// selectChange = (e) => {
	// 	this.setState ({selectType: e.target.value});
	// };

	selectChange = (e) => {
		this.setState (() => {selectType: e.target.value});
	};

	render() {
		const cardListData = this.props.data.flights;
		
		const filterData = cardListData.filter((item) => {
			let company = item.carrier;
			if (this.state.selectType === "all"){
				return true;
			}
			return company.indexOf(this.state.selectType) !== -1;
		});

		return (
			<div className="app">
				<header className="header">
					<h1 className="title">Flights</h1>
				</header>
				<main className="main">
					<Select selectType={this.selectChange}/>
					<div className="card-list">
						{filterData.map((item, i) =>
							<Card 
								key={item.id} 
								name={item.carrier} 
								from={item.direction.from} 
								when={item.direction.when} 
								to={item.direction.to}
								departure={item.departure}
								arrival={item.arrival}
							/>
						)}
				</div>
				</main>
			</div>
		);
	}
}


export default App;
