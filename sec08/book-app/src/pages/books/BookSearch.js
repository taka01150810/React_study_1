import { useRef, useState } from 'react'
import {
  Container,
  Fab,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'

// 親からbooksとsetBooksを引数として受け取る
const BookSearch = ({ books, setBooks }) => {
  const keyword = useRef('')
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()

  const search = async (keyword, e) => {
    e.preventDefault()
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
    const params = { q: `intitle:${keyword.current.value}`, maxResults: 40 }
    const queryParams = new URLSearchParams(params)

    const response = await fetch(baseUrl + queryParams).then(response =>
      response.json()
    )
    console.log(response.items)

    const newList = response.items.map(book => {
      const title = book.volumeInfo.title
      const img = book.volumeInfo.imageLinks
      const description = book.volumeInfo.description
      return {
        title: title ? title : '',
        image: img ? img.thumbnail : '',
        description: description ? description.slice(0, 40) : ''
      }
    })
    setSearchResult(newList)
  }

  const addBook = card => {
    console.log("card", card)

    // booksがあれば最新のid + 1, なければ1
    const newId = books.length !== 0 ? books.slice(-1)[0].id + 1 : 1
    console.log(newId)
    // id, title, description, imageの他に、読んだ日、メモも追加 
    const newBook = {
      id: newId,
      title: card.title,
      description: card.description,
      image: card.image,
      readDate: '',
      memo: ''
    } 
    setBooks([
      ...books,
      newBook
    ])
    // 更新後にリダイレクト
    navigate(`/edit/${newId}`)
  }

  return (
    <>
      <Container component="section" maxWidth="xl">
        <Fab
          size="medium"
          component={Link}
          to={'/'}
          sx={{ mt: 1, ml: 1 }}
        >
          <ArrowBackIcon />
        </Fab>
      </Container>
      <Container component="section" maxWidth="lg">
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            本を検索
          </Typography>
          {/* 検索ボタン */}
          <Box
            component="form"
            onSubmit={e => search(keyword, e)}
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              label="book search"
              name="search"
              inputRef={keyword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my: 2 }}
            >
              検索する
            </Button>
          </Box>
        </Box>
      </Container>
      <Container component="section" maxWidth="lg">
        <Grid container spacing={4}>
          { searchResult.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Card sx={{ height: '100%'}}>
                <Grid container>
                  <Grid item sm={4}>
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      />
                  </Grid>
                  <Grid item sm={8}>
                    <CardContent>
                      <Typography sx={{ fontSize: '16px'}}>
                        { card.title}
                      </Typography>
                      <Typography sx={{ fontSize:'14px', mb: 1.5 }}
                      color="text.secondary">
                        { card.description }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Fab color="primary" onClick={()=> addBook(card)}>
                        <AddIcon />
                      </Fab>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default BookSearch
