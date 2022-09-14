import React from 'react'
import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
	console.log('articles:', articles)
	const articleCards = articles.map((article, index) => {
		return(
			<ArticleCard 
				key={index}
				title={article.title}
				author={article.byline}
				publishedDate={article.published_date}
			/>
		)
	})
	return(
		<div className="articles-container">
			{articleCards}
		</div>
	)
}

export default Articles