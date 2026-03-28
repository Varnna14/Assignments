import {useParams } from "react-router-dom";
import blogs from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;