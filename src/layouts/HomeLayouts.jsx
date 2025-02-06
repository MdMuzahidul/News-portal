import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LiftNavbar from "../components/layOut-component/LiftNavbar";
import RightNavbar from "../components/layOut-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-5/6 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-5/6 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-5/6 mx-auto grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LiftNavbar></LiftNavbar>
        </aside>
        <main className="col-span-6">Main content</main>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
