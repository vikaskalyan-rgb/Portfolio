import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.jpeg";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import { aboutData } from "@/data";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { mail } from "@/data";

const about = () => {
  return (
    <>
      <Head>
        <title>Vikas Kalyan | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Ignites Action !"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-8 xl:gap-12">
            <div className="col-span-3 flex flex-col items-start justify-start xl:order-2 xl:col-span-8">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Software engineer
              </h2>
              {aboutData.map((item, index) => (
                <p className="font-medium my-2" key={index}>
                  {item}
                </p>
              ))}
              <br></br>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Vikas_resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={`mailto:${mail}`}
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize dark:text-light text-dark underline md:text-base"
                >
                  Contact
                </Link>
                </div>
            </div>
            
            <div
              className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
            dark:bg-dark dark:border-light xl:col-span-8 xl:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              
              <Image
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw. (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
