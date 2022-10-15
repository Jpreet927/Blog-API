const axios = require("axios");
const BASE_URL = "https://api.unsplash.com";

// GET random image
const getRandomImage = async () => {
    const response = await axios.get(`${BASE_URL}/photos/random`);
};

// GET image by keyword
const getImageByKeyword = async (string) => {
    const words = string.split(" ");
    let image;

    for (const word of words) {
        const response = await axios.get(
            `${BASE_URL}/search/photos?page=1&query=${word}`
        );
        if (response.total > 0) {
            image = response.results[0].urls["full"];
            break;
        }
    }
};
