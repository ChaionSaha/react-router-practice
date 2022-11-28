import React from 'react';
import './ShowTable.scss';

const ShowTable = (props) => {
	const user = props.user;
	const configs = props.configs;
	return (
		<tr>
			{configs.map((config) => {
				if (config === 'person') {
					return (
						<td className={`td-${config}`}>
							<span>
								<img
									src={user[config].avatar}
									alt='profile-pic'
								/>
								{user[config].name}
							</span>
						</td>
					);
				} else {
					return <td className={`td-${config}`}>{user[config]}</td>;
				}
			})}
		</tr>
	);
};

export default ShowTable;
