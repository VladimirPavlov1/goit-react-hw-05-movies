import axios from "axios"


AUTH_TOKEN =  'https://api.themoviedb.org/3/authentication/token/new?api_key=<<27cddf1230eab22bdf20f54c99a70037>>'

axios.defaults.baseURL = 'https://www.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getTrend=()=>{

    axios.get('trending/get-trending')
    .then(console.log)

}
