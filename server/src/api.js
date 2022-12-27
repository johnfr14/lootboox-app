const path = require('path');
const express = require('express');
const cors = require("cors")

const api = express();

api.use(cors({origin: "https://loot-box-sample.netlify.app/"}))


module.exports = api;