import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

//기본 문서 형식 지정
// 서버사이드에서 단 1회만 로드
// SPA에서 변결할 수 없는 부분
//공용 리소스 선언. (ex. bootstrap)
//Head 안에 title은 각 페이지에서 선언해서 사용하길 권장함.
//클라이언트단의 첫 진입정 -> _app.js
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
