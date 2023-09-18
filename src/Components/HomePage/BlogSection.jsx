import { useContext, useState } from "react";
import Context from "../../Store/Context";
import Blog from "./BlogThumbNail";

const DUMMY_BLOG = [
  {
    id: 1,
    category: "web",
    author: { name: "Bharath" },
    image:
      "https://wallpapers.com/images/hd/anime-aesthetic-pictures-lqtumoq8zq18qvfs.jpg",
    title: "This is a Blog",
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet veniam a, accusamus et beatae provident, numquam molestias voluptatibus dolor atque dicta omnis quae voluptatem laudantium aut itaque soluta corrupti!",
  },
  {
    id: 2,
    category: "tourist",
    author: { name: "Bharath" },
    image:
      "https://wallpapers.com/images/hd/anime-aesthetic-pictures-lqtumoq8zq18qvfs.jpg",
    title: "This is a Blog",
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet veniam a, accusamus et beatae provident, numquam molestias voluptatibus dolor atque dicta omnis quae voluptatem laudantium aut itaque soluta corrupti!",
  },
  {
    id: 3,
    category: "place",
    author: { name: "Bharath" },
    image:
      "https://wallpapers.com/images/hd/anime-aesthetic-pictures-lqtumoq8zq18qvfs.jpg",
    title: "This is a Blog",
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet veniam a, accusamus et beatae provident, numquam molestias voluptatibus dolor atque dicta omnis quae voluptatem laudantium aut itaque soluta corrupti!",
  },
];

const BlogSection = () => {
  const { postList } = useContext(Context);

  const [filterBlog, setFilterBlog] = useState(postList);
  const filterHandler = (e) => {
    const filter = postList.find((post) =>
      post.category.includes(e.target.value)
    );
    setFilterBlog(filter);
  };

  return (
    <>
      <div className="mt-4 mx-[41%] inline-block relative">
        <input
          className="border py-[0.3rem] px-6 rounded-3xl"
          type="text"
          onChange={filterHandler}
          placeholder="Search By Cateogry"
        />
        <button className="absolute bg-tertiary rounded-3xl px-2 top-[0.4rem] right-3">
          Go
        </button>
      </div>
      <section className="grid grid-cols-3 gap-8 px-12 mt-8 w-full">
        {postList.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </section>
    </>
  );
};

export default BlogSection;
