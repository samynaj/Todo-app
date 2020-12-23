const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const items = [];

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    const today = new Date();
    
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    
    var day = today.toLocaleDateString("en-US", options)
    


    res.render('list', {day: day, newListItems: items})
})

app.post('/', (req, res) => {
    const newItem = req.body.newItem;
    items.push(newItem);

    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));