import express from 'express'
import { MongoClient } from 'mongodb'
import path from 'path'
import devBundle from './devBundle'
import template from './../template'

const app = express()
devBundle.compile(app)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// Rendering templates at the root
app.get('/', (req, res) => {
    res.status(200).send(template())
})

// COnfigure port for Express app to listen on
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

// Connecting Server to MongoDB
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server")
    db.close()
})