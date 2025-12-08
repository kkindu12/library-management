import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { Book } from "../types";
import Card from "../components/Card";

export default function BookList(){
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "author">("title");

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

  async function deleteBook(id?: number, title?: string){
    if(!id) return;
    if(!confirm(`Delete "${title}"? This action cannot be undone.`)) return;
    try{
      await api.delete(`/books/${id}`);
      setBooks(prev => prev.filter(b => b.id !== id));
      alert("Book deleted successfully.");
    }catch(err){
      console.error(err);
      alert("Could not delete the book.");
    }
  }

  // Filter and sort books
  const filtered = useMemo(()=> {
    const q = query.trim().toLowerCase();
    let list = books.filter(b =>
      !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );

    if(sortBy === "title") list.sort((a,b) => a.title.localeCompare(b.title));
    else if(sortBy === "author") list.sort((a,b) => a.author.localeCompare(b.author));

    return list;
  }, [books, query, sortBy]);

  function excerpt(text?: string, max = 150){
    if(!text) return "No description provided.";
    return text.length > max ? text.slice(0, max).trim() + "…" : text;
  }

  return (
    <main>
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1>📚 Books Library</h1>
            <p className="subtitle">Manage and organize your book collection</p>
          </div>
          <Link to="/add" className="btn" style={{alignSelf: "flex-start"}}>+ Add New Book</Link>
        </div>

        {/* Toolbar */}
        {!loading && books.length > 0 && (
          <div className="toolbar">
            <input
              type="search"
              placeholder="Search by title or author..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="search-input"
              aria-label="Search books"
            />
            <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} aria-label="Sort books">
              <option value="title">Sort by Title</option>
              <option value="author">Sort by Author</option>
            </select>
            <div className="summary">
              {filtered.length} of {books.length} books
            </div>
          </div>
        )}

        {/* Content */}
        {loading ? (
          <div className="text-center mt-3">
            <p>Loading your books...</p>
          </div>
        ) : (
          <>
            {filtered.length === 0 ? (
              <Card>
                <div className="text-center mt-3">
                  <h3>No books found</h3>
                  <p className="small-muted">
                    {books.length === 0 ? "Start by adding your first book to the library." : "Try adjusting your search filters."}
                  </p>
                  {books.length === 0 && (
                    <Link to="/add" className="btn mt-2">Add Your First Book</Link>
                  )}
                </div>
              </Card>
            ) : (
              <div className="grid">
                {filtered.map(b => (
                  <Card key={b.id}>
                    <h3>{b.title}</h3>
                    <p className="author">✍️ {b.author}</p>
                    <p className="description">{excerpt(b.description)}</p>
                    <div className="metadata">
                      <div className="meta-item">
                        <span>📖 ID: {b.id}</span>
                      </div>
                    </div>
                    <div className="controls">
                      <Link to={`/edit/${b.id}`} className="icon-btn">Edit</Link>
                      <button 
                        className="icon-btn icon-btn-danger" 
                        onClick={()=>deleteBook(b.id, b.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
