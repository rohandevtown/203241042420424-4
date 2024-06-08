const express = require("express");
const {users} = require("./data/users.json");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})


/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: None
 */
app.get("/users", (req, res)=>{
    res.status(200).json({
        success: true,
        data: users,
    })
})


/**
 * Route: /users/:id
 * Method: GET
 * Description: Get user by their id
 * Access: Public
 * Parameters: ID
 */
app.get('/users/:id', (req, res)=>{
    const {id} = req.params;

    const user = users.find((each)=> each.id===id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }
    return res.status(200).json({
        success: true,
        data: user
    })
})

/**
 * Route: /users
 * Method: POST
 * Description: Craete/Add a new user
 * Access: Public
 * Parameters: None
 */
app.post("/users", (req, res)=>{
    const {id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

    const user = users.find((each)=> each.id === id);

    if(user){
        return res.status(404).json({
            success: false,
            message: "User exist with the given ID"
        })
    }
    
    users.push({id, name, surname, email, subscriptionType, subscriptionDate })

    return res.status(201).json({
        success: true,
        data: users,
    })
})



/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by their ID
 * Access: Public
 * Parameters: ID
 */
app.put("/users/:id", (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

      const user = users.find((each)=> each.id === id);

       if(!user){
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }

    const updatedUser = users.map((each)=>{
        if(each.id===id){
            return {
                ...each,
                ...data
            }
        }
        return each;
    })

    return res.status(200).json({
        success: true,
        data: updatedUser
    })

})


app.all("*", (req, res)=>{
    res.status(404).json({
        message: "This route does not exits!"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`)
})