const express = require("express");
const bookRouter = express.Router();

const books = [
    {
      title: 'War and peacej',
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

module.exports = bookRouter