import { Route, Routes } from 'react-router-dom';
import Error from '../Error/Error';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import './Data.scss';

const Data = () => {
	let configAll = ['person', 'city', 'email', 'joiningDate', 'role'];
	let config1 = ['person', 'email', 'role'];
	let config2 = ['email', 'joiningDate', 'role'];

	let sortAll = ['person', 'city', 'email', 'joiningDate', 'role'];
	let sort1 = ['person'];
	let sort2 = ['joiningDate', 'role'];
	let sort3 = ['city', 'role'];

	return (
		<div className='data'>
			<Navbar className='navbar'></Navbar>
			<Routes>
				<Route
					element={
						<Table
							className='data-table'
							config={configAll}
							sort={sortAll}
						></Table>
					}
					path='/'
				></Route>
				<Route
					element={
						<Table
							className='data-table'
							config={config1}
							sort={sort1}
						></Table>
					}
					path='table-1'
				></Route>
				<Route
					element={
						<Table
							className='data-table'
							config={config2}
							sort={sort2}
						></Table>
					}
					path='table-2'
				></Route>
				<Route
					element={
						<Table
							className='data-table'
							config={configAll}
							sort={sort3}
						></Table>
					}
					path='table-3'
				></Route>
				<Route element={<Error></Error>} path='*'></Route>
			</Routes>

			{/* <Table className='data-table' config={config2}></Table> */}
		</div>
	);
};

export default Data;
