import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { getAllPosts } from "../../utils/blog";
import "./Blog.css";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <div className="blog-page">
        <section className="blog-hero">
          <h1>Blog</h1>
          <p>Priče iz naše vinarije, novosti, događaji i svet vina.</p>
        </section>

        <section className="blog-list-section">
          <div className="blog-container">
            {posts.length > 0 ? (
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="blog-empty">
                <h2>Još nema objava</h2>
                <p>Prvi blog post će se pojaviti ovde čim ga admin objavi.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blog;