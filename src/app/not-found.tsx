import Link from "next/link";
import "../styles/globals.css"
import ParticleAnimation from "@/components/particleAnimation/ParticleAnimation";

export default function NotFound() {
  return (
    <>
      <ParticleAnimation/>
      <div className='main'>
        <div className='container'>
          <div className="notFoundCo">
            <div className="notFound" title="404">404</div>
            <Link href="/" passHref legacyBehavior>
              <a className="btn">Головна</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
