const formTag = document.querySelector('form')
const inputTag = formTag.querySelector('input')



const url = 'https://api.unsplash.com/search/photos?per_page=24&query=blue'

// Search Unsplash API
function searchUnsplash(term) {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

formTag.addEventListener('submit', function (event) {
  const searchTerm = inputTag.value
  searchUnsplash(searchTerm);

  event.preventDefault();
})