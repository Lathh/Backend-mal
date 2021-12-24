// Import module
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import models
const { User } = require("../models");
const { Favorite_Track } = require("../models");
const { Followed_Artist } = require("../models");

const registerUser = async (req,res) => {
    let salt = bcrypt.genSaltSync(10);
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const password = bcrypt.hashSync(body.password, salt);
    const passwordConfirm = body.passwordConfirm;
    const user = {
        name: name, 
        email: email, 
        password: password
    };
    if(body.password === passwordConfirm){
        try {
            await User.create(user);
            res.status(200).json({
                message: "Register New User",
                data: {
                    name: name,
                    email: email
                }
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    } else {
        res.status(400).json({
            message: "Password & password confirmation contain different values."
        })
    }
    
}

// Login
const loginUser = async (req,res) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    // Check if the user exists
    const user = await User.findOne({
        where: {
            email: email,
        }
    });

    // If user exists, send JWT as response, else error
    if(user && bcrypt.compareSync(password, user.password)){
        // Admin
        if(email === "aurellia_christie@yahoo.com"){
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                role: "admin"
            },
                process.env.TOKEN
            )
            res.status(200).json({ 
                message: "Logged In.",
                token: token
             });
        } else {
        // User
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                role: "user"
            },
                process.env.TOKEN
            )
            res.status(200).json({ 
                message: "Logged In.",
                token: token
             });
        }       
    }else{
        res.status(401).send("Email or password is incorrect.");
    }
} 

const allUsers = async (req,res) => {
    if(req.user.role === "admin"){
        try {
            const users = await User.findAll({
                attributes: ["id", "name", "email"]
            });
            res.status(200).json({
                message: "All Users",
                data: users
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }   
}

const userProfile = async (req,res) => {
    const userId = Number(req.params.userId);
    if(req.user.id === userId){
        try {
            const profile = await User.findOne({
                where: {
                    id: userId
                },
                attributes: ["id", "name", "email"]
            });
            res.status(200).json({
                message: "User Profile",
                data: profile
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const editUserProfile = async (req,res) => {
    const userId = Number(req.params.userId);
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const profile = {
        name: name, 
        email: email, 
    };
    if(req.user.id === userId){
        try {
            await User.update(profile, {
                where: {
                    id: userId
                }
            });
            res.status(200).json({
                message: "Update User Profile",
                data: {
                    name: name,
                    email: email
                }
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const deleteUser = async (req,res) => {
    const userId = Number(req.params.userId); 
    if(req.user.id === userId || req.user.role === "admin"){
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            res.status(200).send({
                message: `Delete User.`
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else{
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const addFavoriteTrack = async (req,res) => {
    const body = req.body;
    const title = body.title;
    const cover = body.cover;
    const artist = body.artist;
    const preview = body.preview;
    const userId = Number(req.params.userId);
    const track = {
        title: title,
        cover: cover,
        artist: artist,
        preview: preview,
        user_id: userId
    };
    
    if(req.user.id === userId){
        try {
            await Favorite_Track.create(track);
            res.status(200).json({
                message: "Add Favorite Track",
                data: track
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const favoriteTracks = async (req,res) => {
    const userId = Number(req.params.userId);
    if(req.user.id === userId){
        try {
            const tracks = await Favorite_Track.findAll({
                where: {
                    user_id: userId
                },
                attributes: ['id','title', 'cover', 'artist', 'preview', "user_id"]
            });
            res.status(200).json({
                message: "Favorite Tracks",
                data: tracks
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else{
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const deleteFavoriteTrack = async (req,res) => {
    const userId = Number(req.params.userId);
    const trackId = Number(req.params.trackId); 
    if(req.user.id === userId){
        try {
            await Favorite_Track.destroy({
                where: {
                    id: trackId,
                    user_id: userId
                }
            });
            res.status(200).send({
                message: `Remove Favorite Track.`
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const addFollowedArtist = async (req,res) => {
    const body = req.body;
    const name = body.name;
    const picture = body.picture;
    const userId = Number(req.params.userId);
    const artist = {
        name: name,
        picture: picture,
        user_id: userId
    };
    if(req.user.id === userId){
        try {
            await Followed_Artist.create(artist);
            res.status(200).json({
                message: "Add Followed Artist",
                data: artist
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const followedArtists = async (req,res) => {
    const userId = Number(req.params.userId);
    if(req.user.id === userId){
        try {
            const artists = await Followed_Artist.findAll({
                where: {
                    "user_id": userId
                },
                attributes: ['id', 'name', 'picture', "user_id"]
            });
            res.status(200).json({
                message: "Followed Artists",
                data: artists
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    } else {
        res.status(403).json({
            message: "Forbidden User."
        })
    }
}

const deleteFollowedArtist = async (req,res) => {
    const userId = Number(req.params.userId);
    const artistId = req.params.artistId; 
    if(req.user.id === userId){
        try {
            await Followed_Artist.destroy({
                where: {
                    id: artistId,
                    user_id: userId
                }
            });
            res.status(200).send({
                message: "Remove Followed Artist."
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
}

module.exports = {
    allUsers,
    userProfile,
    registerUser,
    loginUser,
    editUserProfile,
    deleteUser,
    addFavoriteTrack,
    favoriteTracks,
    deleteFavoriteTrack,
    addFollowedArtist,
    followedArtists,
    deleteFollowedArtist
}
