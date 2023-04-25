import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import noteContext from "../Context/notes/noteContext";

export default function NoteItem() {

  const navigate=useNavigate()

  const context = useContext(noteContext);
  const { notes, getnotes, deleteNote, editNote, showAlert } = context;
  const [snote, setEnote] = useState({
    etitle: "",
    etag: "",
    edesc: "",
    eid: "",
  });
  useEffect(() => {
    if(localStorage.getItem('token')){
    getnotes();
    }
    else{
     navigate("/login")
    }
    // eslint-disable-next-line
  }, []);
  const updateNote =(cnote) => {
    setEnote({
      etitle: cnote.title,
      etag: cnote.tag,
      edesc: cnote.desc,
      eid: cnote._id,
    });

    ref.current.click();
   
  };

  const handleOnchange = (e) => {
    setEnote({ ...snote, [e.target.name]: e.target.value });
  };
  const ref = useRef(null);

  return (
    <div className="container row pb-5">
      {notes.length===0 && <h2 className="m-3 p-3">No Notes to display</h2>}
      
      {notes.map((note) => {
        return (
          <div key={note._id} className="container col-3 p-1 mb-2">
            <button
              type="button"
              className="btn btn-primary d-none"
              ref={ref}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              className="modal fade "
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content bg-dark">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="myform">
                      <div className="container">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            name="etitle"
                            id="etitle"
                            value={snote.etitle}
                            onChange={handleOnchange}
                            className="form-control border border-black"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Tag
                          </label>
                          <input
                            type="text"
                            name="etag"
                            id="etag"
                            value={snote.etag}
                            onChange={handleOnchange}
                            className="form-control border border-black"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Describe
                          </label>
                          <textarea
                            type="text"
                            name="edesc"
                            id="edesc"
                            value={snote.edesc}
                            onChange={handleOnchange}
                            className="form-control border border-black"
                          />
                        </div>

                        <button
                          type="submit"
                          value={note._id} disabled={snote.etitle.length<2||snote.edesc.length<5||snote.etag.length<2}
                          className="btn btn-primary border-1 bg-success border-black"
                          onClick={(e) => {
                            e.preventDefault();
                            editNote(
                              snote.eid,
                              snote.etitle,
                              snote.etag,
                              snote.edesc
                            ).then(() => {
                              ref.current.click();
                            });
                            showAlert("Note Updated successfully!!","success")
                          }}
                        >
                          Update Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary m-3"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-black">
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2  text-warning">
                  Card subtitle
                </h6>
                <p className="card-text">{note.desc}</p>
                <a href="/" className="card-link text-warning">
                  Card link
                </a>
                <img
                  src="delete.png"
                  alt="not found"
                  className="m-2"
                  onClick={() => {
                    deleteNote(note._id);
                    showAlert("Note Deleted","success")
                  }}
                  style={{ width: "25px", cursor: "pointer" }}
                ></img>
                <img
                  src="edit.png"
                  alt="not found"
                  className="m-2"
                  onClick={() => {
                    updateNote(note);
                  }}
                  style={{ width: "25px", cursor: "pointer" }}
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
