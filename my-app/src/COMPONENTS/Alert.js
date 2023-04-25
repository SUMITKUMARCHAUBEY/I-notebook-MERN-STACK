import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

export default function Alert() {
  const context=useContext(noteContext)
const {alert}=context;
  return (
    <div style={{height:"8vh"}}>
     {alert&& <div className={`alert alert-${alert.typ} fixed-top`} role="alert">
        {alert.mes}
      </div>}
    </div>
  );
}
