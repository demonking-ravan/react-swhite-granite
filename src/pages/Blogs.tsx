import { Link } from "react-router-dom";
import { Post } from "../utils/loadPosts";

interface BlogsProp {
    posts: Post[];
}


const Blogs: React.FC<BlogsProp> = ({ posts }) => {
    return (
        <>
            <section className="sec_container">
                <div className="animate-it animation-trigger">
                    <div className="grid-main">
                        <div className="col-span-12 lg:col-span-9 text-block">
                            <div className="richtext">
                                <h1 className="font-serif">Blogs</h1>
                                <blockquote>

                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec_container mt-0">
                {/* <div className="flex flex-wrap">
                    <div className="mt-14 px-7 w-1/2 "></div>
                </div> */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="group hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition">
                            <div className="">
                                <img className="w-full object-cover rounded-xl h-56" src={post.frontmatter.imgUrl} alt="Blog Image" />
                            </div>
                            <h3 className="mt-5 text-xl text-gray-800">
                                {post.frontmatter.title}
                            </h3>
                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
                                Learn more
                                <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </Link>
                    ))}
                </div>
            </section >
        </>
    )
}

export default Blogs;