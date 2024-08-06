import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
         {/* 文字エンコーディング */}
         <meta charSet="UTF-8" />
          {/* ビューポート設定 */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* サイト全体の説明 */}
          <meta name="description" content="これはToDoリストのアプリケーションです" />
          {/* キーワード */}
          <meta name="keywords" content="Todo, React, Next.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
