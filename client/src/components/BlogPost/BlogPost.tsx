import {LinkContainer} from 'react-router-bootstrap'
import calculateReadingTime from "../../utils/calculateReadTime.ts";

function BlogPost({post, title, id}: {post: string, title: string, id: number}) {

    return (
        <article className="my-8 ">
            <div className="rounded-md overflow-hidden ">
                <img src="/images/cat.jpg" alt="image" className="h-[20rem] w-full object-cover"/>
            </div>
            <div>
                <p className="text-xl mt-2 text-zinc-300">May 20th 2023 - <span>{calculateReadingTime(post)} minute read</span></p>

                <LinkContainer to={`/${id}/details`}>
                    <h2 className="text-4xl max-w-[25ch] mt-4 cursor-pointer overflow-ellipsis whitespace-nowrap overflow-hidden">{title}</h2>
                </LinkContainer>

            </div>
        </article>
    );
}

export default BlogPost;
