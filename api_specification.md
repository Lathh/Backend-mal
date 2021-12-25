# API Specification

## Authentication and authorization

Use jwt-auth for node js.  
` npm install jsonwebtoken`

Bearer token is needed for some endpoints (check the endpoints specifications).

## Code Response

| Status code | Describe               |
| :---------- | :--------------------- |
| 1xx         | Informational response |
| 2xx         | Success                |
| 3xx         | Redirection            |
| 4xx         | Client error           |
| 5xx         | Server error           |

## Endpoint

|        Endpoint        | Method |                Usage                |    Auth    |
| :--------------------: | :----: | :---------------------------------: | :--------: |
|     Get Top Tracks     |  GET   |            `/tracks/top`            |     No     |
|     Get All Genres     |  GET   |              `/genres`              |     No     |
|  Get Genre's Artists   |  GET   |     `/genres/:genreId/artists`      |     No     |
|     Get Top Albums     |  GET   |            `/albums/top`            |     No     |
|    Get Album by ID     |  GET   |         `/albums/:albumId`          |     No     |
|   Get Album's Tracks   |  GET   |      `/albums/:albumId/tracks`      |     No     |
|    Get Top Artists     |  GET   |           `/artists/top`            |     No     |
|    Get Artist by ID    |  GET   |        `/artists/:artistId`         |     No     |
|  Get Artist's Albums   |  GET   |     `/artists/:artistId/albums`     |     No     |
|  Get Related Artists   |  GET   |    `/artists/:artistId/related`     |     No     |
|   Get All Playlists    |  GET   |            `/playlists`             |     No     |
|   Get Playlist by ID   |  GET   |      `/playlists/:playlistId`       |     No     |
| Get Playlist's Tracks  |  GET   |   `/playlists/:playlistId/tracks`   |     No     |
|     Search Tracks      |  GET   |          `/search/tracks`           |     No     |
|     Search Albums      |  GET   |          `/search/albums`           |     No     |
|     Search Artists     |  GET   |          `/search/artists`          |     No     |
|     Register User      |  POST  |          `/users/register`          |     No     |
|       Login User       |  POST  |           `/users/login`            |     No     |
|     Get All Users      |  GET   |              `/users`               | Only Admin |
|     Get User by ID     |  GET   |          `/users/:userId`           |    Yes     |
|   Edit User Profile    | PATCH  |          `/users/:userId`           |    Yes     |
|      Delete User       | DELETE |          `/users/:userId`           |    Yes     |
|   Add Favorite Track   |  POST  |      `/users/:userId/favorite`      |    Yes     |
|  Get Favorite Tracks   |  GET   |      `/users/:userId/favorite`      |    Yes     |
| Delete Favorite Track  | DELETE | `/users/:userId/favorite/:trackId`  |    Yes     |
|  Add Followed Artist   |  POST  |      `/users/:userId/followed`      |    Yes     |
|  Get Followed Artists  |  GET   |      `/users/:userId/followed`      |    Yes     |
| Delete Followed Artist | DELETE | `/users/:userId/followed/:artistId` |    Yes     |

### Track

#### Get Top Tracks

Request :

- Method: GET
- Endpoint: `/tracks/top`

Response :

```
{
    "message" : "Top Tracks",
    "data" : [{
        "id": "integer",
        "title": "string",
        "title_short": "string",
        "link":"url",
        "duration": "integer",
        "rank": "integer",
        "explicit_lyrics": "boolean","explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "preview": "url",
        "md5_image": "string",
        "position": "integer",
        "artist": "object",
        "album": "object",
        "type": "string"
    }]
}
```

### Genre

#### Get All Genres

Request :

- Method: GET
- Endpoint: `/genres`

Response :

```
{
    "message" : "All Genres",
    "data" : [{
        "id": "integer",
        "name": "string",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "type": "string"
    }]
}
```

#### Get Genres Artists

Request :

- Method: GET
- Endpoint: `/genres/:genreId/artists`

Response :

```
{
    "message" : "Genre Artists",
    "data" : [{
        "id": "integer",
        "name": "string",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "radio": "boolean",
        "tracklist": "url",
        "type": "string"
    }]
}
```

### Album

#### Get Top Albums

Request :

- Method: GET
- Endpoint: `/albums/top`

Response :

```
{
    "message" : "Top Albums",
    "data" : [{
        "id": "integer",
        "title": "string",
        "link": "url",
        "cover": "url",
        "cover_small": "url",
        "cover_medium": "url",
        "cover_big": "url",
        "cover_xl": "url",
        "md5_image": "string",
        "record_type": "string",
        "tracklist": "url",
        "explicit_lyrics": "boolean",
        "position": "integer",
        "artist": "object",
        "type": "string"
        }]

}
```

#### Get Album by ID

Request :

- Method: GET
- Endpoint: `/albums/:albumId`

Response :

