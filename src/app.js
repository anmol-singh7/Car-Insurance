
const dotenv = require("dotenv")
dotenv.config({ path: ".env" });
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
// const { createProxyMiddleware } = require('http-proxy-middleware');
require("./db/connection");
console.log(process.env.PORT)
PORT = process.env.PORT || 3000;

const ARS = require("./routers/ARS");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: "50mb" }));

app.use(express.json({ limit: '50mb' }));

// Add middleware to set the 'Access-Control-Allow-Origin' header
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use('/api',ARS);

app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
});
