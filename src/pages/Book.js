import React from 'react';



 
export default function Book({d}) {
  
  return (
    
    
    d.map(book=>(
      
     

   
               <div className="w3-col l3 s6 m4 mx-auto" >
                    <div className="w3-container mx-5 " >
                   
                
                        <img src={`../images/${book.img}`}  className="img-thumbnail" ></img>
                        <p><b>{book.product_name}</b><br/><i> {book.first_name+" "+book.last_name}</i><br/>Expiring in 3 days</p>
                    </div>
                </div> 
                

             



      )
              )
 

  )
}
