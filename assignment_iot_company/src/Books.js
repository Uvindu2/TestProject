import React, { useState, useEffect } from "react";
import axios from "axios";
import {FiExternalLink} from "react"


const Books = () => {
    const [books, setBook] = React.useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
            );
            console.log(res.data.results.books)
            setBook(res.data.results.books)
        };
        fetchBooks()
    }, [])

    return (
        <div className="bg-gray-500">
        <>
            <h1 className="font-bold text-center text-4x1 py-5 lg:text-6xl mb-20 bg-gray-500 text-white	" >Best Selling Books</h1>
            <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 bg-gray-500 pb-20"  >
                {books.map((book) => {
                    const {author, book_image, buy_links, description, primary_isbn10, publisher, rank, title } = book

                    return (
                        <article key={rank} class='bg-gray-100 py-5 px-10 rounded-lg sm:px-5 '>
                            <div>
                                <img src={book_image} alt={title} className="block mx-auto w-1/2" />
                            </div>
                            <div>
                                <h3 className="font-bold my-2 text-2x1">{title}</h3>
                                <p className="mb-4">{description}</p>
                                <p><span className="font-bold">Author: </span>{author}</p>
                            </div>
                            <ul className="mb-4">
                                <li><span className="font-bold">Publicher:</span> {publisher}</li>
                                <li><span className="font-bold">ISBN: </span>{primary_isbn10}</li>
                                                    
                            </ul>
                            <ul >
                                <p><h3 className="font-bold text-xl">Buy Now :</h3></p>
                               {buy_links.map((link)=>{
                               const {name,url}= link
                               return(
                                <div key={name}>
                                   <a href={url}>
                                    {name}</a>
                                </div>
                               )

                               })}
                            </ul>
                        </article>
                    )
                })}
            </section>

        </>
        </div>
    )
}

export default Books;
