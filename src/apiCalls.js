export const fetchArticlesBySection = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key={process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
}