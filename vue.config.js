module.exports = {
	// pages: {
	//     index: {
	//         entry: 'packages/main.js',
	//         // template: 'public/index.html',
	//         // 在 dist/index.html 的输出
	//         filename: 'index.html',
	//         // 当使用 title 选项时，
	//         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	//         title: 'Index Page',
	//         // 在这个页面中包含的块，默认情况下会包含
	//         // 提取出来的通用 chunk 和 vendor chunk。
	//         chunks: ['chunk-vendors', 'chunk-common', 'index']
	//     }
	// }

	//如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/vdeq/，则设置 publicPath 为 /vdeq/
	publicPath: './',
	outputDir: './release',
}