import React, {Component} from "react";
import {connect} from "react-redux";
import "./App.css";

import Select from "./components/Select/Select";
import Card from "./components/Card/Card";
import {getCurrentType, getData} from "./reducers/select";
import {setType} from "./actions/select";

class App extends Component {
    filterFunc = flights => {
        return flights.filter((item) => {
            if (this.props.selectType === "all") return true;

            return item.carrier.indexOf(this.props.selectType) !== -1;
        });
    };

    render() {
        const cardListData = this.props.data.flights;
        const filterData = this.filterFunc(cardListData);

        return (
            <div className="app">
                <header className="header">
                    <h1 className="title">Flights</h1>
                </header>

                <main className="main">
                    <Select/>

                    <div className="card-list">
                        {filterData.map(item =>
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

const mapStateToProps = state => ({
    selectType: getCurrentType(state),
    data: getData(state)
});

const mapDispatchToProps = {
    setType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);