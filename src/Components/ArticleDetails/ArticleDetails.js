import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleDetails.css'

const ArticleDetails = ({ title, byline, abstract, published_date, multimedia, short_url }) => {

	const newDate = (published_date) => {
		return published_date.split('T')[0]
	}



	return (
		<div className="article-details-wrapper">
			<div className="article-details-container">
				<h2 className="details-title">{title}</h2>
				<p className="details-byline">{byline}</p>
				<img className="details-image"src={multimedia[0].url} alt="article-image"/>
				<p className="details-abstract">Description: <br></br> {abstract}</p>
				<p className="details-pub-date">Published: {newDate(published_date)}</p>
				<a href={short_url} className="nyt-button" target="_blank" rel="noopener noreferrer">See Article on New York Times</a>
				<Link to="/">
					<button className="details-back-button">Back to Main</button>
				</Link>
			</div>
		</div>
	)
}

export default ArticleDetails