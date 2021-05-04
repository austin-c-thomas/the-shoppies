<<<<<<< HEAD
export const DATA_URL = "http://www.omdbapi.com/?apikey=d18f6cb1&type=movie&"
=======
export const DATA_URL = "http://www.omdbapi.com/?apikey=d18f6cb1&"
export const POSTER_URL = "http://img.omdbapi.com/?apikey=d18f6cb1&"
>>>>>>> 968dae895441ac1685bb614e33f0206c4185c7d2


export const callApi = async ({ query }) => {
    try {
        const response = await fetch(DATA_URL + query);
        const data = await response.json();

        if (data.error) throw data.error;
        return data;
    } catch (error) {
        console.error('Error calling API: ', error);
        return error;
    };
<<<<<<< HEAD
};
=======
};

>>>>>>> 968dae895441ac1685bb614e33f0206c4185c7d2
