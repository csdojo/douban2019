// import axios
import axios from 'axios';

export default {
  getWeeklyList: function() {
    return axios.get('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b')
  }
}

