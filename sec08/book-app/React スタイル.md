# MUI sx プロパティ

## 概要
- CSSを上書きすることができる
- `sx={}` の中にオブジェクトで書いていく
- キャメルケースで書く（例: `border-left` → `borderLeft`）
- 略記できるものもある（例: `backgroundColor` → `bgcolor`）

## 参考ドキュメント
- [System Properties](https://mui.com/system/properties/)
- [System Spacing](https://mui.com/system/spacing/)
- [System Sizing](https://mui.com/system/sizing/)
- [System Typography](https://mui.com/system/typography/)
- [System Palette](https://mui.com/system/palette/)
- [Material-UI Color](https://mui.com/material-ui/customization/color/)

## Spacing（余白）
### 基本的な略記法
- `margin` → `m`
- `padding` → `p`
- 方向指定:
  - `top` → `t`
  - `bottom` → `b`
  - `left` → `l`
  - `right` → `r`
  - 左右 → `x`
  - 上下 → `y`

### 使用例
- `marginLeft` → `ml`
- `<Box sx={{ m: 2 }}>` → `margin: 16px`（デフォルトでは 8 が掛け算される）

## サイズ・テキスト・色
- **Sizing**: `width`, `height` など
- **Typography**: 文字の太さ、大きさ、位置、間隔など
- **Palette**: `primary`, `secondary` などのカラーパレット
- **Material Design Color**: マテリアルデザインのカラーパレットも参考に

## Emotionでの記述
- [Style library](https://mui.com/material-ui/guides/styled/)
- [Getting Started / Usage](https://mui.com/system/getting-started/usage/)
- `sx`プロパティと同様の記述が可能

## パフォーマンスに関する注意
- `sx`プロパティは生のCSSと比較すると若干パフォーマンスが落ちる
- 例: 1000コンポーネントで約100ms → 約300ms
- 大規模開発でCSSが描画速度に影響している場合は、Emotionなどへの切り替えも検討する
