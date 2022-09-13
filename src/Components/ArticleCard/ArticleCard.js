import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({ title, author, publishedDate }) => {
	return (
		<div className="article-card">
			<h2>Title: {title}</h2>
			<p>Author: {author}</p>
			<p>Published: {publishedDate}</p>
			<button>See All Details</button>
		</div>
	)
}

export default ArticleCard