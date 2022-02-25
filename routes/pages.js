import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Home Page !!')
    console.log("Home page");
})

router.get('/about', (req, res) => {
    res.status(200).send('About page!!')
    console.log("About Page");
})

router.get('/contact', (req, res) => {
    res.status(200).send('Contact page!!')
})

router.get('/404', (req, res) => {
    res.status(404).send('Error !!')
})

export default router;