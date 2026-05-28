import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async () => {
    if (!title || !content) {
      alert("Fill all fields");
      return;
    }

    await axios.post("http://localhost:5000/api/posts", {
      title,
      content,
    });

    setTitle("");
    setContent("");
    fetchPosts();
  };

  return (
    <div className="container">

      <h1 className="title">🚀 Connect Stack App</h1>

      {/* FORM */}
      <div className="form">
        <input
          className="input"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="button" onClick={addPost}>
          Add Post
        </button>
      </div>

      
      <div className="posts">
        {posts.map((p) => (
          <div key={p._id} className="card">
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </div>
        ))}
      </div>

    </div>
    
  );
}

export default App;