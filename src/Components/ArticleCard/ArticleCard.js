import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({ title, author, publishedDate }) => {
	return (
		<div className="article-card">
			<h2>{title}</h2>
			<p>{author}</p>
			<p>Published: {publishedDate}</p>
			<button>See All Details</button>
		</div>
	)
}

export default ArticleCard