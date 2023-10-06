
import axios from 'axios';

const Blog = ({ blog }) => {

console.log("Blog is",blog)
    return (
        <div>
            <h1 className='text-2xl text-center underline underline-offset-4'>{blog.attributes.title}</h1>
            <p>{blog.attributes.content}</p>
        </div>
    );
};

export async function getStaticProps(context) {
    const slug = context.params.slug;
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug]=${slug}`);
      const blog = response.data.data[0]; // Assuming the API returns an array
      return {
        props: {
          blog,
        },
      };
    } catch (error) {
      return {
        notFound: true, // Return a 404 page if the blog post with the given slug is not found
      };
    }
}
  
export async function getStaticPaths() {

        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs`);
        const blogs = response.data;
        const paths = blogs.data.map((blog) => ({
          params: { slug: blog.attributes.slug },
        }));
        return {
          paths,
          fallback: false,
        };
    
  }

export default Blog;
