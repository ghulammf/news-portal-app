import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tagline from "../components/Tagline";
import Topic from "../components/Topic";

function Post() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  const getPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/posts/${slug}`);
      setPosts(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getDate = new Date(posts.createdAt);
  const formatDate = getDate.toLocaleDateString("en-Us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <main className="max-w-[95%] xl:max-w-[1122px] m-auto my-5 sm:my-7 md:my-12 ">
        <Link to={`/posts/categories/${posts.category?.name}`}>
          <Tagline name={posts.category?.name || "#category"} />
        </Link>
        <h1 className="font-semibold text-lg sm:text-2xl md:text-4xl my-4">
          {posts.title}
        </h1>
        <section className="md:flex justify-between gap-3">
          <article className="w-full max-w-[760px]">
            <figure className="my-4">
              <img
                src={posts.image}
                alt="News Image"
                className="w-full aspect-[16/9] object-cover object-center"
              />
            </figure>
            <div className="my-4">
              <span className="text-xs sm:text-sm md:text-base">
                by <b>{posts.user?.name || "#author"}</b>, {formatDate}
              </span>
            </div>
            <div className="my-4">
              <p className="text-sm sm:text-base">{posts.content}</p>
            </div>
          </article>
          <aside className="w-full max-w-[325px] text-sm sm:text-base text-left ">
            <Topic name="Kategori" />
            <p className="text-[#5271ff] hover:font-semibold">
              <Link to={`/posts/categories/nasional`}># Nasional</Link>
            </p>
            <p className="text-[#5271ff] hover:font-semibold">
              <Link to={`/posts/categories/kesehatan`}># Kesehatan</Link>
            </p>
            <p className="text-[#5271ff] hover:font-semibold">
              <Link to={`/posts/categories/politik`}># Politik</Link>
            </p>
            <p className="text-[#5271ff] hover:font-semibold">
              <Link to={`/posts/categories/opini`}># Opini</Link>
            </p>
            <p className="text-[#5271ff] hover:font-semibold">
              <Link to={`/posts/categories/budaya`}># Budaya</Link>
            </p>
          </aside>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default Post;
