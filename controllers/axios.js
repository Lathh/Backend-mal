const axios = require("axios");



const topAlbum  = async (req, res) => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/albums')
        //console.log(response.data)

        res.status(200).json({
            message: "Data Top Albums",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const topGenre = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/genre')
        res.status(200).json({
            message: "Data Top Genre",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const topTrack = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/tracks')
        res.status(200).json({
            message: "Data Top Tracks",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const topArtist = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/chart/0/artists')
        res.status(200).json({
            message: "Data Top Artist",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const topPlaylist = async (req,res)  => {
    try {
        const response = await axios.get('https://deezer.eddypermana.com/radio')
        res.status(200).json({
            message: "Data Top Playlist",
            data: response.data.data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
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
    topAlbum,
    topGenre,
    topArtist,
    topTrack,
    topPlaylist
    // GetAllUser,
    // addNewUser,
    // deleteUser
    // search
}