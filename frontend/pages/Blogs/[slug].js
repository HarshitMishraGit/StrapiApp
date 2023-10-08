
import axios from 'axios';
// import edjsHTML from 'editorjs-html';
import EditorJSHTML from 'editorjs-html';

const Blog = ({ blog }) => {
  console.log("Blog is", blog);
  const commentsData = blog.attributes.comments.data;
  function convertJSONToHTML(jsonContent) {
    const jsonFormat = JSON.stringify(jsonContent);
    const htmlContent = EditorJSHTML(jsonContent);
    return { __html: htmlContent };
  }
  return (
    <div>
      {blog ? (
        <>
          <h1 className="text-2xl text-center underline underline-offset-4">
            {blog.attributes.title}
          </h1>
          <p>{blog.attributes.content}</p>

          <div className='my-24'>
            <h1 className='text-xl font-semibold text-start px-5 py-3'>Comments</h1>
            <hr />
            {commentsData.map((comment) => (
               <div className='flex flex-col justify-center items-start px-4 py-2 rounded-lg bg-gray-300 my-4'>
                <p className='text-xl font-bold'>{comment.attributes.name}</p>
                <div dangerouslySetInnerHTML={convertJSONToHTML(comment.attributes.description)}></div>
              </div>
            ))}
          </div>
        </>
      ) : (
          <div className='flex flex-row justify-center items-center w-full h-full'>

        <h1 className="text-2xl text-center font-bold">
          No Blog Found
        </h1>
          </div>
      )}
    </div>
  );
};

export async function getStaticProps(context) {
    const slug = context.params.slug;
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug]=${slug}&populate=*`);
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
          fallback: 'blocking',
        };
    
  }

export default Blog;
