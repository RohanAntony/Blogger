var express = require('express');
var router = express.Router();
var Blog = require('../models/Blog');
var File = require('../models/File');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"_"+parseInt(Math.random()*100000)+path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new',function(req,res){
  res.render('create',{
    blog:{
      action:'/create',
      title:'',
      content:'',
      _id:null,
      mode:'Create New Blog'
    }
  });
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
      res.render('create',{
        blog:{
          action:'/update',
          title:doc.title,
          content:doc.content,
          _id:doc._id,
          mode:'Update blog'
        }
      });
    }
  })
})

router.post('/update',function(req,res){
  Blog.findByIdAndUpdate(req.body.id,req.body,function(err,doc){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      res.send(doc);
    }
  })
})

router.get('/delete/:id',function(req,res){
  Blog.findByIdAndRemove(req.params.id,function(err,doc){
    if(err){
      console.log(err);
      res.send(err);
    }else if(!doc){
      res.send({status:'error',data:'No object with given ID found'});
    }else{
      res.send(doc);
    }
  })
})

router.get('/getImage',function(req,res){
  res.render('uploadFile');
})

router.post('/upload',upload.single('fileUploaded'),function(req,res){
  console.log(req.file);
  var file = req.file;
  var newFile = new File({
    filename:file.originalname,
    renamed: file.filename,
    extension:path.extname(file.originalname),
    path:file.path
  })
  newFile.save(function(err,doc){
    if(err){
      console.log('Error uploading file');
      res.send('Error uploading file');
    }else{
      console.log(doc);
      res.send({
        status:'success',
        data:doc.path
      });
    }
  });
})

module.exports = router;
