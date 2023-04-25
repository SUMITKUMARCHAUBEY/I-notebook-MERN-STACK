import NoteItem from './NoteItem'

import AddNote from './AddNote'

export default function Home() {
 
  return (
    <div  className=" py-5">
     <div className="container bg-dark text-primary mt-5 p-5 rounded border-0 border-black" >
     <h2> Add your note</h2>

     <AddNote/>
     </div>
     <div className="container my-5 bg-dark rounded text-primary">
     <h3 className='py-4 text-center'>Read Your Notes Here</h3>
    <hr />
    <NoteItem/>

     </div>
    </div>
  )
}
