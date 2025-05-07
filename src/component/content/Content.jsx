import React from 'react'
import './content.scss'


const Content = ({selected, components}) => {



  return (
    <div className="content">
       {components[selected]}
    </div>
  )
}

export default Content