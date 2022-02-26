import express from 'express';
import bodyParser from 'body-parser';
// import pageRoutes from './routes/pages.js';
const router = express.Router();
import path from 'path';

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use('/', router);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
    console.log(__dirname);
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/about', (req, res) => {
    res.render('./about.html')
})


app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));