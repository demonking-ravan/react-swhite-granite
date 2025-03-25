import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Post } from '../utils/loadPosts';

interface BlogPostProps {
  posts: Post[];
}

const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  console.log("BlogPost component rendered");

  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  console.log("post: ", post);

  if (!post) return <h2>Post not found</h2>;

  return (
    <section className='sec_container'>
      <div className='max-w-2xl mx-auto blog-content'>
        <h1 className='font-serif mb-6'>{post.frontmatter.title}</h1>
        <small className='nav-link'>Posted on: {post.frontmatter.date}</small>
        <img className='w-full h-auto object-cover rounded-3xl my-6' src={post.frontmatter.imgUrl} alt="post image" />
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
