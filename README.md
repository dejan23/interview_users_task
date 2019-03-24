# Interview Users Task

Create /users endpoint to show all users from db

## Installation


```nodejs
npm i
```

## Usage

```nodejs
npm run seeder #to added 20 new users to database
npm run start # to start the server
npm run dev # to start the server with nodemon 
```

## Notes
Go to localhost/users to fetch all users

Available query strings: 
```
* ?page=      #default is 1
* ?limit=     #default is 10
* ?search=    #search by typing email address or name
* ?sort=      #sort by 'email' or 'name'
```