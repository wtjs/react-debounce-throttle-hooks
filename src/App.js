import React from 'react';
import Debouncer from './Components/DebounceExample';
import Throttler from './Components/ThrottleExample';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<Debouncer />
			<br />
			<hr />
			<br />
			<Throttler />
		</React.Fragment>
	);
}

export default App;
