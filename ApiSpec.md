# API Spec #  
## Authentication and authorization ##  
Use jwt-auth for node js.  
``` npm install jsonwebtoken```  

Request :  
- Header : 
    + token : "secret api"  
  
## Endpoint ##  
 
|Endpoint|Method|Usage|
|:--:|:--:|:---|
|create new acc|POST|```/user```|
|Get All Acc|GET|```/user```|
|Delete acc|DELETE|```/user/{id}```|
|Get top track|GET|```/top/track```|
|Get top album|GET|```/top/album```|
|Get top artist|GET|```/top/artist```|
|Get top genre|GET|```/top/genre```|
|Get top playlist|GET|```/top/playlist```|
|Search by params|GET|```/search/{params}```|  

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
    "message" : "get list top music",
    "data" : {
        "id": "integer, primary key",  
        "name": "string",  
        "password": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```  
### Get top Artist ###  
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
### Get top Album ###  
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
### Get top genre ###  
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
### Get top Playlist ###  
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
### Get by params ###  
Request :  
- Method : GET  
- Endpoint : ```/search/{params}```  
- Header :  
    + Content-Type: json  
- Query Param :  
    + track: string,  
    + artist: string,  
    + album: string
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
## Code Response ##  
|Status code|Describe|
|:---|:---|
|1xx|Informational response|
|2xx|Success|
|3xx|Redirection|
|4xx|Client error|
|5xx|Server error|