const express = require("express")
const router = express.Router();
const axiosController = require("../controllers/axios")


router.get('/ping', (req, res) => {
    res.status(200).send("server is ready")
})
// router.get('/users', axiosController.GetAllUser)
// router.post('/users', axiosController.addNewUser)
// router.delete('users/{id}', axiosController.deleteUser)
// router.get('/search/{params}', axiosController.search)
router.get('/top/album', axiosController.topAlbum)
router.get('/top/genre', axiosController.topGenre)
router.get('/top/artist', axiosController.topArtist)
router.get('/top/track', axiosController.topTrack)
router.get('/top/playlist', axiosController.topPlaylist)


module.exports = router