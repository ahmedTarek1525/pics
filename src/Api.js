import axios from "axios";

const searchImages = async ( term ) => {
   const response = await axios.get('https://api.unsplash.com/search/photos' , {
       headers: {
        Authorization: 'Client-ID 0Z0Mb_cMjaS-UyWNEqzwDc7xWcNZaUKu3cf2KSyqDp8',


       },
       params: {
         query: term,


       }, 
    });
    
    return response.data.results;

};

export default searchImages;