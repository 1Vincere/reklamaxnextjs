import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  id: number;
  img: string;
  title: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  console.log(props)

  return (
  <Link href={`/project/${props.id}`} passHref>
    <div className="project">
      <Image src={props.img} alt={props.title} className="project__img" width={50} height={50} />
      <h3 className="project__title">{props.title}</h3>
    </div>
  </Link>

  );
};

export default Project;