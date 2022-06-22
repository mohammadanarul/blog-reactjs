import { useParams } from "react-router-dom";
import useDataFatch from "../hooks/useDataFatch";
import { Comments } from "../components/Comments";

const SinglePost = () => {
  const { slug } = useParams();

  const post = useDataFatch(
    `http://127.0.0.1:8000/api/v1/posts/post-detail/using-drf-effectively-to-build-cleaner-and-faster/`
  );
  console.log({ post });
  // const postComments = useDataFatch(
  //   `https://jsonplaceholder.typicode.com/comments?postId=${post.data.id}`
  // );
  console.log(slug);
  return (
    <div className="container px-5">
      {post.loading && <h3>Loading...</h3>}
      {post.error && <h3>{post.error}</h3>}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">
          {post.data?.title} ({post.data.id})
        </h1>
        <p className="leading-normal tracking-wide">{post.data?.description}</p>
        <div className="flex space-x-3 py-2">
          {post.data.tags?.map((tag, tagInd) => (
            <div
              key={tagInd}
              className="bg-fuchsia-600 p-1 rounded text-sm text-gray-100"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="py-2"></div>
        {/* comments sections */}
        <Comments comments={post.data?.comments} />
        {/* {post.data.comments?.map((cm, cmInd) => (
          <p key={cmInd}>{cm?.content}</p>
        ))} */}
      </div>
    </div>
  );
};

export default SinglePost;
