import { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full justify-center my-7 flex flex-wrap gap-3 ">
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            slug={post.slug}
            image={post.image}
            author={post.user.name}
            category={post.category.name}
            createdAt={post.createdAt}
          />
        );
      })}
    </div>
  );
}

export default Home;
