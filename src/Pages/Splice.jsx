import Nav from "../base/Nav";
import Splitting from "../components/Splitting";
import Footer from "../base/Footer";

function Splice() {
  return (
    <div className="flex flex-col items-center justify-center relative h-screen w-screen">
      <Nav />
      <Splitting />
      <Footer />
    </div>
  );
}

export default Splice;
