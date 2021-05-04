export const DATA_URL = "http://www.omdbapi.com/?apikey=d18f6cb1&"
export const POSTER_URL = "http://img.omdbapi.com/?apikey=d18f6cb1&"


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
};

