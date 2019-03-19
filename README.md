# sbviewer

- ScrapboxからエクスポートしたJSONをlocalhostで見るためのアプリケーション
- 海外旅行のしおりをScrapboxで作ったはいいが旅先でオンラインになれるかはわからない、というときに便利

## 使い方

- Scrapboxにて Settings→Export Pages からJSONをダウンロード
- PAGES_JSONを指定して起動

```
% npm install
% PAGES_JSON=~/Downloads/hitode909.json npm run dev
```

[![Image from Gyazo](https://i.gyazo.com/7bfd1efbe7363b0c335143d354a9ab53.png)](https://gyazo.com/7bfd1efbe7363b0c335143d354a9ab53)

[![Image from Gyazo](https://i.gyazo.com/f7302e695d91398367754b3de5354ea6.png)](https://gyazo.com/f7302e695d91398367754b3de5354ea6)

## 今後の展望

- サーバーサイドでやるんじゃなくてPWAとして実装してオフラインでも見れるエクスポートしたJSONビューワにする
  - スマホでも動くはず
- [hitode909/sb2md](https://github.com/hitode909/sb2md)が雑すぎるのでなんとかする
  - 公式でscrapbox記法をHTMLに変換してくれるのを出してもらえたら解決する