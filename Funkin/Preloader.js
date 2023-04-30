const path = require('path');
const url = require('url');
const rpc = require('discord-rpc');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const fastify = require("fastify")({
  logger: false
});

let Sequelize = require('sequelize');
var express = require('express');
var app = express();
var keyGenerator = ['-','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','_','-','+','=','[',']','|','/','~','`','.','<','>',',','_'];
generateKey(15, {
  code: '08398509',
  user: 'RD3000',
  pass: 'YaBoiSwapPercWifi1000',
  texture: 'wet like a moist moose'
});
function generateKey(digits, auth){
  var generatedKey = '';
  var capLow = 0;
  if(auth.code == '08398509' && auth.user == 'RD3000' && auth.pass == 'YaBoiSwapPercWifi1000' && auth.texture == 'wet like a moist moose'){
    for (let i = 0; i <= digits + 1; i++){
      capLow = Math.random() * 100;
      if(capLow > 49){
        generatedKey = generatedKey + keyGenerator[Math.round(Math.random() * keyGenerator.length)].toUpperCase();
      }else{
        generatedKey = generatedKey + keyGenerator[Math.round(Math.random() * keyGenerator.length)];
      }
    }
    console.log('Key Has Been Generated:' + generatedKey);
    return generatedKey;
  }
}

var randomLoadTime = Math.round(Math.random() * (15000 - 1000) + 1000);

app.use(express.json());
app.use(express.static('pages'));
app.use(cookieParser());
app.set('view engine', 'ejs');

var publicDir = path.join(__dirname, './src');
app.use(express.static(publicDir));

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/src/"
});

fastify.register(require("@fastify/formbody"));

fastify.register(require("@fastify/view"), {
  engine: {
    ejs: require("ejs"),
  },
});

app.get('/', function(req, res) {
  res.render(__dirname + '/src/index.ejs', {
    games: [{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""}],
    mods: [],
    friends: [],
    ads: [],
    username:'',
    rax:0,
    loader:randomLoadTime,
    year: new Date().getFullYear()
  });
});
app.get('/explore', function(req, res) {
  res.render(__dirname + '/src/exp.ejs', {
    games: [{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""}],
    mods: [],
    friends: [],
    ads: [],
    username:'',
    rax:0,
    loader:randomLoadTime,
    year: new Date().getFullYear()
  });
});
app.get('/bli', function(req, res) {
  res.render(__dirname + '/src/badlogin.ejs');
});
app.get('/account', function(req, res) {
  res.render(__dirname + '/src/acc.ejs', {
    games: [{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""}],
    mods: [],
    friends: [],
    ads: [],
    username:'',
    rax:0,
    loader:randomLoadTime,
    year: new Date().getFullYear()
  });
});
app.get('/dm', function(req, res) {
  res.render(__dirname + '/src/index2.ejs', {
    games: [{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""},{name:"put game here", desc:"none", img:""}],
    mods: [],
    friends: [],
    ads: [],
    username:'',
    rax:0,
    loader:randomLoadTime,
    year: new Date().getFullYear()
  });
});
app.get('/dashboard', function(req, res) {
  res.render(__dirname + '/src/dash.ejs',{
    username:'User',
    rax:0,
    games:'',
    subscription: 'None',
    year: new Date().getFullYear()
  });
});
app.get('/create', function(req, res) {
  res.render(__dirname + '/src/makePage.ejs', {
    username:'User',
    rax:0,
    myGames:[],
    subscription:'',
    year: new Date().getFullYear(),
    MyGamesRev: []
  });
});
app.get('/img1/logo.png', function(req, res) {
  res.sendFile(__dirname + '/src/img/rag3DLogo.png');
});
app.get('/img2/rax.png', function(req, res) {
  res.sendFile(__dirname + '/src/img/RaxLogo.png');
});
app.get('/img3/logo1.png', function(req, res) {
  res.sendFile(__dirname + '/src/img/R3D.png');
});
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
//my school just blocked repl... they stay doin too much so Rag3D is currently on pause.
