const express = require("express");

const app = express(); // app - web-serwer вызов

app.get("/", (request,response) =>  {
    response.send("<h2>Home page</>")
});

app.get("/contacts", (request,response) => {
    console.log(request.url);
    console.log(request.method);
    response.send("<h2>Contacts page</>")
})

app.listen(3000, ()=> console.log("Server running")); // запускаем
