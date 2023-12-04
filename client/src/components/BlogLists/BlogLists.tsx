import BlogPost from "../BlogPost/BlogPost.tsx";
import posts from "../../data/posts.ts";

function BlogLists() {
    return (
        <div className="grid grid-cols-2 gap-8 justify-between">
            {
                posts.map((data) => (
                    <BlogPost post={data.post} title={data.title} id={data.id}/>
                ))
            }

        </div>
    );
}

export default BlogLists;
