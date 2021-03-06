var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
'article-one':{
    title:'Article One By CG',
    heading:'Article one',
    date:'Aug 19 2017',
    content:`  <p>
          Content will be written herekjlblkxb ushlgkjbkjl kjlsgpaw[kdgnoah oiharghkjghuef hoshk;JBe;uf 
          eiwgf ilsfk isjbgfklsugkf; suge fkjgseui fgskjfg iuwkidha h gu
          </p>
          Content will be written here also
          <p>
          Content will be written and here
          </p>
          <p>
          Content will be written here too!!
          </p>`
},
'article-two':{
    title:'Article two by CG',
    heading:'Article two',
    date:'Aug 19 2017',
    content:`     <p>
      Content will be written here
      </p>
      Content will be written here 
also
  `
},
'article-three':{
    title:'Article Three By CG',
    heading:'Article Three',
    date:'Aug 19 2017',
    content:`
      <p>
      Content will be written here too!!
      </p>`
}
};

function createTemplate(data){

var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate=`<html>
  <head>
      <title>
          ${title}
      </title>
    <link href="/ui/style.css" rel="stylesheet" />
  </head>  
  <body>
      <div class="container">
          <div>
              <a href="/" style="text-decoration:none;">Home</a>
          </div>
          <hr/>
          <h3>
              ${heading}
          </h3>
          <div>
             ${date}
          </div>
          <div>
          ${content}
          </div>
      </div>
  </body>
</html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
