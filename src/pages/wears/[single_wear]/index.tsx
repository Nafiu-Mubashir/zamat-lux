import SinglePageLayout from "~/layout";
import { Grid, Divider } from "@mantine/core";

const SingleWear = () => {
    return(
        <div className="w-full lg:w-[95%] mx-auto p-3 space-y-10">
            <Grid>
                <Grid.Col span={{ base: 12, lg: 2 }} className="border">
                    <Grid>
                        <Grid.Col span={{ base: 12, lg: 12 }} className="border">
                            div 1
                        </Grid.Col> 
                        <Grid.Col span={{ base: 12, lg: 12 }} className="border">
                            div 1
                        </Grid.Col> 
                        <Grid.Col span={{ base: 12, lg: 12 }} className="border">
                            div 1
                        </Grid.Col> 
                    </Grid>  
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 4 }} className="border">
                    div 2
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 5 }} className="border">
                    div 3
                </Grid.Col>
         </Grid>  
        </div>
    )
}

export default SingleWear

SingleWear.getLayout = function (page: React.ReactElement) {
  // const event = '/courses/courses-banner.webp';
  return <SinglePageLayout>{page}</SinglePageLayout>;
};