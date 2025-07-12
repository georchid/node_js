const express = require("express");

const app = express();

// для перехода к следующему обработчику, необходимо указать третий параметр next
const firstHandler = (req, res, next) => {
    console.log("First handler");
    next()
};
const secondHandler = (req, res) => {
    console.log('Second handler');
    res.send("Response from express");
};

app.get("/", firstHandler, secondHandler);

app.listen(5000, () => console.log("Server was started on port 5000"));