```
{
    "message" : "Album by ID",
    "data" : {
        "id": "integer",
        "title": "string",
        "upc": "string",
        "link": "url",
        "share": "url",
        "cover": "url",
        "cover_small": "url",
        "cover_medium": "url",
        "cover_big": "url",
        "cover_xl": "url",
        "md5_image": "string",
        "genre_id": "integer",
        "genres": "object",
        "label": "string",
        "nb_tracks": "integer",
        "duration": "integer",
        "fans": "integer",
        "release_date": "date",
        "record_type": "string",
        "available": "boolean",
        "tracklist": "url",
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "contributors": "object",
        "artist": "object",
        "type": "string",
        "tracks": "object"
    }
}
```

#### Get Album's Tracks

Request :

- Method: GET
- Endpoint: `/albums/:albumId/tracks`

Response :

```
{
    "message" : "Album Tracks",
    "data" : [{
        "id": "integer",
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "string",
        "isrc": "string",
        "link": "url",
        "duration": "integer",
        "track_position": "integer",
        "disk_number": "integer",
        "rank": "integer",
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "preview": "url",
        "md5_image": "string,
        "artist": "object",
        "type": "string"
    }]
}
```

### Artist

#### Get Top Artists

Request :

- Method: GET
- Endpoint: `/artists/top`

Response :

```
{
    "message" : "Top Artists",
    "data" : [{
        "id": "integer",
        "name": "string",
        "link": "url",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "radio": "boolean",
        "tracklist": "url",
        "position": "integer",
        "type": "string"
        }]

}
```

#### Get Artist by ID

Request :

- Method: GET
- Endpoint: `/artists/:artistId`

Response :

```
{
    "message" : "Artist by ID",
    "data" : {
        "id": "integer",
        "name": "string",
        "link": "url",
        "share": "url",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "nb_album": "integer",
        "nb_fan": "integer",
        "radio": "boolean",
        "tracklist": "url",
        "type": "string"
    }
}
```

#### Get Artist Top Tracks

Request :

- Method: GET
- Endpoint: `/artists/:artistId/top`

Response :

```
{
    "message" : "Artist Top Tracks",
    "data" : [{
        "id": "integer",
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "string",
        "link": "url",
        "duration": "integer",
        "rank": "integer",
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "preview": "url",
        "contributors": "object",
        "md5_image": "string",
        "artist": "object",
        "album": "object",
        "type: "string"
    }]
}
```

#### Get Artist's Albums

Request :

- Method: GET
- Endpoint: `/artists/:artistId/albums`

Response :

```
{
    "message" : "Artist Albums",
    "data" : [{
        "id": "integer",
        "title": "string",
        "link": "url",
        "cover": "url",
        "cover_small": "url",
        "cover_medium": "url",
        "cover_big": "url",
        "cover_xl": "url",
        "md5_image": "string",
        "genre_id": "integer",
        "fans": "integer",
        "release_date": "date",
        "record_type": "string",
        "tracklist": "url",
        "explicit_lyrics": "boolean",
        "type": "string"
    }]
}
```

#### Get Related Artists

Request :

- Method: GET
- Endpoint: `/artists/:artistId/related`

Response :

```
{
    "message" : "Artist Related",
    "data" : [{
        "id": "integer",
        "name": "string",
        "link": "url",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "nb_album": "integer",
        "nb_fan": "integer",
        "radio": "boolean",
        "tracklist": "url",
        "type": "string"
    }]
}
```

### Playlist

#### Get All Playlists

Request :

- Method: GET
- Endpoint: `/playlists`

Response :

```
{
    "message" : "All Playlists",
    "data" : [{
        "id": "integer",
        "title": "string",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "tracklist": "url",
        "md5_image": "string",
        "type": "string"
    }]
}
```

#### Get Playlist by ID

Request :

- Method: GET
- Endpoint: `/playlists/:playlistId`

Response :

```
{
    "message" : "Playlist by ID",
    "data": {
        "id": "integer",
        "title": "string",
        "description": "string",
        "share": "url",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "tracklist": "url",
        "md5_image": "string",
        "type": "string"
    }
}
```

#### Get Playlist Tracks

Request :

- Method: GET
- Endpoint: `/playlists/:playlistId/tracks`

Response :

```
{
    "message" : "Playlist Tracks",
    "data" : [{
        "id": "integer",
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "string",
        "link": "url",
        "duration": "integer",
        "rank": "integer",
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "preview": "url",
        "md5_image": "string",
        "artist": "object",
        "album": "object",
        "type": "string"
    }]
}
```

### Search

#### Search Tracks

Request :

- Method : GET
- Endpoint : `/search/tracks?q=${keyword}`

Response :

```
{
    "message" : "Tracks Search Result",
    "data" : [{
        "id": "integer",
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "string",
        "link": "url",
        "duration": "integer",
        "rank": "integer",
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": "integer",
        "explicit_content_cover": "integer",
        "preview": "url",
        "md5_image": "string",
        "artist": "object",
        "album": "object",
        "type": "string"
    }]
}
```

