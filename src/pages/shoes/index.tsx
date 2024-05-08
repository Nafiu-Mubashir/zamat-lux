import SinglePageLayout from '~/layout';

const Shoes = () => {
  return(
    <div>
      Shoes
    </div>
  )
}

export default Shoes

Shoes.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return (
    <SinglePageLayout>
      {page}
    </SinglePageLayout>
  );
};