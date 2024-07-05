document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault()
  
    const searchQuery = document.getElementById('searchInput').value
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/search?query=' + encodeURIComponent(searchQuery), true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText)
            displaySearchResults(response)
          } catch (error) {
            console.error('Error parsing JSON response:', error)
          }
        } else {
          console.error('Request failed with status:', xhr.status)
        }
      }
    };
    xhr.send()
  })
  
  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults')
    searchResultsContainer.innerHTML = ''
  
    if (Array.isArray(results)) {
      results.forEach(function(result) {
        const articleElement = document.createElement('div')
        articleElement.textContent = result.title
        searchResultsContainer.appendChild(articleElement)
      })
    }
  }