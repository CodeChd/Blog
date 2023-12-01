function BlogDetails() {
    return (
        <div className="py-14">

            {/* TITLE */}
            <div className="w-full flex flex-col gap-8 justify-center items-center">
                <div className="rounded-md overflow-hidden">
                    <img src="/images/cat.jpg" alt="cat" className="h-[30rem] w-[45rem] object-cover "/>
                </div>

                <div className="flex flex-col justify-center max-w-[45rem]">
                    <h1 className="text-4xl  text-left py-2 font-bold ">Why do indoor cats live less than outdoor
                        cats? </h1>
                    <p className="text-xl mt-2 text-zinc-400 ">May 20th 2023 - <span>9 minute read</span></p>
                </div>
            </div>


            {/* BODY */}
            <div className="mt-14 text-2xl p-4 leading-9 tracking-wide">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur debitis dicta, dignissimos impedit officiis optio pariatur quia quis vel! Accusamus at, autem, enim est, fugiat incidunt iusto modi molestiae nesciunt nobis non nulla numquam omnis porro quidem ratione rem repellendus repudiandae unde veritatis? Aliquam dolor ducimus error iste minima quibusdam quis, saepe? Alias at eos est incidunt iure quibusdam temporibus voluptatibus. Accusamus, aliquam autem corporis cum dolore ea eius error expedita explicabo fugiat ipsam magni natus numquam obcaecati, pariatur porro sunt tenetur unde vel voluptates? Adipisci at eaque eius eligendi fugit neque nesciunt numquam recusandae repudiandae, sequi, sint voluptatum!</p>
            </div>


            {/*AUTHOR*/}


        </div>
    );
}

export default BlogDetails;