// styled-componentsをインポート
import styled from 'styled-components'

const StyledComponent = () => {
  return (<>
    <Wrapper>
      <Title>
        styledComponentのテストです。
      </Title>
    </Wrapper>
  </>)
}

// 変数（頭大文字）でスタイルを定義
// styled.タブ名`CSSの内容`でスタイルを定義
const Wrapper = styled.div`
  border: 1px solid red;
`

const Title = styled.h1`
  color: blue;
`

export default StyledComponent