const axios = require("axios");
require("dotenv").config();
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com";

// GET random image
const getRandomImage = async () => {
    const response = await axios.get(
        `${BASE_URL}/photos/random/?client_id=${ACCESS_KEY}`
    );
    console.log(response.data.urls.full);
    return response.data.urls.full;
};

// GET image by keyword
const getImageByKeyword = async (string) => {
    const words = string.split(" ");
    let image;

    for (const word of words) {
        const response = await axios.get(
            `${BASE_URL}/search/photos?client_id=${ACCESS_KEY}&page=1&query=${word}`
        );
        if (response.total > 0) {
            image = response.results[0].urls["full"];
            break;
        }
    }
};

const getImageByRandomKeyword = async (string) => {
    const words = string.split(" ");
    const index = Math.floor(Math.random() * (words.length - 1 + 1));

    const response = await axios.get(
        `${BASE_URL}/search/photos?client_id=${ACCESS_KEY}&page=1&query=${words[index]}`
    );
    const image = response.results[0].urls["full"];
};

module.exports = { getRandomImage, getImageByKeyword, getImageByRandomKeyword };
