import React, { useCallback, useState } from 'react';
import throttle from 'lodash.throttle';
import './styles.css';

function useThrottle(callback, delay) {
	const throttleFn = useCallback(
		throttle((...args) => callback(...args), delay),
		[delay]
	);
	return throttleFn;
}

export default function Throttler() {
	const [count, setCount] = useState(0);
	const [dbCount, setDbCount] = useState(0);

	const handleChange = (event) => {
		const nextCount = count + 1;
		setCount(nextCount);
		throttledSave(nextCount);
	};

	const throttledSave = useThrottle((nextCount) => setDbCount(nextCount), 2000);

	return (
		<main>
			<h1>Counter</h1>

			<button className='btn' onClick={handleChange}>
				Press
			</button>
			<section className='panels'>
				<div>
					<h1>Local Value {count}</h1>
				</div>
				<div>
					<h1>Saved (DB) Value {dbCount}</h1>
				</div>
			</section>
			<p className='helper-text'>
				With throttle you would notice that the button value in db will get updated after a fixed duration even
				if you keep incrementing the value by pressing the button.
			</p>
		</main>
	);
}
