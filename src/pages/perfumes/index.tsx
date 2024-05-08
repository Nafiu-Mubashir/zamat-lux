import SinglePageLayout from '~/layout';

const Perfumes = () => {
  return(
    <div>
      Perfume
    </div>
  )
}

export default Perfumes

Perfumes.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return (
    <SinglePageLayout>
      {page}
    </SinglePageLayout>
  );
};