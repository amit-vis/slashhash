const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/datanase');

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './view'); // Corrected line

// extract the style and script from the sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) {
        console.log("Error in listening to the port", err);
    }
    console.log("Successfully listening on port", port);
});
