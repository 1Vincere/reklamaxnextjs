import { Metadata } from "next";
import ParticleAnimation from "@/components/particleAnimation/ParticleAnimation";
import { projects } from "@/helpers/projectList";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import styles from "../../../styles/project.module.css";
import Link from "next/link";
import GitHubSvg from "@/components/Svg/GitHubSvg/GitHubSvg";
import LinkSvg from "@/components/Svg/LinkSvg/LinkSvg";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = params;
  const project = projects.find((p) => p.id === parseInt(productId, 10));

  return {
    title: `Product ${project?.title || "Not Found"}`,
  };
};

export default function ProductDetails({ params }: Props) {
  const { productId } = params;
  const project = projects.find((p) => p.id === parseInt(productId, 10));

  if (!project) {
    return <h1>Product Not Found</h1>;
  }

  return ( 
    <>
      <ParticleAnimation />
      <div className="main">
        <div className="container">
          <Nav />
          <div className={styles.proX}>
            <div className={styles.projectX}>
              <iframe className={styles.project__imgX} src={project.link}></iframe>
              <div className={styles.project__titleHoldX}>
                <h3 className={styles.project__titleX}>{project.title}</h3>
                <p className={styles.skillsX}>{project.skills}</p>
                <div className={styles.linksX}>
                  <Link href={project.gitHubLink} target="_blank" className={styles.linkX}>
                    <GitHubSvg/>
                    <h2>Репозиторій</h2>
                  </Link>
                  <Link href={project.link} target="_blank" className={styles.linkX}>
                    <LinkSvg/>
                    <h2>Веб сторінка</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

