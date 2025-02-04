import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="max-w-5xl mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayouts;
