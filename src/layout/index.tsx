import React from 'react'
import Navbar from '~/components/navbar'
import { useRouter } from 'next/router';
import { ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';


const SinglePageLayout = ({
  image,
  children,
  main
}: {
  image?: string;
  children: React.ReactNode;
  main?: string
}) => {
  const fallBackImg = '/top-heading-course-new.webp';
  const { asPath, basePath } = useRouter();
  const path = asPath
    .replace(/[?#].*$/, '')
    .split('/')
    .filter((el) => el);
  return (
    <div>
      <Navbar />
      <div className='p-5 lg:mt-10'>
          <p className='flex items-center w-[95%] mx-auto'>
            <Link href='/'>Home</Link>{' '}
        <ArrowRight2 size='13' color='#222222' className='mt-1' />{' '}
        {path.map((el) => (
          <span key={el}> {decodeURI(el)}</span>
        ))}
          </p>
        </div>
      {children}
    </div>
  )
}

export default SinglePageLayout