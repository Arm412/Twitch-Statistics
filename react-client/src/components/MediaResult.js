import React from 'react';

const MediaResult = (props) => {
	return (
		<a href={props.mediaLink} target="_blank" rel="noreferrer">
			<div
				className={'media-clip-result ' + props.className}
				onClick={props.onclick}
			>
				<p className="result-column-name center-text red">{props.streamer}</p>
				<p className="result-column-title center-text">{props.title}</p>
				<p className="result-column-views center-text">{props.views}</p>
			</div>
		</a>
	);
};

export default MediaResult;
