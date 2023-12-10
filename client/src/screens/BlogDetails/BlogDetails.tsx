import calculateReadingTime from "../../utils/calculateReadTime.ts";
import {useParams} from "react-router-dom";
import posts, {PostProps} from "../../data/posts.ts";

function BlogDetails() {
    const {id} = useParams()
    // Blog post details 
    // @ts-ignore
    const data: PostProps = posts.find(data => data.id === Number(id))

    // tags
    const tags = data?.tags.split(",").map(tag => `#${tag.trim()}`).join(" ")

    return (
        <div className="py-14 max-w-4xl mx-auto">

            {/* TITLE */}
            <div className="w-full flex flex-col gap-8 justify-start items-center pb-14">
                <div className="rounded-md overflow-hidden w-full">
                    <img src="/images/cat.jpg" alt="cat" className="h-[25rem] w-full object-cover "/>

                    <div className="flex flex-col justify-center max-w-[60rem]">
                        <h1 className="text-4xl text-left py-2 mb-2 font-bold ">{data?.title} </h1>
                        <div className="flex justify-between">
                            <p className="text-xl mt-2 text-zinc-400 ">May 20th 2023
                                - <span>{calculateReadingTime(data?.post)} minute read</span></p>


                            {/* TAGS*/}
                            <div className=" flex items-center gap-4  brightness-95">
                                <p className="text-xl text-zinc-400 inline-block">Tags:</p>
                                <p className="inline-block py-1 text-xl text-zinc-400">{tags}</p>
                            </div>
                        </div>
                    </div>

                </div>


                {/* BODY */}
                <div className="mt-14 text-2xl leading-9 tracking-wide py-14 text-zinc-300 brightness-105 ">
                    <p>{data?.post}</p>
                </div>


            </div>
        </div>
    );
}

export default BlogDetails;
