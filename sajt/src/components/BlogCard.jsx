import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      {post.image && (
        <Link to={`/blog/${post.slug}`} className="blog-card-image-wrap">
          <img src={post.image} alt={post.title} className="blog-card-image" />
        </Link>
      )}

      <div className="blog-card-content">
        <p className="blog-card-date">{post.date}</p>
        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>

        <Link to={`/blog/${post.slug}`} className="blog-read-more">
          Pročitaj više
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;