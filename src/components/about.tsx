import React from "react";
import { Card, CardBody, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { devProfile } from "../data/devProfile";
import { useTheme } from "@heroui/use-theme";

export const About: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className="py-16 md:py-24 bg-content2/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-md overflow-hidden">
              <CardBody className="p-0">
                <img
                  loading="lazy"
                  src={
                    theme === "dark" ? "assets/dark.jpg" : "assets/white.jpg"
                  }
                  alt="About Me"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold">
              {devProfile.about.head}
            </h3>

            <p className="text-foreground-600">{devProfile.about.p1}</p>

            <p className="text-foreground-600">{devProfile.about.p2}</p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {devProfile.about.info.map((res, index) => (
                <div key={index}>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Icon icon={res.icon} className="text-primary" />
                    {res.label}
                  </h4>
                  <p className="text-foreground-500">{res.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <Button
                as={Link}
                href="#contact"
                color="primary"
                endContent={<Icon icon="lucide:send" />}
              >
                Contact Me
              </Button>

              <Button
                as={Link}
                href="https://drive.google.com/file/d/10vp81RVSZhhdysMvzjt_BPwx5K0lxvkV/view?usp=drivesdk"
                variant="bordered"
                color="primary"
                endContent={<Icon icon="lucide:download" />}
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
