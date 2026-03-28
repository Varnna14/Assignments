import blogs from "../data/blogs";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="blog-list">
      <h2>📋 Blog List</h2>

      {blogs.map(blog => (
        <div className="blog-card" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Blogs;