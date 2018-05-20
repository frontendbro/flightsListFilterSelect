import React from 'react';

function Select({selectType}){
	return (
		<div className='select'>
			<span className='control-wrap__label'>Выбор авиакомпании: </span>
				<select name='' id='' onChange={selectType}>
					<option value="all">Все авиакомпании</option>
					<option value="Aeroflot">Aeroflot</option>
					<option value="S7">S7</option>
					<option value="KLM">KLM</option>
					<option value="S7">S7</option>
				</select>
		</div>
	)
}

export default Select;