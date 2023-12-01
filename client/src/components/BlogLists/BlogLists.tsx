import BlogPost from "../BlogPost/BlogPost.tsx";

function BlogLists() {
    return (
        <div className="grid grid-cols-2 gap-8 justify-between">
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
        </div>
    );
}

export default BlogLists;