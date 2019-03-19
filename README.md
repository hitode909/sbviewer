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

## 今後の展望

- サーバーサイドでやるんじゃなくてPWAとして実装してオフラインでも見れるエクスポートしたJSONビューワにする
  - スマホでも動くはず
- [hitode909/sb2md](https://github.com/hitode909/sb2md)が雑すぎるのでなんとかする
  - 公式でscrapbox記法をHTMLに変換してくれるのを出してもらえたら解決する