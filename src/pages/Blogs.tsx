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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* <!-- Product Image --> */}
                            <img src={post.frontmatter.imgUrl} alt="Product Image" className="w-full h-48 object-cover" />
                            {/* <!-- Product Details --> */}
                            <div className="p-4">
                                <h3 className="sec_heading font-serif">
                                    <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                                </h3>
                                <p className=" text-gray-600 mt-1">{post.frontmatter.excerpt}</p>
                                <small>{post.frontmatter.date}</small>
                                {/* <p className="text-lg font-bold text-gray-900 mt-2">CHF 45.00</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blogs;