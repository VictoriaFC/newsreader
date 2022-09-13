import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import FormSelect from '../FormSelect/FormSelect'
import ArticleCard from '../ArticleCard/ArticleCard';

const App = () => {
  return (
    <div className="main-container">
      <header className="app-header">
				News Reader
      </header>
				<FormSelect />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
    </div>
  );
}

export default App;
