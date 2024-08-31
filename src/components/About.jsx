import aboutImg from "../assets/about.jpg";
import { EDUCATION, LANGUAGE_PROFICIENCY, OTHER_CERTIFICATIONS, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-lg opacity-90 filter drop-shadow-lg" src={aboutImg} alt="about" width={"70%"}/>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-8 pt-8 lg:pt-0"
        >
          <div className="flex flex-col flex-start h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">{EDUCATION.university}</h2>
              <p className="font-medium text-purple-300">Major: {EDUCATION.major}</p>
              <p className="font-medium text-purple-300">CPA: {EDUCATION.cpa}</p>
              <p className="font-medium text-purple-300">Expected Graduation: {EDUCATION.graduationDate}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Language Proficiency</h2>
              <p className="font-medium text-purple-300">Japanese: {LANGUAGE_PROFICIENCY.japanese}</p>
              <p className="font-medium text-purple-300">English: {LANGUAGE_PROFICIENCY.english}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Other Certifications</h2>
              <p className="font-medium text-purple-300">{OTHER_CERTIFICATIONS.spring}</p>
              <p className="font-medium text-purple-300">{OTHER_CERTIFICATIONS.mysql}</p>
              <p className="font-medium text-purple-300">{OTHER_CERTIFICATIONS.problem_solving}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Others</h2>
              <p className="font-medium text-purple-300">Experience in team development using the Agile Scrum</p>
              <p className="font-medium text-purple-300">Ability to self-learn new knowledge and technologies.</p>
            </div>
            {/* <div>
              <h2 className="text-2xl font-semibold mb-2">Connect with me</h2>
              <p>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub
                </a>
              </p>
              <p>
                <a href={SOCIAL_LINKS.slack} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Slack
                </a>
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;