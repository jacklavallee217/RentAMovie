const uuid = require("uuid")

const Movies = [
    {
        "id": uuid.v4(),
        "movieTitle": "The Shawshank Redemption",
        "movieType": "Regular",
        "movieGenre": "Drama",
        "popularity": Math.floor(Math.random() * 100)
    },
    {
        "id": uuid.v4(),
        "movieTitle": "The Godfather",
        "movieType": "Regular",
        "movieGenre": "Drama",
        "popularity": Math.floor(Math.random() * 100)
    },
    {
        "id": uuid.v4(),
        "movieTitle": "The Dark Knight",
        "movieType": "Regular",
        "movieGenre": "Action",
        "popularity": Math.floor(Math.random() * 100)
    },
    {
        "id": uuid.v4(),
        "movieTitle": "The Lion King",
        "movieType": "Children's Movie",
        "movieGenre": "Drama",
        "maxAge": 13,
        "popularity": Math.floor(Math.random() * 100)
    },
    {
        "id": uuid.v4(),
        "movieTitle": "Parasite",
        "movieType": "New Release",
        "movieGenre": "Horror",
        "yearReleased": 2019,
        "popularity": Math.floor(Math.random() * 100)
    },
]

export default Movies;