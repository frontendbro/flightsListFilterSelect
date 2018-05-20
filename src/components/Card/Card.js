import React from "react";
import "./style.css";

function Card({name, from, to, departure, arrival}){
	return (
		<div className="card">
			<p><span className="card-title">Откуда - Куда:</span><br />{from} - {to}</p>
			<p><span className="card-title">Время вылета - Время прилёта:</span><br />{departure} - {arrival}</p>
			<p><span className="card-title">Название авиакомпании:</span><br /> {name}</p>
		</div>
	)
}

export default Card;