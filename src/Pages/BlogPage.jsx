import { useContext } from "react";
import Context from "../Store/Context";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { postList } = useContext(Context);
  const param = useParams();
  const id = param.blogId;
  const blogInfo = postList.find((blog) => blog.id === id);

  return (
    <>
      <section className="mx-[10rem] text-center">
        <h1 className="text-3xl mt-11 mb-2 font-bold">{blogInfo.title}</h1>
        <p className="my-3 bg-tertiary inline-block py-2 px-4 rounded-2xl">
          {blogInfo.category}
        </p>
        <img className="w-[60rem] h-[30rem] " src={blogInfo.image}></img>
        <p className="text-justify my-11">{blogInfo.postContent}</p>
      </section>
    </>
  );
};

export default BlogPage;
