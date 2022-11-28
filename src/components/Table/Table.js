//import { SwitchVerticalOutline } from 'heroicons-react';
import React, { useEffect, useState } from 'react';
import ShowTable from '../Table1/Table1';
import './Table.scss';

const Table = (props) => {
	const configs = props.config;
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('tableTestData.json')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const upperFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
	console.log(upperFirstLetter('chaion'));

	return (
		<table className='table'>
			<thead>
				<tr>
					{configs.map((config) => {
						return (
							<td key={config} className={`th-${config}`}>
								<span>{upperFirstLetter(config)}</span>
							</td>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{users.map((user) => {
					return (
						<ShowTable user={user} configs={configs}></ShowTable>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
