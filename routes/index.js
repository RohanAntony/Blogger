var express = require('express');
var router = express.Router();
var Blog = require('../models/Blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new',function(req,res){
  res.render('create');
})

router.post('/create',function(req,res){
  var newBlog = new Blog({
    title:req.body.title,
    content:req.body.content,
    date:(new Date()).toLocaleString()
  })
  newBlog.save(function(err,doc){
    if(err){
      res.send({
        status:'error',
        data:err
      })
    }else{
      res.send({
        status:'success',
        data:doc
      });
    }
  });
})

router.get('/all',function(req,res){
  Blog.find({},function(err,docs){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      res.send(docs);
    }
  });
})

router.get('/edit/:id',function(req,res){
  Blog.findById(req.params.id,function(err,doc){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      res.send(doc);
    }
  })
})

router.post('/update',function(req,res){
  console.log('Recieved request to update document with id as '+req.body.id);
  res.send('Recieved request to update document with id as '+req.body.id);
})

router.get('/delete/:id',function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err,doc){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      res.send(doc);
    }
  })
})

module.exports = router;
