import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setBlue,
	setGreen,
	setRed,
} from './feature/changeBackground/bgChangeSlice';

const ChangeColor = () => {
	const {color}  = useSelector((state) => state.color);
	// console.log('color :: ', color);
	const dispatch = useDispatch();
	return (
		<div className='mt-10'>
			<div className={`card w-1/2 bg-${color}-100 shadow-xl m-auto`}>
				<div className='card-body'>
					{/* <h2 className='text-center text-5xl mb-3'> {counter.count} </h2> */}

					<div className='card-actions justify-center'>
						<button
							className='btn btn-active'
							onClick={() => dispatch(setRed())}>
							Red
						</button>
						<button
							className='btn btn-active btn-primary'
							onClick={() => dispatch(setBlue())}>
							Blue
						</button>

						<button
							className='btn btn-active btn-ghost'
							onClick={() => dispatch(setGreen())}>
							Green
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeColor;
