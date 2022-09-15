import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ title, byline, published_date, created_date }) => {

	return (
		<Link to={`/Article/${created_date}`} style={{textDecoration: 'none'}}>
			<div className="article-card">
				<h2 className="home-title">{title}</h2>
				<p className="home-byline">{byline}</p>
				<p className="home-pub-date">Published: {published_date}</p>
			</div>
		</Link>
	)
}

export default ArticleCard