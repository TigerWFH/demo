const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
let express = require('express');
var app = express();

var crypto = require('crypto');
var querystring = require("querystring");
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

/*
	云API的密钥
*/
const secretId = "AKIDhJk053PmVEoDarxRZXO8g3GJAqKeoiU8";
const secretKey = "b1Z4QaZSAgqoy64qV2NXVHyTp01sY3NW";
/*
	生成腾讯云上传签名
*/
app.get('/v1/signature', (req, res, next) => {
	var currentTime = parseInt((new Date()).getTime() / 1000);
	var expiredTime = currentTime + 86400;//签名有效期，1天
	var argList = {
		secretId: secretId,
		currentTimeStamp: currentTime,
		expireTime: expiredTime,
		random: Math.round(Math.random() * Math.pow(2, 32))
	};
	var original = querystring.stringify(argList);//序列化成查询字符串格式
	var originalBuffer = new Buffer(original, "utf8");
	var hmac = crypto.createHmac("sha1", secretKey);
	var hmacBuffer = hmac.update(originalBuffer).digest();
	var signature = Buffer.concat([hmacBuffer, originalBuffer]).toString("base64");
	res.json({ signature });
});

app.post('/v1/upload', multer({ dest: 'upload/' }).array('video', 2), (req, res, next) => {
	console.log('req.body--->', req.body);
	console.log('req.file--->', req.file);
});
app.post('/v1/signon', (req, res, next) => {
	res.status(200).json({
		name: "signon",
		age: 12
	});
});
app.all('*', (req, res, next) => {
	console.log('***I am a APIServer***', req.path);
	var filePath = `./mock/${req.path}/index.json`;
	if (fs.existsSync(filePath)) {
		let data = fs.readFileSync(filePath, { encoding: 'utf8' });
		console.log('data-->', JSON.parse(data));
		res.json(JSON.parse(data));
	}
	else {
		next();
	}
});

// app.use(express.static('./dist'));
// app.get('/', (req, res) => {
// 	res.sendfile('./dist/index.html');
// });

// app.post('/v1/signon', (req, res) => {
// 	res.json({
// 		msgCode: 0,
// 		msgText: 'success',
// 		login: true
// 	});
// });
app.use(function (req, res, next) {
	var err = new Error('NOT FOUND');
	err.status = 404;
	next(err);
})
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.json(err);
	});
}
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json(err);
});
app.listen(9000, function () {
	console.log('App listening on port 9000!');
});