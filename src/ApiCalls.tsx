const fetchCats = () => {
  return fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    return response.json();
  })
}

export { fetchCats }
