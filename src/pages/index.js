import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Home = () => {

  return (
    <>
    <Header />
    <img src='./upper_right.svg' id='upper_right' />
    <img src='./lower_left.svg' id='lower_left' />
    <img src='./stars.svg' id='stars1' />
    <img src='./stars.svg' id='stars2' />
    <div id='landing-content'>
      <h1>Digital Solutions, Crafted Simply</h1>
      <p>Welcome to Driven Dynamics. We transform ideas into effective online platforms. Our small, dedicated team is committed to delivering impactful digital experiences.</p>
      <Link href="/portfolio">
        <button>PORTFOLIO</button>
      </Link>
    </div>
    <Footer />
    </>
  )
};

export default Home;