#### Search Albums

Request :

- Method : GET
- Endpoint : `/search/albums?q=${keyword}`

Response :

```
{
    "message" : "Albums Search Result",
    "data" : [{
            "id": "integer",
            "title": "string",
            "link": "url",
            "cover": "url",
            "cover_small": "url",
            "cover_medium": "url",
            "cover_big": "url",
            "cover_xl": "url",
            "md5_image": "string",
            "genre_id": "integer",
            "nb_tracks": "integer",
            "record_type": "string",
            "tracklist": "url",
            "explicit_lyrics": "boolean",
            "artist": "object",
            "type": "string"
        }]
}
```

#### Search Artists

Request :

- Method : GET
- Endpoint : `/search/artists?q=${keyword}`

Response :

```
{
    "message" : "Artists Search Result",
    "data" : [{
        "id": "integer",
        "name": "string",
        "link": "url",
        "picture": "url",
        "picture_small": "url",
        "picture_medium": "url",
        "picture_big": "url",
        "picture_xl": "url",
        "nb_album": "integer",
        "nb_fan": "integer",
        "radio": "boolean",
        "tracklist": "url",
        "type": "string"
    }]
}
```

### User

#### Register User

Request :

- Method : POST
- Endpoint : `users/register`
- Header:
  - Content-Type: application/json
- Body :

```
{
    "name": "string",
    "email": "string, unique",
    "password": "string",
    "passwordConfirm": "string"
}
```

Response :

```
{
    "message" : "Register New User",
    "data" : {
        "name": "string",
        "email": "string"
    }
}
```

#### Login User

Request :

- Method : POST
- Endpoint : `users/login`
- Header:
  - Content-Type: application/json
- Body :

```
{
    "email": "string",
    "password": "string",
}
```

Response :

```
{
    "message" : "Logged In.",
    "token" : "string"
}
```

#### Get All Users

Request :

- Method : GET
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Admin
- Endpoint : `users`

Response :

```
{
    "message" : "All Users",
    "data" : [{
        "id": "integer",
        "name": "string",
        "email": "string"
    }]
}
```

#### Get User by ID

Request :

- Method : GET
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Endpoint : `users/:userId`

Response :

```
{
    "message" : "User Profile",
    "data" : {
        "id": "integer",
        "name": "string",
        "email": "string",
    }
}
```

#### Edit User Profile

Request :

- Method : PATCH
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Header:
  - Content-Type: application/json
- Endpoint : `users/:userId`
- Body :

```
{
    "name": "string",
    "email": "string"
}
```

Response :

```
{
    "message" : "Update User Profile",
    "data" : {
        "name": "string",
        "email": "string",
    }
}
```

#### Delete User

Request :

- Method : DELETE
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID & Admin
- Endpoint : `users/:userId`

Response :

```
{
    "message" : "Delete User."
}
```

#### Add Favorite Tracks

Request :

- Method : POST
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Header:
  - Content-Type: application/json
- Endpoint : `users/:userId/favorite`
- Body :

```
{
    "title": "string",
    "cover": "url",
    "artist": "string",
    "preview": "url"
}
```

Response :

```
{
    "message": "Add Favorite Track",
    "data": {
        "title": "string",
        "cover": "url",
        "artist": "string",
        "preview": "url",
        "user_id": "integer"
    }
}
```

#### Get Favorite Tracks

Request :

- Method : GET
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Endpoint : `users/:userId/favorite`

Response :

```
{
    "message": "Favorite Tracks",
    "data": [{
            "id": "integer",
            "title": "string",
            "cover": "url",
            "artist": "string",
            "preview": "url",
            "user_id": "integer"
        }]
}
```

#### Delete Favorite Track

Request :

- Method : DELETE
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Endpoint : `users/:userId/favorite/:trackId`

Response :

```
{
    "message": "Remove Favorite Track."
}
```

#### Add Followed Artist

Request :

- Method : POST
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Header:
  - Content-Type: application/json
- Endpoint : `users/:userId/followed`
- Body :

```
{
    "name": "string",
    "picture": "url"
}
```

Response :

```
{
    "message": "Add Followed Artist",
    "data": {
        "name": "string",
        "picture": "url",
        "user_id": "integer"
    }
}
```

#### Get Followed Artists

Request :

- Method : GET
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Endpoint : `users/:userId/followed`

Response :

```
{
    "message": "Followed Artist",
    "data": [{
            "id": "integer",
            "name": "string",
            "picture": "url",
            "user_id": "integer"
        }]
}
```

#### Delete Favorite Track

Request :

- Method : DELETE
- Auth:
  - Type: Bearer Token
  - Token: "Your secret API token"
- Authorized User: Specified user ID
- Endpoint : `users/:userId/followed/:artistId`

Response :

```
{
    "message": "Remove Followed Artist."
}
```
