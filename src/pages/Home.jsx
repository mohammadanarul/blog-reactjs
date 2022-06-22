import useDataFatch from "../hooks/useDataFatch";
import { NavLink } from "react-router-dom";
const Home = () => {
  const posts = useDataFatch("http://127.0.0.1:8000/api/v1/posts/", (data) =>
    data.slice(0, 10)
  );
  return (
    <div className="cotainer px-5">
      <h1 className="text-center text-xl py-10">
        Placeholder Post Api Fetching
      </h1>
      <div className="flex">
        <div className="grow mr-5">
          {posts.loading && <h3>Loading...</h3>}
          {posts.error && <h3>{posts.error}</h3>}
          {posts.data?.map((items, index) => (
            <div key={index} className="bg-gray-100 p-3 my-2 rounded">
              <NavLink to={`/post/${items.id}`} className="text-2xl pb-4">
                {items.title}
              </NavLink>
              <p className="text-md">{items.description}</p>
              <div className="flex space-x-3 py-2">
                {items.tags.map((tag, tagInd) => (
                  <div
                    key={tagInd}
                    className="bg-fuchsia-600 p-1 rounded text-sm text-gray-100"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <NavLink
                  to={`/post/${items.slug}`}
                  className="py-2 px-10 bg-purple-600 rounded text-white"
                >
                  more
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-none w-80 my-2">
          <div className="p-2 bg-gray-100 rounded">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
