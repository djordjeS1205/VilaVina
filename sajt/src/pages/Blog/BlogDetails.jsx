import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../../utils/blog";
import "./Blog.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="blog-page">
          <div className="blog-container blog-single">
            <h1>Blog nije pronađen</h1>
            <p>Objava koju tražiš ne postoji ili još nije učitana.</p>
            <Link to="/blog" className="blog-back-link">
              Nazad na blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="blog-page">
        <div className="blog-container blog-single">
          <Link to="/blog" className="blog-back-link">
            ← Nazad na blog
          </Link>

          {post.image && (
            <img src={post.image} alt={post.title} className="blog-single-image" />
          )}

          <p className="blog-single-date">{post.date}</p>
          <h1 className="blog-single-title">{post.title}</h1>

          <div
            className="blog-single-content"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;