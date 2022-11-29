import { SwitchVerticalOutline } from 'heroicons-react';
import React, { useEffect, useState } from 'react';
import ShowTable from '../ShowTable/ShowTable';
import './Table.scss';

const Table = (props) => {
	const configs = props.config;
	const sortConditions = props.sort;

	const [rawUsers, setRawUsers] = useState([]);
	// const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('tableTestData.json')
			.then((res) => res.json())
			.then((data) => {
				setRawUsers(data);
			});
	}, []);

	const upperFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);

	const sortingFunction = (config) => {
		let users = [...rawUsers];
		if (config === 'person') {
			users = users.sort((a, b) => {
				return a.person.name > b.person.name ? 1 : -1;
			});
		} else {
			users = users.sort((a, b) => {
				return a[config] > b[config] ? 1 : -1;
			});
		}

		setRawUsers(users);
	};

	return (
		<table className='table'>
			<thead>
				<tr>
					{configs.map((config) => {
						return (
							<td key={config} className={`th-${config}`}>
								<span>
									{upperFirstLetter(config)}
									{sortConditions.includes(config) ? (
										<SwitchVerticalOutline
											className='sort-icon'
											onClick={() =>
												sortingFunction(config)
											}
										></SwitchVerticalOutline>
									) : (
										''
									)}
								</span>
							</td>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{rawUsers.map((user) => {
					return (
						<ShowTable user={user} configs={configs}></ShowTable>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
