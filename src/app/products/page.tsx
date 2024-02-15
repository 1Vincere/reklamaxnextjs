import Link from "next/link";
import Image from "next/image";
import styles from "./../../styles/project.module.css";
import Nav from "@/components/Nav/Nav";
import ParticleAnimation from "@/components/particleAnimation/ParticleAnimation";
import { projects } from "@/helpers/projectList";
import Footer from "@/components/Footer/Footer";

export default function ProductList() {
  return (
    <>
      <ParticleAnimation />
      <div className="main">
        <div className="container">
          <Nav />
          
          <div className={styles.test}>TEST</div>
          <div className={styles.projectsHold}>
            {projects.map((project) => (
              <Link key={project.id} href={`/products/${project.id}`} className={styles.project}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    className={styles.project__img}
                  />
                  <h3 className={styles.project__title}>{project.title}</h3>
              </Link>
            ))}
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
