import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import FormSelect from '../FormSelect/FormSelect'
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails'

const App = () => {

	const [articles, setArticles] = useState([])
	const [error, setError] = useState('')

  return (
    <div className="main-container">

			<Route exact path="/">
				<FormSelect setArticles={setArticles} setError={setError} error={error}/>
				<Articles setArticles={setArticles} articles={articles}/>
			</Route>

			<Route exact path="/Article/:id"
				render={({ match }) => {
					const articleToRender = articles.find(article => article.created_date === match.params.id)
					return (
					<div>
						<ArticleDetails {...articleToRender}/>
					</div>
					)
				}}
			/>

    </div>
  )
}

export default App
