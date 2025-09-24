// Emotionをインポート
import {css} from '@emotion/react'

// コメント追記の必要あり
/** @jsxImportSource @emotion/react */
const EmotionComponent = () => {
  return (<>
    <h2
      css={css `
        color: red;
      `}
    >Emotionのテスト</h2>
  </>)

}

export default EmotionComponent