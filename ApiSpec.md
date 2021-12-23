# API Spec #  
## Authentication and authorization ##  
Use jwt-auth for node js.  
``` npm install jsonwebtoken```  

Request :  
- Header : 
    + token : "secret api"  

## Code Response ##  
|Status code|Describe|
|:---|:---|
|1xx|Informational response|
|2xx|Success|
|3xx|Redirection|
|4xx|Client error|
|5xx|Server error|
  
## Endpoint ##  
 
|Endpoint|Method|Usage|
|:--:|:--:|:---|
|create new acc|POST|```/user```|
|Get All Acc|GET|```/user```|
|Delete acc|DELETE|```/user/:userId```|
|Get top tracks|GET|```/tracks/top```|  
|Get all genre|GET|```/genres```|
|Get genre artist|GET|```/genres/:genreId/top```|
|Get top album|GET|```/albums/top```|
|Get albums by id|GET|```/albums/:albumId```|
|Get album tracks|GET|```/albums/:albumId/tracks```|
|Get top artist|GET|```/artists/top```|
|Get artist by id|GET|```/artists/:artistId```|
|Get artist albums|GET|```/artists/:artistId/albums```|
|Get artist related|GET|```/artists/:artistId/related```|
|Get all playlist|GET|```/playlist```|
|Get playlist by id|GET|```/playlist/:playlistId```|
|Get playlist tracks|GET|```/playlist/:playlistId/tracks```|
|Search tracks |GET|```/search/tracks```|  
|Search albums |GET|```/search/albums```|  
|Search artists |GET|```/search/artists```|  

