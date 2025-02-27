import Products from './frontpage/produtos';
import Noticias from './frontpage/noticias';
import Trofeus from './frontpage/info';

export default function Home() {
  return (
      <>
          <Products />
          <Noticias />
          <Trofeus />
      </>
  );
}
