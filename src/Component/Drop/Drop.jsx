import React from 'react'

const Drop = (props) => {
  return (
    <div className='p-[20px]'>
        <input type="checkbox" id={props.dropId} className="m-[10px]"/>
        <label className="" htmlFor={props.htmlFor}>{props.dropName}</label>
      </div>
  )
}

export default Drop
