import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleDetails.css'

const ArticleDetails = ({ title, byline, abstract }) => {

	return (
		<div className="article-details-container">
			<p>{title}</p>
			<p>{byline}</p>
			<p>{abstract}</p>
			<Link to="/">
				<button>Back to Main</button>
			</Link>
		</div>
	)
}

export default ArticleDetails