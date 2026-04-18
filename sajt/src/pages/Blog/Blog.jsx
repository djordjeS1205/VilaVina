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
          <div className="blog-hero-overlay" />
          <div className="blog-container blog-hero-content">
            <span className="blog-hero-subtitle">Vila Vina Blog</span>
            <h1>Priče, novosti i svet vina</h1>
            <p>
              Otkrijte priče iz naše vinarije, zanimljivosti o vinima, događaje,
              savete i trenutke koje želimo da podelimo sa vama.
            </p>
          </div>
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