// import axios
import axios from 'axios';

export default {
  getSavedMovies: function() {
    return axios.get('/api/movie')
  },
  getMovieById: function(movieId) {
    return axios.get(`/api/movie/${movieId}`)
  },
  saveMovie: function(movieData) {
    return axios.post('/api/movie', movieData)
  },
  updateMovie: function(movieId) {
    return axios.put(`/api/movie/${movieId}`)
  },
  deleteMovie: function(movieId) {
    return axios.delete(`/api/movie/${movieId}`)
  },

  searchMovies: function(query) {
return axios.get('https://api.douban.com/v2/movie/search', { params: {
  q: query
}})
  }
}

