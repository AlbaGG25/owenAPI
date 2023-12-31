import uuid from 'react-uuid';

////get data from API and clean the data to obtain only the info I need
const getDataFromApi = () => {
   return fetch ('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then (response => response.json())
    .then (data => {
      const cleanData = data.map ((scenes) => {
        return {
        id: uuid(),
        poster: scenes.poster,
        movie: scenes.movie,
        sentence: scenes.full_line,
        year: scenes.year,
        audio: scenes.audio,
        director: scenes.director
      }
      });
      return cleanData;
});
}

export default getDataFromApi;
