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



## node の実行環境の構築
# 




