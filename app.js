//Express フレームワークを読み込む
let express = require('express');
let app = express();

// ビューエンジンをejsにセットする
app.set('view engine', 'ejs');

// pathモジュールをインポートする
const path = require('path');
// viewsディレクトリの名称変更
app.set('views', path.join(__dirname, 'views'));

// indexのテンプレートを呼び出す
app.get('/', function(req, res) {
  res.render('pages/index');
});

// aboutページのテンプレートを呼び出す
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// servicesページのテンプレートを呼び出す
app.get('/services', function(req, res) {
  res.render('pages/services');
});

// portfolioページのテンプレートを呼び出す
app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

// contactページのテンプレートを呼び出す
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// ポート8082をオープンにする
app.listen(8082);