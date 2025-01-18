const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	const headers = {
		'Content-Type': 'application/x-www-form-urlencoded;',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	}
	app.use(
		'/Api',
		createProxyMiddleware({
			target: 'https://www.googleapis.com/books/v1/volumes',
			changeOrigin: true,
			secure: false,
			headers: headers,
		})
	)
}
