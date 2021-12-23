// Import module
const bcrypt = require("bcrypt");

// Import models
const { User } = require("../models");
const { Favorite_Track } = require("../models");
const { Followed_Artist } = require("../models");

const allUsers = async (req,res) => {
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
}

// Have to add authorization
const userProfile = async (req,res) => {
    try {
        const userId = req.params.userId;
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
}

// Add authentication (check whether the email is available) & validation of the password - email requirements
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
        res.status(404).json({
            message: error.message
        });
    }
}

// Login

// Add authorization
const editUserProfile = async (req,res) => {
    const userId = req.params.userId;
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const profile = {
        name: name, 
        email: email, 
    };
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
}

// Add authorization
const deleteUser = async (req,res) => {
    const userId = req.params.userId; 
    try {
        await User.destroy({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: `User with ID ${userId} has been deleted.`
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Add authorization
const addFavoriteTrack = async (req,res) => {
    const body = req.body;
    const title = body.title;
    const cover = body.cover;
    const artist = body.artist;
    const preview = body.preview;
    const userId = req.params.userId;
    const track = {
        title: title,
        cover: cover,
        artist: artist,
        preview: preview,
        user_id: userId
    };
    try {
        await Favorite_Track.create(track);
        res.status(200).json({
            message: "Add Favorite Track",
            data: {
                track
            }
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Add authorization
const favoriteTracks = async (req,res) => {
    const userId = req.params.userId;
    try {
        const tracks = await Favorite_Track.findAll({
            where: {
                user_id: userId
            },
            attributes: ['title', 'cover', 'artist', 'preview']
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
}

// Add authorization
const deleteFavoriteTrack = async (req,res) => {
    const userId = req.params.userId;
    const trackId = req.params.trackId; 
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
}

// Add authorization
const addFollowedArtist = async (req,res) => {
    const body = req.body;
    const name = body.name;
    const picture = body.picture;
    const userId = req.params.userId;
    const artist = {
        name: name,
        picture: picture,
        user_id: userId
    };
    try {
        await Followed_Artist.create(artist);
        res.status(200).json({
            message: "Add Followed Artist",
            data: {
                artist
            }
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

// Add authorization
const followedArtists = async (req,res) => {
    const userId = req.params.userId;
    try {
        const artists = await Followed_Artist.findAll({
            where: {
                "user_id": userId
            },
            attributes: ['id', 'name', 'picture']
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
}

// Add authorization
const deleteFollowedArtist = async (req,res) => {
    const userId = req.params.userId;
    const artistId = req.params.artistId; 
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

module.exports = {
    allUsers,
    userProfile,
    registerUser,
    editUserProfile,
    deleteUser,
    addFavoriteTrack,
    favoriteTracks,
    deleteFavoriteTrack,
    addFollowedArtist,
    followedArtists,
    deleteFollowedArtist
}
