const BlogCard = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 border-0 shadow-sm text-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="card-img-top img-fluid"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="fw-semibold card-title">{blog.title}</h6>
          <p className="text-muted small mb-3 mt-auto">{blog.date}</p>
          <button className="btn btn-outline-dark btn-sm">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
