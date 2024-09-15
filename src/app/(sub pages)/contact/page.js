import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Connect with Us
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          

Thank you for visiting! If you&apos;re looking for a driven and capable professional, I&apos;m eager to contribute my skills and experiences to a dynamic team. Whether it&apos;s discussing potential collaborations or exploring career opportunities, I believe I could be a strong fit for your organization. Please feel free to reach out through the form below, and I&apos;ll look forward to the possibility of connecting with you.


          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
