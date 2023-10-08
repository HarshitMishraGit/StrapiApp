import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    // fetch all the posts from strapi
    axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs`).then((res) => {
      console.log("BLog data ", res.data);
      setBlogs(res.data.data);
    }
    ).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <p className='text-2xl text-center font-bold underline underline-offset-4 text-red-600'>Hello to strapi Blog app</p>
      
      <div className='flex flex-col gap-4 py-4 md:w-1/2 mx-auto'>
        {Blogs.map((blog) => (
          <Link href={`/Blogs/${blog.attributes.slug}`} target='_blank' key={blog.id} className='flex flex-col justify-center items-start px-4 py-2 rounded-lg bg-gray-300'>
            <p className='text-xl font-bold'>{blog.attributes.title}</p>
            {/* <p className='text-md'>{blog.attributes.content}</p> */}
            {/* <div dangerouslySetInnerHTML={convertJSONToHTML(blog.attributes.content)}></div> */}
          </Link>
        ))}
      </div>
    </>
  )
}
