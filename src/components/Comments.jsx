import React from "react";
import useDataFatch from "../hooks/useDataFatch";

export const Comments = ({ comments }) => {
  // console.log(comments);
  // comments.data?.map((cm) => {
  //   console.log(cm.name);
  // });
  console.log({ comments });
  return (
    <>
      <h1 className="py-3 text-2xl font-bold">Comments</h1>
      {comments?.map((comment, commentId) => (
        <div key={commentId} className="p-2 my-2 hover:bg-gray-100">
          <p>{comment.content}</p>
          <footer>
            <span className="font-medium">{comment.user}</span>
          </footer>
          <div className="ml-10">
            {comment.children?.map((reply, replyID) => (
              <div key={replyID} className="p-2 my-2 hover:bg-gray-100">
                <p>{reply.content}</p>
                <footer>
                  <span className="font-medium">{reply.user}</span>
                </footer>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
