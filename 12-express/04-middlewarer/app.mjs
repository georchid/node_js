import express from "express";
import morgan from "morgan";

const app = express();

// log info about request
app.use(morgan("tiny"));
// connverts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({extended: true}));

app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(5000, () => console.log("server is listening at port 5000"));