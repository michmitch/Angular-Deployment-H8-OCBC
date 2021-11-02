function requireHTTPS(req, res, next){
    if(!req.secure && req.get('x-forwarded-proto') !== 'https'){
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 8080

// app.use(requireHTTPS);
app.use(express.static('./dist/todo-deployment'));
app.get('/*', (req,res) => res.sendFile('index.html', {root: 'dist/todo-deployment/'}));
app.listen(port, () => {
    console.log(`My Angular app is now running http://localhost:${port}`)
})