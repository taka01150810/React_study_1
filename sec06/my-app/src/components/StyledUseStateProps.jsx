import React, { useState } from 'react'
import styled from 'styled-components'

// ${} 内にpropsの設定ができる
const StyledComponent = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${(props) => (props.isRed ? "red" : "green" )};
`

const StyledUseStateProps = () => {
  // useStateで状態管理を行う
  const [isRed, setIsRed] = useState(false)

  return (<>
    {/* propsで渡す値によってスタイルを切り替える */}
    <StyledComponent isRed={isRed}>
      <p>props + useStateのテスト</p>
      <button onClick={() => setIsRed(!isRed)}>色を変える</button>
    </StyledComponent>
  </>)
}

export default StyledUseStateProps