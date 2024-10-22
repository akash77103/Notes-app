import React,{useState} from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Createnote } from './Components/Createnote'
import { Note } from './Components/Note'

const App = () => {
  const [addItem, setAddItem] = useState([])
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData,note]
    })
    console.log(note)
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
      oldData.filter((currData,indx)=>{
        return indx!==id
      })
    )
  }

  return (
    <div>
      <Header/>
      <Footer/>
      <Createnote passNote={addNote} />
      
        {addItem.map((val,index)=>{
          return (
            <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
          )
          
           
        })}
      
    </div>
  )
}

export default App
