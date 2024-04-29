import { useState } from "react";
import Modal from "./Modal"




function DataTable() {
  let [ open, setOpen] = useState(false)

 // const handleOpen = () => {
       // setOpen(true);
   // }

  const handleClose = () => {
    setOpen(false);
  }




        return (
    <>
              <Modal open={open} onClose={close}  />
              <div className="flex flex-row">
                  <div>
                      <button
                          className="p-2 m-2 bg-blue-200 rounded hover:bg-slate-800 hover:text-white "
                      >
                          Create New Contact
                      </button>
                      <button
                          className="p-2 m-2 bg-blue-200 rounded hover:bg-slate-800 hover:text-white"
                      >
                          Update
                      </button>
                      <button
                          className="p-2 m-2 bg-blue-200 rounded hover:bg-slate-800 hover:text-white"
                      >
                          Delete
                      </button>
                      <button onClick={() => handleClose()}>Close</button>
                  </div>
              </div>
              {/*CRUD*/}
              {/*Data Table*/}
          </>
  )
}

export default DataTable


