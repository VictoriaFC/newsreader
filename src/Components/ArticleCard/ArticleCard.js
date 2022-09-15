import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ title, byline, published_date, created_date }) => {

	return (
		<Link to={`/Article/${created_date}`} >
			<div className="article-card">
				<h2>{title}</h2>
				<p>{byline}</p>
				<p>Published: {published_date}</p>
			</div>
		</Link>
	)
}

export default ArticleCard