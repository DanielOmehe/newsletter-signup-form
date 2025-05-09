import Image from "next/image";
import { Roboto } from "next/font/google";
import NewsletterForm from "./newsletterForm";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <main className={`w-full h-screen bg-[#2e2f3e] flex gap-[32px] justify-center lg:items-center sm:items-start ${robotoSans.className}`}>
      <section className="flex justify-between gap-12 bg-[#FFFFFF] w-3xl h-fit p-10 rounded-4xl">
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
                <p className="text-[15px] font-semibold">{item}</p>
              </div>)
            }
          </div>
          <NewsletterForm />
        </div>
        <div className="w-1/2 relative rounded-xl overflow-hidden">
          <Image src="/images/illustration-sign-up-desktop.svg" className="object-cover" alt="desktop-illustration" fill />
        </div>
      </section>
    </main>
  );
}
