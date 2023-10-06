import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <p className='text-2xl text-center font-bold underline underline-offset-4 text-red-600'>Hello to strapi Blog app</p>
    </>
  )
}
