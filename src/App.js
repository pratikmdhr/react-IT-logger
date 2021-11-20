import { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import './App.css';

function App() {
	useEffect(() => {
		//Init Materialize JS
		M.AutoInit();
	});
	return (
		<Fragment>
			<SearchBar />
			<div className='container'>
				<Logs />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<AddBtn />
			</div>
		</Fragment>
	);
}

export default App;
