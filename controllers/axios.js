const axios = require("axios");

// Track
const topTracks = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/tracks');
        res.status(200).json({
            message: "Top Tracks",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Genre
const allGenres = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/genre');
        res.status(200).json({
            message: "All Genres",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const genreArtists = async (req,res)  => {
    try {
        const genreId = req.params.genreId;
        const response = await axios.get(`https://deezer.eddypermana.com/genre/${genreId}/artists`);
        res.status(200).json({
            message: "Genre Artists",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Album
const topAlbums  = async (req, res) => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/albums')
        //console.log(response.data)

        res.status(200).json({
            message: "Top Albums",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const albumById  = async (req, res) => {
    try {
        const albumId = req.params.albumId;
        const response = await axios.get(`https://deezer.eddypermana.com/album/${albumId}`);
        res.status(200).json({
            message: "Album by ID",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const albumTracks  = async (req, res) => {
    try {
        const albumId = req.params.albumId;
        const response = await axios.get(`https://deezer.eddypermana.com/album/${albumId}/tracks`);
        res.status(200).json({
            message: "Album Tracks",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Artist
const topArtists = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/artists');
        res.status(200).json({
            message: "Top Artists",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const artistById = async (req,res)  => {
    try {
        const artistId = req.params.artistId;
        const response = await axios.get(`https://deezer.eddypermana.com/artist/${artistId}`);
        res.status(200).json({
            message: "Artist by ID",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const artistTopTracks = async (req,res)  => {
    try {
        const artistId = req.params.artistId;
        const response = await axios.get(`https://deezer.eddypermana.com/artist/${artistId}/top`);
        res.status(200).json({
            message: "Artist Top Tracks",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const artistAlbums = async (req,res)  => {
    try {
        const artistId = req.params.artistId;
        const response = await axios.get(`https://deezer.eddypermana.com/artist/${artistId}/albums`);
        res.status(200).json({
            message: "Artist Albums",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const artistRelated = async (req,res)  => {
    try {
        const artistId = req.params.artistId;
        const response = await axios.get(`https://deezer.eddypermana.com/artist/${artistId}/related`);
        res.status(200).json({
            message: "Artist Related",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Playlist
const allPlaylists = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/radio');
        res.status(200).json({
            message: "All Playlists",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const playlistById = async (req,res)  => {
    try {
        const playlistId = req.params.playlistId;
        const response = await axios.get(`https://deezer.eddypermana.com/radio/${playlistId}`);
        res.status(200).json({
            message: "Playlist by ID",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const playlistTracks = async (req,res)  => {
    try {
        const playlistId = req.params.playlistId;
        const response = await axios.get(`https://deezer.eddypermana.com/radio/${playlistId}/tracks`);
        res.status(200).json({
            message: "Playlist Tracks",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Search
const searchTracks = async (req,res)  => {
    try {
        const keyword = req.query.q;
        const response = await axios.get(`https://deezer.eddypermana.com/search/track?q=${keyword}`);
        res.status(200).json({
            message: "Tracks Search Result",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const searchAlbums = async (req,res)  => {
    try {
        const keyword = req.query.q;
        const response = await axios.get(`https://deezer.eddypermana.com/search/album?q=${keyword}`);
        res.status(200).json({
            message: "Albums Search Result",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const searchArtists = async (req,res)  => {
    try {
        const keyword = req.query.q;
        const response = await axios.get(`https://deezer.eddypermana.com/search/artist?q=${keyword}`);
        res.status(200).json({
            message: "Artists Search Result",
            data: response.data.data
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// const GetAllUser = async (req,res) => {
//     try {
//         const users = await user.findAll()
//         res.status(200).send(users)
//     } catch (error) {
//         res.status(404).json({
//             message: error.message
//         })
//     }
// }

// const addNewUser = async (req,res) => {
//     try {
//         const body = req.body;
//         const name = body.name;
//         const email = body.email;
//         const password = body.password;
//         const users = new user({name: name, email: email, password: password})

//         const saved = await users.save()
//         res.status(200).send(saved)
//     } catch (error) {
//         res.status(404).json({
//             message: error.message
//         })
//     }
// }

// const deleteUser = async (req,res) => {
//     try {
//         const id = req.params.id 
//         await user.deleteOne({id: id})
//         res.status(200).send({message: `user with ${id} has been deleted`})
//     } catch (error) {
//         res.status(404).json({
//             message: error.message
//         })
//     }
// }
// // const search = async (req,res) => {
//     try {
//         const params = req.query

//         const users = await user.find()
//         res.status(200).send(users)
//     } catch (error) {
//         res.status(404).json({
//             message: error.message
//         })
//     }
// }
module.exports = {
    topTracks,

    allGenres,
    genreArtists,
    
    topAlbums,
    albumById,
    albumTracks,
    
    topArtists,
    artistById,
    artistTopTracks,
    artistAlbums,
    artistRelated,
    
    allPlaylists,
    playlistById,
    playlistTracks,
    
    searchTracks,
    searchAlbums,
    searchArtists
}