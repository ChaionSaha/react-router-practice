import React, { useEffect, useState } from 'react';
import Table1 from '../Table1/Table1';
import './Table.scss';

const Table = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('tableTestData.json')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<table className='table table-1'>
			<thead>
				<td className='th-name'>Name</td>
				<td className='th-city'>City</td>
				<td className='th-email'>Email Address</td>
				<td className='th-joinDate'>Joining Date</td>
				<td className='th-role'>Role</td>
			</thead>
			{users.map((user) => {
				return <Table1 user={user}></Table1>;
			})}
		</table>
	);
};

export default Table;
