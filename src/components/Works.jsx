import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { VictorApplications } from "../constants";

const ProjectCard = ({ index, name, description, image, url }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.03}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glarePosition="all"
        className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full group bg-white/5 backdrop-blur-sm border border-white/10"
      >
        <motion.div 
          className="relative w-full h-64 overflow-hidden"
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content overlay */}
        <div className="relative p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <motion.h3 
                className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500"
                whileHover={{ x: 3 }}
              >
                {name}
              </motion.h3>
              <p className="text-gray-800 text-base leading-relaxed">
                {description}
              </p>
            </div>

            <motion.div 
              className="mt-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full filter blur-xl -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/5 rounded-full filter blur-xl -z-10" />
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className={`${styles.sectionSubText} text-amber-600 text-lg font-medium`}>
            VICTOR ECOSYSTEM
          </p>
          <h2 className={`${styles.sectionHeadText} text-blue-400 text-4xl md:text-6xl font-bold leading-tight`}>
            Premium <span className="text-amber-500">Digital</span> Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover Victor's suite of enterprise applications — where innovation meets exceptional user experience.
          </p>
        </motion.div>

        {/* Grid container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {VictorApplications.map((app, index) => (
            <ProjectCard key={`app-${index}`} index={index} {...app} />
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Discover More Applications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");