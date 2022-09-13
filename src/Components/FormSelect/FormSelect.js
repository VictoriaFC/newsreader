import React from 'react'
import './FormSelect.css'

const FormSelect = () => {
	return (
		<div className="form-container">
			<h2 className="form-header">What kind of article are you looking for?</h2>
			<form>
				<label htmlFor="select-article-genre"></label>
				<select className="dropdown" name="select-article-genre" id="selectArticleGenre">
					<option value="choose">Choose an Article Genre</option>
				</select>
			</form> 
		</div>

	)
}

export default FormSelect