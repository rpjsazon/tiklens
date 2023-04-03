import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { BallCanvas } from  "./canvas";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";
import { textVariant } from '../utils/motion';

const Social = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Links</p>
      <h2 className={styles.sectionHeadText}>Social Media</h2>
    </motion.div>
    
    <div className="flex flex-row flex-wrap gap-10">
      {socials.map((social) => (
        <div className="w-28 h-28" key={social.name}>
          <BallCanvas icon={social.icon} />
          <a
            href={social.source_link}
            target="_blank"
            className="flex flex-row flex-wrap justify-center"
          >
            {social.name}
          </a>
        </div>
      ))}
    </div>

    </>
  );
};

export default SectionWrapper(Social, "");