import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleDetails.css'

const ArticleDetails = ({ title, byline, abstract, published_date }) => {

	return (
		<div className="article-details-container">
			<h2 className="details-title">{title}</h2>
			<p className="details-byline">{byline}</p>
			<p className="details-abstract">Description: {abstract}</p>
			<p className="details-pub-date">{published_date}</p>
			<Link to="/">
				<button className="details-back-button">Back to Main</button>
			</Link>
		</div>
	)
}

export default ArticleDetails