### Create account ###  
- Body :  
```
{
    "id": "integer, primary key",  
    "name": "string",  
    "password": "string"
}
```  
Response :  
```
{
    "message" : "string",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "password": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Get all acc ###  
Response :  
```
{
    "message" : "string",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "password": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```  
### Delete acc by id ###   
Response :  
```
{
    "message" : "Account succsess deleted"
}
```  
### Get top track ###  
Response :  
```
{
    "message" : "Top Tracks",
    "data" : {
        "id": "integer, primary key",  
        "title": "string",
        "title_short": "string",  
        "link":"",  
        "duration": "integer",  
        "rank": "integer",  
        "explicit_lyrics": "boolean",  
    }
}
```  
### Get All Genres ###  
Response :  
```
{
    "message" : "All Genres",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",   
        "picture": "https://api.deezer.com/genre/0/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/misc//56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/misc//500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc//1000x1000-000000-80-0-0.jpg",
        "type": "genre"
    }
}
```  
### Get Genres Artists ###  
Response :  
```
{
    "message" : "Genre Artists",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "picture": "https://api.deezer.com/artist/6982223/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
        "type": "artist"
    }
}
```  
### Get top Album ###  
Response :  
```
{
    "message" : "Top Albums",
    "data" : {
        "id": "integer, primary key",  
        "title": "string",
        "link": "https://www.deezer.com/album/273099082",
        "cover": "https://api.deezer.com/album/273099082/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/bc52ce5bfeeafc28fb1838d0ec969668/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/bc52ce5bfeeafc28fb1838d0ec969668/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/bc52ce5bfeeafc28fb1838d0ec969668/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/bc52ce5bfeeafc28fb1838d0ec969668/1000x1000-000000-80-0-0.jpg",
        "md5_image": "bc52ce5bfeeafc28fb1838d0ec969668",
        "type": "album"
        }
    
}
```  
### Get Album by Id ###  
Response :  
```
{
    "message" : "Album by ID"
}
```  
### Get Album Tracks ###  
Response :  
```
{
    "message" : "Album Tracks",
    "data" : {
        "id": "integer, primary key",  
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "string",
        "duration": "integer",
        "artist": {
                "id": "integer",
                "name": "string",
                "tracklist": "https://api.deezer.com/artist/4606/top?limit=50",
                "type": "artist"
            },
            "type": "track"
    }
}
```  
### Get top Artist ###  
Response :  
```
{
    "message" : "Top Artists",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "link": "https://www.deezer.com/artist/6982223",
        "picture": "https://api.deezer.com/artist/6982223/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/1000x1000-000000-80-0-0.jpg",
        "radio": "boolean",
        "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
        "position": 1,
        "type": "artist"
        }
    
}
```  
### Get Artist by Id ###  
Response :  
```
{
    "message" : "Artists by ID"
}
```  
### Get Artist Top Tracks ###  
Response :  
```
{
    "message" : "Artists Top Tracks",
    "data" : {
        "id": "integer, primary key",  
        "title": "string",
        "title_short": "string",
        "title_version": "",
        "link": "https://www.deezer.com/track/1425844092",
        "duration": "integer",
        "rank": 989040,
        "explicit_lyrics": "boolean",
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 2,
        "preview": "https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-3.mp3"
    }
}
```  
### Get Artist Albums ###  
Response :  
```
{
    "message" : "Artists Albums",
    "data" : {
        "id": "integer, primary key",  
        "title": "string",
        "link": "https://www.deezer.com/album/215962322",
        "cover": "https://api.deezer.com/album/215962322/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "87468622c8e7ac9dce7b541be136aa4c",
        "genre_id": 132,
        "fans": 50610,
        "release_date": "date",
        "record_type": "album",
        "tracklist": "https://api.deezer.com/album/215962322/tracks",
        "explicit_lyrics": true,
        "type": "album"
    }
}
```  
### Get Artist Related ###  
Response :  
```
{
    "message" : "Artists Related",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "link": "https://www.deezer.com/artist/1547598",
        "picture": "https://api.deezer.com/artist/1547598/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ca17f8db374c9725486e24b0b7dc889d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ca17f8db374c9725486e24b0b7dc889d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ca17f8db374c9725486e24b0b7dc889d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ca17f8db374c9725486e24b0b7dc889d/1000x1000-000000-80-0-0.jpg",
        "nb_album": 17,
        "nb_fan": 165945,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/1547598/top?limit=50",
        "type": "artist"

    }
}
```  
### Get All Playlist ###  
Response :  
```
{
    "message" : "All Playlist",
    "data" : {
        "id": "integer, primary key",  
        "title": "string",
        "picture": "https://api.deezer.com/radio/37151/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/235ec47f2b21c3c73e02fce66f56ccc5/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/235ec47f2b21c3c73e02fce66f56ccc5/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/235ec47f2b21c3c73e02fce66f56ccc5/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/235ec47f2b21c3c73e02fce66f56ccc5/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/radio/37151/tracks",
        "md5_image": "235ec47f2b21c3c73e02fce66f56ccc5",
        "type": "radio"
    }
}
```  
### Get Playlist by Id ###  
Response :  
```
{
    "message" : "Playlist by Id"
}
```  
### Get Playlist Tracks ###  
Response :  
```
{
    "message" : "Playlist Tracks",
    "data" : {
        "id": "integer, primary key",  
        "readable": "boolean",
        "title": "string",
        "title_short": "string",
        "title_version": "",
        "link": "https://www.deezer.com/track/1351790372",
        "duration": "integer",
        "rank": 419577,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 2,
        "preview": "https://cdns-preview-3.dzcdn.net/stream/c-39d980d56b1da008b30d67e3529df817-3.mp3",
        "md5_image": "90adcf9e4208da6fbaf600fff50895f6",
        "type": "track"
    }
}
```  
### Search Tracks ###  
Request :  
- Method : GET  
- Endpoint : ```/search/track?=${keyword}```  
Response :  
```
{
    "message" : "Tracks Search Result",
    "data" : {
        "id": "integer, primary key",  
        "name": "string"    
    }
}
```  
### Search Albums ###  
Request :  
- Method : GET  
- Endpoint : ```/search/album?=${keyword}```  
Response :  
```
{
    "message" : "Albums Search Result",
    "data" : {
        "id": "integer, primary key",  
        "name": "string"
    }
}
```    
### Search Artists ###  
Request :  
- Method : GET  
- Endpoint : ```/search/artist?=${keyword}```  
Response :  
```
{
    "message" : "Artists Search Result",
    "data" : {
        "id": "integer, primary key",  
        "name": "string"
    }
}
```  