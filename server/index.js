const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require("./Models/Employee")
const bcrypt = require("bcrypt")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Visionsoft")


app.post("/login", (req, res) => {
    const { email, password } = req.body
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (err) {
                        res.json("Password is Incorrect.")
                    }
                    if (response) {
                        res.json("Success")
                    }
                })
            } else {
                res.json("User doesn't exist, Register and try Login again!")
            }
        })
})

app.post('/register', (req, res) => {

    const { name, email, password } = req.body
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ name, email, password: hash })
                .then(employees => res.json(employees))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))

})


app.listen(3001, () => {
    console.log("Server is running")
})