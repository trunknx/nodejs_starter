/*
 * Copyright (c) 2019. All right reserved
 * Last modified: 3/27/19 11:03 PM
 * Author: TrungNguyen
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))