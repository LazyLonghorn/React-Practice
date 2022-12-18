// SSR 을 위한 Entry 파일 (웹팩)
import React from "react"
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import path from 'path';
import fs from 'fs';

const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
);

const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key))
    .map(key => `<script src="${manifest.files[key]}"></script>`)
    .join('');

function createPage(root) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        <link href="${manifest.files['main.css']}" rel="stylesheet" />
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
            ${root}
        </div>
        <script src="${manifest.files['runtime-main.js']}"></script>
        ${chunks}
        <script src="${manifest.files['main.js']}"></script>
        </body>
        </html>
      `    
}

const app = express();

// SSR 을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
    // 404 가 발생하는 상황에 404 를 뜨지 않고, SSR 을 해준다.
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )

    const root = ReactDOMServer.renderToString(jsx);    // Rendering
    res.send(createPage(root));     // Client 에게 전달
}

const serve = express.static(path.resolve('./build'), {
    index: false    // '/' 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})

// const html = ReactDOMServer.renderToString(
//     <div>
//         Hello Server Side Rendering!
//     </div>
// );

// console.log(html);