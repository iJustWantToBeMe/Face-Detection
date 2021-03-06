import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImgSubmit }) => {
	return (
		<div>
			<p className='f5 b'>
				{
					'Sumbit your image link below and it will detect the faces in your picture!'
				}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input
						className='f4 pa2 w-70 center'
						type='tex'
						onChange={onInputChange}
					/>
					<button
						className='w-30 grow f4 ph3 pv2 dib white bg-light-silver pointer'
						onClick={onImgSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
