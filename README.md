# UwiUML（インスパイアPlantUML）

## 間違ってもいいので一回作ってみるよ

# 命名規則
開発用のGIT UWS_プロジェクト名
開発用のC9環境 UWS_プロジェクト名

## PHPのプレビュー環境
bushで下記を打つ
> php -S localhost:8080  

https://d14b57273628421ea7459448de61d3c0.vfs.cloud9.us-east-1.amazonaws.com/hello.php

※rootはコマンド打った時の場所がルートになるので適当な場所に移動してから実行する
フルパスは下記になるので注意
https://d14b57273628421ea7459448de61d3c0.vfs.cloud9.us-east-1.amazonaws.com/hello.php

C9のBuilt inはどこがルートかわからなかったので断念

## Gitの設定
### gitignoreの設定
下記のコマンドを実行する※商用にはこのファイルもアップしないこと
> echo "/node_modules " >> .gitignore


## Gulpの準備（=タスクランナー）
### 主要パッケージ※仔細はpacage.jsonを確認
1. Babel
2. Gulp watchの設定済み
*  Gulpのパスマッチ―ング  
https://motemen.hatenablog.com/entry/2014/07/15/minimatch-cheat-sheet
3. WebpackでBundle.jsに書出し(requierは勝手に読み込まれる)  
gulpコマンドを打てばWebpackまで実行します

## Semantic UIの（＝CSSフレームワーク）インストール
下記参照
1. node cache clean
1. Project直下のnode_modulesを全削除する  
https://semantic-ui.com/introduction/getting-started.html
1. npm install
1. npm install semantic-ui --save  
semanticのBuild環境はPackageからのインストールだともろもろ設定できないのでもう一回やるPackageに記載のsemanticは利用しないのでなくてもいい
1. 途中で選択肢でるのdefaultExpressを選択
1. Semanticのリソースファイルの置き場所を./src/lib/semanticに指定
1. 出力先を./src/node_modules/semanticに指定  
CSSなんかもここに書き出されるので変えたい場合はsemantic.jsonを使う
PJ開始した後はやらないこと
1. cd .src/lib/semantic/
1. gulp build

## 追加CSSの設置
自分でLESSを記述してCSSを追加する場合
> src/style/less/*less
にファイル記述していく
動きは下記
1. lessをコンパイル
1. semantic-uiのファイルをマージ
1. テーマファイルのパスを通すように置換
1. 最後にclient/common/css/にbundle.cssを配置して終わり  
※注意アイコン利用したい場合はアイコンも公開する事  
  実際はCDNにアップするので商用のファイルも作成する必要がある

## codemirror(テキスト編集ライブラリ)
1. ライブラリは下記を使う
1. option  
http://shiroit.blog.fc2.com/blog-entry-30.html
1. optionのonChange に関数設定して描画関数に値を渡す

1. シンタックスハイライトについて
定義ファイルを読み込まないと駄目なので注意   
https://tmg0525.hatenadiary.jp/entry/2018/04/15/223000
1. cssだけbundle化したがシンタックスはマージできなかったので個別に読み込み  
この辺どうにかできないのか 
いったん保留

## SVGライブラリ
> http://svgjs.com/getting-started/

## localstorageライブラリ


## node の実行環境の構築
# 
gulp



