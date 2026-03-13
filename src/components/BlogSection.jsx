import BlogCard from "./BlogCard";
import blogSectionData from "./blogsectiondata";

const BlogSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-5">FROM THE BLOG</h2>
        <div className="row g-4">
          {blogSectionData.map((item, index) => (
            <BlogCard key={index} blog={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
