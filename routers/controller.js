const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const axiosController = require("../controllers/axios");
// const userController = require("../routers/user");

router.get('/', (req, res) => {
    res.send("<h1>Welcome to MAL API</h1>");
})
// router.get('/users', axiosController.GetAllUser)
// router.post('/users', axiosController.addNewUser)
// router.delete('users/{id}', axiosController.deleteUser)
// router.get('/search/{params}', axiosController.search)

// Track
router.get('/tracks/top', axiosController.topTracks);

// Genre
router.get('/genres', axiosController.allGenres);
router.get('/genres/:genreId/artists', axiosController.genreArtists);

// Album
router.get('/albums/top', axiosController.topAlbums);
router.get('/albums/:albumId', axiosController.albumById);
router.get('/albums/:albumId/tracks', axiosController.albumTracks);

// Artist
router.get('/artists/top', axiosController.topArtists);
router.get('/artists/:artistId', axiosController.artistById);
router.get('/artists/:artistId/top', axiosController.artistTopTracks);
router.get('/artists/:artistId/albums', axiosController.artistAlbums);
router.get('/artists/:artistId/related', axiosController.artistRelated);

// Playlist
router.get('/playlists', axiosController.allPlaylists);
router.get('/playlists/:playlistId', axiosController.playlistById);
router.get('/playlists/:playlistId/tracks', axiosController.playlistTracks);

// Search
router.get('/search/tracks', axiosController.searchTracks);
router.get('/search/albums', axiosController.searchAlbums);
router.get('/search/artists', axiosController.searchArtists);

// User
// router.get('/users')

module.exports = router;