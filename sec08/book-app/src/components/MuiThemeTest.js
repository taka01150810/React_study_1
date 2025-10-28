import { red } from '@mui/material/colors';
// 独自のthemeオブジェクト スタイルを自由に設定変更できる
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button'

const MuiThemeTest = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500]
      }
    }
  })

  return (<>
    <Button  color="primary" variant="contained">デフォルトのテーマ</Button>
    <ThemeProvider theme={theme}>
    {/* containedは背景色を変える。 */}
      <Button color="primary" variant="contained">テーマ変更後</Button>
    </ThemeProvider>

  </>)

}

export default MuiThemeTest