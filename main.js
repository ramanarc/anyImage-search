const formTag = document.querySelector('form')
const inputTag = formTag.querySelector('input')


// Search Unsplash API
function searchUnsplash(term) {
  console.log(term);
}

formTag.addEventListener('submit', function (event) {
  const searchTerm = inputTag.value
  searchUnsplash(searchTerm);

  event.preventDefault();
})