document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let debounceTimer;
  let lastQuery = '';
  let instantSearchTimer;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim()

    clearTimeout(debounceTimer)
    clearTimeout(instantSearchTimer)

    debounceTimer = setTimeout(function() {
      if (query) {
        lastQuery = query
      }
    }, 300);

    instantSearchTimer = setTimeout(function() {
      console.log('Last instant search:', lastQuery)
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: lastQuery }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to record instant search')
          }
          return response.json()
        })
        .then(data => {
          searchResults.innerHTML = ''
          data.forEach(result => {
            const resultDiv = document.createElement('div')
            resultDiv.textContent = result.title
            searchResults.appendChild(resultDiv)
          })
        })
        .catch(error => {
          console.error('Error:', error)
        })
    }, 1000)
  })
})