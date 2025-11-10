import {useState, useEffect} from 'react'

export const usePersist = STORAGE_KEY => {
  const [books, setBooks ] = useState(()=>{
    const save = localStorage.getItem(STORAGE_KEY) 
    const initialValue = JSON.parse(save)
    return initialValue || []
  })
  
  // useEffect(()=>{
  //   if(localStorage.getItem(STORAGE_KEY)){
  //     try{
  //       setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)))
  //     } catch(e){
  //       console.log(e)
  //     }
  //   }
  // }, [])
  
  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
    // eslint-disable-next-line
  }, [books])

  return [books, setBooks]
}