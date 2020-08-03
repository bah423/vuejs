const express = require("express")
const comments = express.Router()
const cors = require("cors")

const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")


comments.use(cors())

// GET ALL COMMENTS
comments.get('/list', (req, res, next) => {

    Comment.findAll({ where: {}, include: []})
        .then(comments => {
            res.json(comments)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

// ADD COMMENT
comments.post('/add', (req, res, next) => {
    if (!req.body.user_id || !req.body.post_id || !req.body.comments) {
        res.status(400)
        res.json({
            error: 'Bad Data'
        })
    } else {
        const commentData = {
            user_id: req.body.user_id,
            post_id: req.body.post_id,
            comments: req.body.comments,
            status: 1
        }

        Comment.create(commentData)
            .then(() => {
                res.send('COMMENT Added!')
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
})


module.exports = comments
