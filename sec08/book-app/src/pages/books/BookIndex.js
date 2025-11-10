import { useNavigate } from 'react-router-dom'
import {
  Container,
  Fab,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

const BookIndex = ({ books }) => {
  const navigate = useNavigate()

  const goToSearch = () => {
    navigate('/search')
  }

  const goToEdit = id => {
    navigate(`/edit/${id}`)
  }

  return (
    <>
      <Container component="section" maxWidth="xl" sx={{ my: 2 }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={goToSearch}
        >
          検索する
        </Button>
      </Container>
      <Container component="section" maxWidth="lg">
        <Grid container spacing={4}>
          {books.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
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
                      <Typography sx={{ fontSize: '16px' }}>
                        タイトル: {card.title}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', mb: 1.5 }}>
                        読んだ日: {card.readDate}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', mb: 1.5 }}>
                        感想: {card.memo}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Fab color="primary" onClick={() => goToEdit(card.id)}>
                        <ModeEditIcon />
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

export default BookIndex
