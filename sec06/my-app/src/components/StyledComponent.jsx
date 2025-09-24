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

const BaseTitle = styled.h1`
  color: blue;
`

// styled(継承したい変数を指定)
const Title = styled(BaseTitle)`
  background-color: lightgray;
`

export default StyledComponent