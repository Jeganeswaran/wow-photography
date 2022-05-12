import React from "react";

const Winners = ({title, entries}) => {
  return (
    <div className='container-fluid mb-5'>
      <h5 className="montserrat theme-red f-700">{title}</h5>
      <div className='row'>
        {entries.map(o => (
          <div key={o} className='col-md-4'>
            <p className='font-weight-bold mt-2 mb-2'>{o}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Winners