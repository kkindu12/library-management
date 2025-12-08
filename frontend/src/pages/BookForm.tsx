import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { Book } from "../types";

export default function BookForm(){
  const [book, setBook] = useState<Book>({ title:"", author:"", description:"" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(()=>{
    if(isEdit) loadBook();
  },[id]);

  async function loadBook(){
    try{
      const res = await api.get<Book>(`/books/${id}`);
      setBook(res.data);
    }catch(err){
      console.error(err);
      alert("Could not load book.");
      navigate("/");
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
    if(errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function validate(){
    const newErrors: {[key: string]: string} = {};
    if(!book.title.trim()) newErrors.title = "Title is required";
    if(!book.author.trim()) newErrors.author = "Author is required";
    return newErrors;
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    const newErrors = validate();
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try{
      if(isEdit){
        await api.put(`/books/${id}`, book);
        alert("Book updated successfully!");
      } else {
        await api.post("/books", book);
        alert("Book added successfully!");
      }
      navigate("/");
    }catch(err){
      console.error(err);
      alert("Failed to save book.");
    }finally{ setLoading(false) }
  }

  return (
    <main>
      <div className="container">
        <div className="page-header">
          <h1>{isEdit ? "Edit Book" : "Add New Book"}</h1>
          <p className="small-muted">{isEdit ? "Update book details" : "Add a new book to your library"}</p>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>
              Title <span className="required">*</span>
              <input 
                name="title" 
                value={book.title} 
                onChange={onChange} 
                type="text" 
                placeholder="Enter book title"
                required 
              />
            </label>
            {errors.title && <span style={{color: "var(--danger)", fontSize: "0.85rem"}}>{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>
              Author <span className="required">*</span>
              <input 
                name="author" 
                value={book.author} 
                onChange={onChange} 
                type="text" 
                placeholder="Enter author name"
                required 
              />
            </label>
            {errors.author && <span style={{color: "var(--danger)", fontSize: "0.85rem"}}>{errors.author}</span>}
          </div>

          <div className="form-group">
            <label>
              Description
              <textarea 
                name="description" 
                value={book.description} 
                onChange={onChange}
                placeholder="Enter book description (optional)"
              />
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={()=>navigate("/")}>Cancel</button>
            <button type="submit" className="btn" disabled={loading}>{loading ? "Saving..." : isEdit ? "Update Book" : "Add Book"}</button>
          </div>
        </form>
      </div>
    </main>
  );
}
