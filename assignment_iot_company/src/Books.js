import React, { useState, useEffect } from "react";
import axios from "axios";




const Books = () => {
    const [books, setBook] = React.useState([]);

    useEffect(() => {

        // Make a request for a user with a given ID
axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=euiwTw9ktCGpH1PoRDb4YI9sm8iP8vWS')
.then(function (response) {

  console.log(response);
  setBook(response.data.results.books)
  
})
.catch(function (error) {
  // handle error
  console.log(error);


})
.finally(function () {
  // always executed

});


    }, [])

    return (
        
        <div className="bg-gray-500">
        <>
            <h1 className="font-bold text-center text-4x1 py-5 lg:text-6xl mb-20 text-white	" >Best Selling Books</h1>
            <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  pb-20"  >
               
                    
                    
                    {books.map((book)=>(<article class='bg-gray-100 py-5 px-10 rounded-lg sm:px-5 '>
                            <div>
                                <img src={book.book_image} alt={book.title} className="block mx-auto w-1/2" />
                             
                            </div>
                            <div>
                                <h3 className="font-bold my-2 text-2x1">{book.title}</h3>
                                <p className="mb-4">{book.description}</p>
                                <p><span className="font-bold">Author: </span>{book.author}</p>
                            </div>
                            <ul className="mb-4">
                                {/* <li><span className="font-bold">Publicher:</span> {publisher}</li>
                                <li><span className="font-bold">ISBN: </span>{primary_isbn10}</li> */}
                                                    
                            </ul>
                            <ul >
                               
                                <a href={book.buy_links[0].url} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Buy Now </a>
                              
                               
                            </ul>
                        </article>
                        ))}
                      
                        
                        
                    
                
            </section>

        </>
        </div>
    )
}

export default Books;
