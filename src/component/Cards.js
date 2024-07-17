import React from 'react'
import Card from './Card'

 const Cards = ({data}) => {

    console.log(data);

  return (
    <div>  
        {
            data.map((content)=>{
                <Card content={content}></Card>
            })
        }
    </div>
  )
}

export default Cards;
