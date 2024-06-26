import AnimatedText from "@/components/AnimatedText";
import { BehanceIcon, GithubIcon } from "@/components/Icons";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { projectsData } from "@/data";
const FramerImage = motion(Image);

const LinkWrapper = ({ href, ...props }) => {
  if (href == "#") {
    // return <button {...props}>Visit Project</button>;
    return <></>;
  }
  return (
    <Link href={href} {...props}>
      Visit Project
    </Link>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-50 h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <LinkWrapper
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          />
          <Link href={github} target="_blank" className="w-8 md:w-6">
          <GithubIcon /> 
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-50 h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <LinkWrapper
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          />
          <Link href={github} target="_blank" className="w-8 md:w-6">
          <BehanceIcon/>
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Vikas Kalyan | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Creativity Defies Limits!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={
                  project.isFeatured
                    ? "col-span-6 sm:col-span-12"
                    : "col-span-6 sm:col-span-12"
                }
              >
                {project.isFeatured ? (
                  <FeaturedProject
                    title={project.title}
                    summary={project.summary}
                    img={project.image}
                    link={project.demo_link}
                    type="Project"
                    github={project.github_link}
                  />
                ) : (
                  <Project
                    title={project.title}
                    img={project.image}
                    link={project.demo_link}
                    type="UX Case-Study"
                    github={project.github_link}
                    summary={project.summary}
                  />
                )}
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
