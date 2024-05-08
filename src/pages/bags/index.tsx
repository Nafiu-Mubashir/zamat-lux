import SinglePageLayout from '~/layout';

const Bags = () => {
  return(
    <div>
      Bags
    </div>
  )
}

export default Bags

Bags.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return (
    <SinglePageLayout>
      {page}
    </SinglePageLayout>
  );
};