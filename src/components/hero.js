import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/cta-button.svg";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "h3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 6120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Design Your Model Architectures Solution.{" "}
            
          </h1>{" "}
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Kami mengubah rumah kosong Anda menjadi rumah yang indah, membuat
            ruang kompak dengan furnitur hemat space. Membuat selera unik Anda
            menjadi kenyataan!{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="relative">
        <GatsbyImage image={getImage(data.heroimage)} alt="Interior Design" />
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
