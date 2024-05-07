import { Inter } from "next/font/google";
import Footer  from '~/components/footer'
import PaymentInfo from "~/components/paymentInfo";
import Navbar from "~/components/navbar"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='bg-zamat-background-light '>
      <Navbar />
      
      {/* <Footer /> */}
    </main>
  );
}
