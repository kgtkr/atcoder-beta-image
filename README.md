# AtCoder Beta Image

AtCoder Beta版の正常に表示出来ない画像を正常に表示するユーザースクリプトです。

## 使い方

1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)という拡張機能をインストール
2. [ここ](https://github.com/kgtkr/atcoder-beta-image/raw/master/atcoder-beta-image.user.js)をクリックしてインストール

## 正常に表示されるようになるページ例

* https://beta.atcoder.jp/contests/tenka1-2016-quala/tasks/tenka1_2016_qualA_b
* https://beta.atcoder.jp/contests/abc013/tasks/abc013_4
* https://beta.atcoder.jp/contests/agc004/tasks/agc004_a

## 更新パッチ提供者

* [keymoonさん](https://twitter.com/kymn_/status/977379375032107008)

## ビルド

1. [http://www.typescriptlang.org/play/](TypeScript Playground)に`app.js`の内容を貼り付けてES5に変換
2. `atcoder-beta-image.user.js`にコピペ

そのうち自動化する