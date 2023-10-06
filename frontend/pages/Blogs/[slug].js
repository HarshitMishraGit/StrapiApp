import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = ({ blog }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const regeneratePage = async () => {
            setIsLoading(true);
            try {
                await axios.post('/api/blogsBuild', { slug: router.query.slug });
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        regeneratePage();
    }, [router.query.slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export async function getStaticPaths() {
    // Fetch all blogs from your API
    const blogs = await axios.get('http://localhost:1337/api/blogs');
    // const blogs = await res.json();

    // Get the paths we want to pre-render based on blogs
    const paths = blogs.data.map((blog) => ({
        params: { slug: blog.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Fetch blog data based on the slug
    const res = await fetch(`http://localhost:1337/api/blogs/${params.slug}`);
    const blog = await res.json();

    // Pass blog data to the page via props
    return { props: { blog } };
}

export default Blog;
