import React from 'react';
import './Table1.scss';

const Table1 = (props) => {
	console.log(props);
	const { person, city, email, joiningDate, role } = props.user;
	return (
		<tr>
			<td className='td-name'>
				<span className='pro-pic'>
					<img src={person.avatar} alt='profilepic' />
					{person.name}
				</span>
			</td>
			<td className='td-city'>{city}</td>
			<td className='td-email'>
				<a href={`mailto:${email}`}> {email}</a>
			</td>
			<td className='td-date'>{joiningDate}</td>
			<td className='td-role'>{role}</td>
		</tr>
	);
};

export default Table1;
