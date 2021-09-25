import Document, { Html, Main, Head, NextScript } from 'next/document'
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
