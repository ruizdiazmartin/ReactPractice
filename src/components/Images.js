import React from 'react'
import './styles/images.css'

const Image = (props) => {

	const { largeImageURL, likes, previewURL, tags, views } = props.image;

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img src={previewURL} alt={tags} className="Styles-images" />
				{<div className="card-body">
					<p className="card-text">{likes} Likes </p>
					<p className="card-text">{views} Views </p>
					<a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">See Image</a>
					<input type="checkbox" value="option1" checked={false} />
				</div>}
			</div>
		</div>
	)
}

export default Image