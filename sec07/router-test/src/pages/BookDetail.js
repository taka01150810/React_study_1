import { useParams } from 'react-router-dom'
import { getBook } from '../functions/book'

const BookDetail = () => {
  // URLのパラメータを取得
  const params = useParams()
  console.log(params)

  // 文字列->数値(10進数)に変換
  const book = getBook(parseInt(params.id, 10))

  return (<>
    id: { book.id } <br />
    title: {book.title }
  </>)
}


export default BookDetail