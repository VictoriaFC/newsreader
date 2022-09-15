import React, { useState, useEffect } from 'react'
import './FormSelect.css'
import { fetchArticlesBySection } from '../../apiCalls'

const FormSelect = ({ setArticles, setError }) => {

	const getArticlesOnChange = (e) => {
		e.preventDefault()
		fetchArticlesBySection(e.target.value)
		.then(data => setArticles(data.results))
		.catch(error => setError(error.message))
	}

	return (
		<div className="form-container">
			<h2 className="form-header">What kind of article are you looking for?</h2>
			<form>
				<label htmlFor="select-article-genre"></label>
				<select defaultValue="" className="dropdown" name="select-article-genre" id="selectArticleGenre" onChange={(e) => getArticlesOnChange(e)}>
					<option value="" disabled> Choose an Article Genre </option>
					<option value="arts">Arts</option>
					<option value="automobiles">Automobiles</option>
					<option value="books">Books</option>
					<option value="business">Business</option>
					<option value="fashion">Fashion</option>
					<option value="food">Food</option>
					<option value="health">Health</option>
					<option value="home">Home</option>
					<option value="insider">Insider</option>
					<option value="magazine">Magazine</option>
					<option value="movies">Movies</option>
					<option value="nyregion">Nyregion</option>
					<option value="obituaries">Obituaries</option>
					<option value="opinion">Opinion</option>
					<option value="politics">Politics</option>
					<option value="realestate">Realestate</option>
					<option value="science">Science</option>
					<option value="sports">Sports</option>
					<option value="sundayreview">Sunday Review</option>
					<option value="technology">Technology</option>
					<option value="theater">Theater</option>
					<option value="t-magazine">T-Magazine</option>
					<option value="travel">Travel</option>
					<option value="upshot">Upshot</option>
					<option value="us">Us</option>
					<option value="world">World</option>
				</select>
			</form> 
		</div>

	)
}

export default FormSelect