export function searchGalleryQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "44710644-2154e124280f212c40f530ba7";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch((error) => {
        console.log(error);
    })
}