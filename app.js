const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const path = require("path");
const morgan = require("morgan");

const port = process.env.PORT || 3000
const app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);

app.set('views','./src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
  res.render('index',
   {
     nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}], 
     title:'Library'
    });
});

app.listen(port, ()=> {
  debug("listening at port " + chalk.green(port));
});
