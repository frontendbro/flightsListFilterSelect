import React, { Component } from "react";
import "./App.css";

import Select from "./components/Select/Select";
import Card from "./components/Card/Card";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectType: "all"
		}
		this.store = this.props.store;
	}


	selectChange = (e) => {
		const val = e.target.value;
		this.setState (() => {
			return {
				selectType: val
			}
		});
	};

	filterFunc = flights => {
		return flights.filter(item => {
			if (this.state.selectType === "all") return true;

			return item.carrier.indexOf(this.state.selectType) !== -1;
		})
	}

	render() {
		const cardListData = this.store.getState();
		const filterData = this.filterFunc(cardListData);

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
