import React from "react";

const Shortlisted = ({title,entries}) => {
  return (
    <div className="post-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat theme-red f-700">{title}</h2>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {entries.map(o => (
            <div key={o} className='col-md-3'>
              <p className='font-weight-bold mt-2 mb-2'>{o}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shortlisted