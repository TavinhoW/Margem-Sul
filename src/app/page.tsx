import Header from './components/Header';
import Footer from './components/Footer';
import Products from './frontpage/produtos';
import Noticias from './frontpage/noticias';
import Trofeus from './frontpage/info';

export default function Home() {
  return (
      <>
          <Header />
          <Products />
          <Noticias />
          <Trofeus />
          <Footer />
      </>
  );
}
