document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input')
  let debounceTimer
  let lastQuery = ''
  let instantSearchTimer

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
      .catch(error => {
        console.error('Error:', error)
      })

      fetch('/userDetails')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retreive user details')
        }
        return response.json()
      })
      .then(userData => {
        console.log(userData)
        userDetails(userData)
      })
      .catch(error => {
        console.error('Error retreiving user data:', error)
      });

      fetch('/trends') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retreive user search result')
        }
        return response.json()
      })
      .then(trendData => {
        console.log(trendData)
        renderAnalytics(trendData)
      })
      .catch(error => {
        console.error('Error retreiving trend data:', error)
      });
    }, 1000)
  })

  function userDetails(userData) {
      const analyticsSection = document.getElementById('user_details')
      analyticsSection.innerHTML = ''

      const userTitle = document.createElement('h2')
      userTitle.textContent = 'User Details'

      const userTable = document.createElement('table')
      userTable.classList.add('user-table')

    // Create table headers
    const tableHeaderRow = document.createElement('tr')
    const queryHeader = document.createElement('th')
    queryHeader.textContent = 'Record'
    const addressHeader = document.createElement('th')
    addressHeader.textContent = 'IP Address'
    tableHeaderRow.appendChild(queryHeader)
    tableHeaderRow.appendChild(addressHeader)
    userTable.appendChild(tableHeaderRow)

    // Create table rows with data
    userData.forEach(user => {
      const tableRow = document.createElement('tr')
      const queryData = document.createElement('td')
      queryData.textContent = user.record
      const countData = document.createElement('td')
      countData.textContent = user.ip_details
      tableRow.appendChild(queryData)
      tableRow.appendChild(countData)
      userTable.appendChild(tableRow)
    })

    analyticsSection.appendChild(userTitle)
    analyticsSection.appendChild(userTable)
  }

  function renderAnalytics(trendData) {
    const analyticsSection = document.getElementById('search_trends')
    analyticsSection.innerHTML = ''

    const analyticsTitle = document.createElement('h2')
    analyticsTitle.textContent = 'Trends Analytics'

    const analyticsTable = document.createElement('table')
    analyticsTable.classList.add('trends-table')

    // Create table headers
    const tableHeaderRow = document.createElement('tr')
    const queryHeader = document.createElement('th')
    queryHeader.textContent = 'Record';
    const countHeader = document.createElement('th')
    countHeader.textContent = 'Search Count'
    tableHeaderRow.appendChild(queryHeader)
    tableHeaderRow.appendChild(countHeader)
    analyticsTable.appendChild(tableHeaderRow)

    // Create table rows with data
    trendData.forEach(trend => {
      const tableRow = document.createElement('tr')
      const queryData = document.createElement('td')
      queryData.textContent = trend.record;
      const countData = document.createElement('td')
      countData.textContent = trend.search_count;
      tableRow.appendChild(queryData)
      tableRow.appendChild(countData)
      analyticsTable.appendChild(tableRow)
    });

    analyticsSection.appendChild(analyticsTitle)
    analyticsSection.appendChild(analyticsTable)
  }
})
