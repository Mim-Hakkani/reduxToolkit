import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, rand, reset } from './feature/counterSlice/counterSlice';

const Counter = () => {

	const counter = useSelector((state)=>state.counter)
    console.log('counter :: ',counter);
	const dispatch = useDispatch()
 	return (
		<div className='mt-10'>
			<div className='card w-1/2 bg-base-100 shadow-xl m-auto'>
				<div className='card-body'>
					<h2 className='text-center text-5xl mb-3'> {counter.count} </h2>
					
					<div className='card-actions justify-center'>
						<button className='btn btn-active' onClick={()=>dispatch(increment())}>Increment</button>
						<button className='btn btn-active btn-primary' onClick={()=>dispatch(decrement())}>Decrement</button>
						<button className='btn btn-active btn-secondary' onClick={()=>dispatch(reset())}>Reset</button>
						
						<button className='btn btn-active btn-ghost' onClick={()=>dispatch(rand(Math.floor(Math.random()*1000)))}>Random</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;