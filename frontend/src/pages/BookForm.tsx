import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { Book } from "../types";

export default function BookForm(){
  const [book, setBook] = useState<Book>({ title:"", author:"", description:"" });
  const [loading, setLoading] = useState(false);
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
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    if(!book.title.trim() || !book.author.trim()){
      return alert("Title and author are required.");
    }
    setLoading(true);
    try{
      if(isEdit){
        await api.put(`/books/${id}`, book);
      } else {
        await api.post("/books", book);
      }
      navigate("/");
    }catch(err){
      console.error(err);
      alert("Failed to save book.");
    }finally{ setLoading(false) }
  }

  return (
    <div className="container">
      <h1>{isEdit ? "Edit" : "Add"} Book</h1>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Title
          <input name="title" value={book.title} onChange={onChange} type="text" required />
        </label>

        <label>
          Author
          <input name="author" value={book.author} onChange={onChange} type="text" required />
        </label>

        <label>
          Description
          <textarea name="description" value={book.description} onChange={onChange} />
        </label>

        <div style={{display:"flex", gap:".6rem", justifyContent:"flex-end", marginTop:8}}>
          <button type="button" className="icon-btn" onClick={()=>navigate("/")}>Cancel</button>
          <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Saving..." : "Save"}</button>
        </div>
      </form>
    </div>
  );
}
