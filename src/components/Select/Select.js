import React from "react";
import "./style.css";

function Select({selectType}){
	return (
		<div className="select-wrap">
			<span className="label">Выбор авиакомпании:</span>
			<select className="select" onChange={selectType}>
				<option value="all">Все авиакомпании</option>
				<option value="Aeroflot">Aeroflot</option>
				<option value="S7">S7</option>
				<option value="KLM">KLM</option>
			</select>
		</div>
	)
}

export default Select;