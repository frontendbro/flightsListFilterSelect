import React from 'react';
import './style.css'

function Card({name, from, to, departure, arrival}){
	return (
		<li className="card">
			<p>Откуда - Куда: <br /><span>{from}</span> - {to}</p>
			<p>Время вылета - Время прилёта: <br /><span>{departure}</span> - <span>{arrival}</span></p>
			<p>Название авиакомпании:<br /> {name}</p>
		</li>
	)
}

export default Card;