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
				byline={article.byline}
				published_date={article.published_date}
				created_date={article.created_date}
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