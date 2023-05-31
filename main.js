const formTag = document.querySelector('form')
const inputTag = formTag.querySelector('input')
const resultsTag = document.querySelector('.results');


const url = 'https://api.unsplash.com/search/photos?per_page=24&query='
const accessKey = "FLi6YA90kfg-x5o8oAbPxRgvXwvHp0TemWf_4Kt3p7g"

// Search Unsplash API
function searchUnsplash(term) {
  return fetch(url + term, {
    method: "GET",
    headers: {
      "Authorization": "Client-ID " + accessKey
    },
  })
    .then(response => response.json())
    .then((data) => {
      // Format unsplash results to suit our needs
      return data.results.map(result => {
        return {
          imgSrc: result.urls.regular,
          userName: result.user.name,
          // likes: result.likes,
          altDescription: result.alt_description,
          backgroundColor: (result.color || '#eee') + "cc"

        }
      })
    })
}


// Add fetched results to the page

const addResults = function (results) {
  // remove all loading tags
  resultsTag.innerHTML = "";

  results.forEach(result => {
    resultsTag.innerHTML = resultsTag.innerHTML + `
    <div class="result-box">
      <div class="image" style="background-color: ${result.backgroundColor}"><img src="${result.imgSrc}" alt=""></div>
      <div class="content-container">
        <h4 style="color: #171717">${result.altDescription}</h4>
        <p style="color: #404040">by ${result.userName}</p>
      </div>
    </div>
    `
  })
}


formTag.addEventListener('submit', function (event) {
  const searchTerm = inputTag.value
  searchUnsplash(searchTerm)
    .then(results => {
      addResults(results)
    })

  event.preventDefault();
})