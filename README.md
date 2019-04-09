# Interview Users Task

Create /users endpoint to show all users from db

## Installation


```nodejs
npm i
```

## Usage

```nodejs
npm run seeder #to add 20 new users to database
npm run start  #to start the server
npm run dev    #to start the server with nodemon 
```

## Notes
Go to /users to fetch all users

Available query strings: 
```
* ?page=      #Must be a number, default is 1
* ?limit=     #Must be a number, default is 10
* ?search=    #Must be a string, search by typing email address or name
* ?sort=      #Must be a string, sort by 'email', 'name' or 'email,name'
```
