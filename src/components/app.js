import React from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
// import bnote from "../notes"
import CreateArea from "./createarea"

function App(props){
    
    var [notes,setNotes]=React.useState(props.notes)

    async function deleteItem(id){
        const response=await fetch("http://localhost:3001/deletenote",{
            method: "POST",
            header: {
                "content-type": "application/json",
                'Access-Control-Allow-Origin':'http://127.0.0.1:3000'
            },
            body: JSON.stringify({_id: notes[id]._id})
        })
        .then(res=>{
            return res.json()
        })
        console.log(response)

        setNotes((prevNotes)=>(
            prevNotes.filter((note,index)=>{
                return index!==id
            })
        ))
    }
    async function addItem(note){
        
        const response=await fetch("http://localhost:3001/addnote",{
            method: "POST",
            header: {
                "content-type": "application/json",
                'Access-Control-Allow-Origin':'http://127.0.0.1:3000'
            },
            body: JSON.stringify(note)
        })
        .then(res=>{
            return res.json()
        })
        setNotes(prevNotes=>(
            [...prevNotes,response]
        ))
        
        console.log(response,notes)
        // console.log(JSON.stringify(note))
    }
    return <div>
        <Header />
        <CreateArea 
            addItem={addItem}
        />
        {notes!==[]&&notes.map((note,index)=>(
            <Note 
            key={index}
            title={note.title}
            content={note.content}
            delete={deleteItem}
            id={index}
            />
        ))}
        <Footer />
    </div>
}
export default App