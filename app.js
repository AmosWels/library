const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const path = require("path");
const morgan = require("morgan");

const port = process.env.PORT || 3000
const app = express();
const bookRouter = require('./src/routes/bookRoutes');

const books = [
  {
    title: 'War and peace',
    genre: 'Historical fiction',
    author: 'Amos welike',
    read: false
  },
  {
    title: 'Les and Mani',
    genre: 'Historical fiction',
    author: 'Mbabazi Charity',
    read: false
  },
  {
    title: 'Gen lee warn dernene',
    genre: 'Historical fiction',
    author: 'Kasumba steven',
    read: false
  }
]

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

bookRouter.route('/')
.get((req, res)=>{
  res.render('books',
  {
     nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}], 
     title:'Library',
     books
    });
})
bookRouter.route('/single')
.get((req, res)=>{
  res.send('hello Single book')
})

app.use('/books',  bookRouter);
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
