import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../components/Header";
import RightNavbar from "../components/layOut-component/RightNavbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-5/6 grid grid-cols-12 mx-auto gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card p-0 bg-base-100 w-full border-1">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold mb-2">{news?.title}</h2>
              <p className="mb-8 text-base">{news?.details}</p>
              <div className="card-actions">
                <Link to={`/`} className="btn bg-red-700 text-white">
                  <span>
                    <FaArrowLeftLong />
                  </span>
                  All News in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
