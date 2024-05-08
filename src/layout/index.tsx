import React from 'react'
import Navbar from '~/components/navbar'


const SinglePageLayout = ({
  image,
  children,
  main
}: {
  image?: string;
  children: React.ReactNode;
  main?: string
}) => {
  return (
    <div>
      <Navbar />
      <div>
        breadcrumbs
      </div>
      {children}
    </div>
  )
}

export default SinglePageLayout