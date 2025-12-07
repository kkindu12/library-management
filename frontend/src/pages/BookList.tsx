import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { Book } from "../types";
import Card from "../components/Card";

export default function BookList(){
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchBooks();
  },[]);

  async function fetchBooks(){
    try{
      const res = await api.get<Book[]>("/books");
      setBooks(res.data);
    }catch(err){
      console.error(err);
      alert("Failed to load books — check backend.");
    }finally{ setLoading(false) }
  }

  async function deleteBook(id?: number){
    if(!id) return;
    if(!confirm("Delete this book?")) return;
    try{
      await api.delete(`/books/${id}`);
      setBooks(prev => prev.filter(b => b.id !== id));
    }catch(err){
      console.error(err);
      alert("Could not delete the book.");
    }
  }

  return (
    <div className="container">
      <h1>Books</h1>
      <p className="small-muted">Manage your library — create, edit and remove books.</p>

      {loading ? <p className="small-muted">Loading…</p> : (
        <>
          {books.length === 0 ? (
            <Card>
              <h3>No books yet</h3>
              <p className="small-muted">You can add a new book using the Add Book button.</p>
            </Card>
          ) : (
            <div className="grid">
              {books.map(b => (
                <Card key={b.id}>
                  <h3>{b.title}</h3>
                  <p className="small-muted">by {b.author}</p>
                  <p>{b.description}</p>
                  <div className="controls">
                    <Link to={`/edit/${b.id}`} className="icon-btn">Edit</Link>
                    <button className="icon-btn" onClick={()=>deleteBook(b.id)}>Delete</button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
