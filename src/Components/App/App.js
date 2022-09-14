import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import FormSelect from '../FormSelect/FormSelect'
import ArticleCard from '../ArticleCard/ArticleCard';
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
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</Route>
			{/* <Route exact path="/Article/:id">
				<ArticleDetails />
			</Route> */}
    </div>
  )
}

export default App
