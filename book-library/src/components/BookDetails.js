import React, { useContext, useEffect } from 'react';
import { BooksContext } from '../BooksContext';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
    const bookId = useParams();
    const books = useContext(BooksContext);

    const book = books.find(b => b.id == bookId);

    useEffect(() => {
        console.log(book);
    });

    return (<></>);
}

