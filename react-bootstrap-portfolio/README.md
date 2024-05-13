# Reactを使って簡単なポートフォリオを作成する

※Youtubeのハンズオンの動画を参考に作成。引用URL  
（Youtube：https://www.youtube.com/watch?v=_TPaTndgBfc）  
 (GitHub：https://github.com/Shin-sibainu/react-portfolio-bootstrap5/tree/main)  

## 流れ
- Reactひな形の作成  
- 必要なもの以外を削除  
- 作成  

## Reactひな形の作成
作成したいフォルダで`npx create-react-app 'フォルダ名'`をターミナルで実行すると作成される  
作成されたフォルダ内に移動して、ターミナルで`npm start`を実行するとデフォルトで作成されていたページが表示される。

## 必要なフォルダ以外を削除
必要なフォルダやファイル以外を削除して、それに伴ったimportやコードを削除する

## 作成
環境構築ができたらポートフォリオ作成を始める

### ファイルの説明
- App.js  
HTMLの構成の大枠をここで作成し、returnで表示される感じかな  
- App.css  
App.jsに対するCSS  
- components フォルダ  
これは任意で作成したもので、App.jsのHTMLの構成要素をこのフォルダ内に作成していく感じかな。  
構成要素はもっと複雑に構成される場合は、フォルダを新しく作成してコンポーネントを分けるみたい。  
作成したコンポーネントは、App.jsの方でインポートして使用する。

### ルーティング(Router)
ルーティングするのが楽になる感じ。  
指定したURLに応じてコンポーネントが変わるようにする  
`react-router-dom`をimportして使用する`import {BrowserRouter as Router , Route, Routes} from 'react-router-dom`  
App.jsのreturnの中のHTML要素を<Router>で囲んで、<Routes>は切り分けるコンポーネントをまとめる感じで、<Route>は一つのパスとコンポーネントの紐づけって感じかな。  
<Link>は、リンクを指定して移動できる感じかな。

### bootstrap
Reactでbootstrapを使用する場合はnpmでインストールして、importしないといけないみたい。  
classnameを指定して、すでに作成されているCSSをそのまま適用できるって感じかな？  
[stert bootstrap](https://startbootstrap.com/)っていうサイトでbootstrapの使用例とかが見れる  
