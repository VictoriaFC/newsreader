import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import FormSelect from '../FormSelect/FormSelect'
import ArticleCard from '../ArticleCard/ArticleCard';
import Articles from '../Articles/Articles';

const App = () => {

	const [articles, setArticles] = useState([])
	const [error, setError] = useState('')

  return (
    <div className="main-container">
			<Route>
				<FormSelect setArticles={setArticles} setError={setError} error={error}/>
				<Articles setArticles={setArticles} articles={articles}/>
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</Route>
    </div>
  )
}

export default App
