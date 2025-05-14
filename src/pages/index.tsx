import Image from "next/image";
import { Roboto } from "next/font/google";
import NewsletterForm from "./newsletterForm";
import useFormStore from "./useFormStore";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export default function Home() {

  const { isSuccess, email, dismissMessasge } = useFormStore();

  return (
    <main className={`w-full h-screen bg-[#2e2f3e] flex justify-center items-center px-4 py-10 ${robotoSans.className}`}>
      <>
        {
          !isSuccess ? <section className="flex justify-between gap-12 bg-[#FFFFFF] xs:flex-col md:flex-row lg:flex-row sm:border-white sm:border md:border-teal-400 md:border-2 lg:border-2 lg:border-red-300 lg:w-1/2 p-10 rounded-3xl">
            <div className="text-[#24263c] py-14 w-1/2">
              <h1 className="text-5xl font-bold mb-6">Stay Updated!</h1>
              <p className="text-[14px] font-semibold mb-6">Join 60,000+ project managers recieving monthly updates on:</p>
              <div className="mb-8">
                {
                  [
                    'Project discover and building what matters',
                    'Measuring to ensure updates are a success',
                    'And much more',
                  ].map((item, indx) => <div className="flex items-center justify-start gap-2 my-2" key={indx}>
                    <Image src="/images/icon-list.svg" alt="list-icon" width={20} height={20} />
                    <p className="text-2xs xs:text-xs sm:text-sm md:text-base text-[15px] font-semibold">{item}</p>
                  </div>)
                }
              </div>
              <NewsletterForm />
            </div>
            <div className="w-1/2 relative rounded-xl overflow-hidden">
              <Image src="/images/illustration-sign-up-desktop.svg" className="object-cover" alt="desktop-illustration" fill />
            </div>
          </section> : <section className="bg-[#FFFFFF] w-1/3 h-fit p-10 rounded-3xl">
            <div className="mb-6">
              <Image src={"/images/icon-success.svg"} width={50} height={50} alt="icon-success" />
            </div>
            <h1 className="text-4xl font-bold mb-5 text-[#24263c] ">Thanks for subscribing!</h1>
            <p className="text-md mb-5 text-[#24263c]">A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
            <button className="cursor-pointer hover:bg-[#ff6257] hover:shadow-2xl hover:shadow-red-200 w-full shadow-md text-center bg-[#24263c] text-[#ffffff] font-semibold text-base p-3 rounded-sm" onClick={dismissMessasge}>Dismiss message</button>
          </section>
        }
      </>
    </main>
  );
}
