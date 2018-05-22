import React from "react";
import {connect} from "react-redux";
import "./style.css";
import {setType} from "../../actions/select";

function Select({setType}){
	return (
		<div className="select-wrap">
			<span className="label">Выбор авиакомпании:</span>

			<select className="select" onChange={event => setType(event.target.value)}>
				<option value="all">Все авиакомпании</option>
				<option value="Aeroflot">Aeroflot</option>
				<option value="S7">S7</option>
				<option value="KLM">KLM</option>
			</select>
		</div>
	)
}

const mapDispatchToProps = {
    setType
};

export default connect(null, mapDispatchToProps)(Select);