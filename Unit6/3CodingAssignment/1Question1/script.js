const API_KEY = '4afc61b2';
        const BASE_URL = 'https://www.omdbapi.com/';
        
        let currentPage = 1;
        let currentSearch = '';
        let searchTimeout;
        let canFetch = true;

        const searchInput = document.getElementById('searchInput');
        const moviesContainer = document.getElementById('movies');
        const loadingElement = document.getElementById('loading');
        const errorElement = document.getElementById('error');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pageInfo = document.getElementById('pageInfo');

 
        window.addEventListener('load', () => {
            fetchMovies('marvel');
        });

   
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            currentSearch = e.target.value;
            currentPage = 1;
            
            searchTimeout = setTimeout(() => {
                if (currentSearch.trim() === '') {
                    fetchMovies('marvel');
                } else {
                    fetchMovies(currentSearch);
                }
            }, 500);
        });


        prevBtn.addEventListener('click', () => {
            if (currentPage > 1 && canFetch) {
                currentPage--;
                fetchMovies(currentSearch || 'marvel');
                throttle();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (canFetch) {
                currentPage++;
                fetchMovies(currentSearch || 'marvel');
                throttle();
            }
        });

        function throttle() {
            canFetch = false;
            setTimeout(() => {
                canFetch = true;
            }, 1000);
        }

        async function fetchMovies(searchTerm) {
            showLoading();
            hideError();
            
            try {
                const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${currentPage}`);
                const data = await response.json();
                
                if (data.Response === 'True') {
                    displayMovies(data.Search);
                    updatePagination();
                } else {
                    showError('No movies found');
                }
            } catch (error) {
                showError('Failed to fetch movies');
            } finally {
                hideLoading();
            }
        }

        function displayMovies(movies) {
            moviesContainer.innerHTML = '';
            
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                
                movieCard.innerHTML = `
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" 
                         alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                `;
                
                moviesContainer.appendChild(movieCard);
            });
        }

        function updatePagination() {
            pageInfo.textContent = `Page ${currentPage}`;
            prevBtn.disabled = currentPage === 1;
        }

        function showLoading() {
            loadingElement.style.display = 'block';
        }

        function hideLoading() {
            loadingElement.style.display = 'none';
        }

        function showError(message) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            moviesContainer.innerHTML = '';
        }

        function hideError() {
            errorElement.style.display = 'none';}