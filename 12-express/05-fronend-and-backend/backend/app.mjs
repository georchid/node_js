import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

// enable all CORS requests
app.use(cors());
// log info about request
app.use(morgan("tiny"));
// connverts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// converts form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
    const personData = {
        name: "George",
        isTutor: true,
    };
    console.log(req.body);
    return res.json(personData);
});

app.listen(5000, () => console.log("server is listening at port 5000"));
