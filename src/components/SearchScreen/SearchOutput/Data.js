import React from 'react'
import { Link } from 'react-router-dom';

const Data = ({data}) => {
  return (
    <div style={{margin: "1rem"}}>
        <Link to={data.displayLink}>{data.displayLink}</Link>
        <Link to={data.formattedUrl}><h3>{data.title}</h3></Link>
        <p>{data.snippet}</p>
    </div>
  )
}

export default Data