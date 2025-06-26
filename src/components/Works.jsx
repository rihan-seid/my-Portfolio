import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { VictorApplications } from "../constants";

const ProjectCard = ({ index, name, description, image, url }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full max-w-lg" 
    >
      <Tilt
        options={{ max: 15, scale: 1.02, speed: 300 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 h-full flex flex-col"
      >
        <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-blue-50 to-indigo-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30"></div>
        </div>

        <div className="flex-grow">
          <h3 className="text-blue-900 font-bold text-xl mb-3">{name}</h3>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-5">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition group"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <section className="w-full bg-gradient-to-br py-16 px-6 sm:px-12">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-blue-600`}>
          Victor Ecosystem
        </p>
        <h2 className={`${styles.sectionHeadText} text-blue-900`}>
          Victor Applications
        </h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-700 text-[17px] max-w-3xl leading-[28px]"
        >
          Discover the suite of applications developed by Victor. From installation tracking to HR systems, explore powerful platforms designed to streamline your operations.
        </motion.p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {VictorApplications.slice(0, 9).map((app, index) => (
          <ProjectCard key={`app-${index}`} index={index} {...app} />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Works, "");
