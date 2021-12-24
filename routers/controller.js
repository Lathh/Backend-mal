const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const axiosController = require("../controllers/axios");
const userController = require("../controllers/user");

// Middleware
const authenticateJWT = (req, res, next) => {
    // Take request authorization
    const authHeader = req.headers.authorization;

    if(authHeader){
        // Take token
        const token = authHeader.split(" ")[1];

        // Verify JWT
        jwt.verify(token, process.env.TOKEN, (err, user) => {
            if(err){
                return res.sendStatus(403);
            }

            // If verified
            req.user = user;
            next();
        });
    }else{
        res.sendStatus(401);
    }
}

router.get('/', (req, res) => {
    res.send("<h1>Welcome to MAL API</h1>");
})


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
router.get('/users', authenticateJWT, userController.allUsers);
router.get('/users/:userId', authenticateJWT, userController.userProfile);
router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.patch('/users/:userId', authenticateJWT, userController.editUserProfile);
router.delete('/users/:userId', authenticateJWT, userController.deleteUser);
router.post('/users/:userId/favorite', authenticateJWT, userController.addFavoriteTrack);
router.get('/users/:userId/favorite', authenticateJWT, userController.favoriteTracks);
router.delete('/users/:userId/favorite/:trackId', authenticateJWT, userController.deleteFavoriteTrack);
router.post('/users/:userId/followed', authenticateJWT, userController.addFollowedArtist);
router.get('/users/:userId/followed', authenticateJWT, userController.followedArtists);
router.delete('/users/:userId/followed/:artistId', authenticateJWT, userController.deleteFollowedArtist);

module.exports = router;