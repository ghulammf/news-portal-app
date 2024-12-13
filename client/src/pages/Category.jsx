import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Category() {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/posts/categories/${category}`
      );
      setPosts(response.data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full my-7 flex flex-wrap justify-center gap-3">
      {posts.length == 0 ? (
        <p>News Content haven&apos;t been available</p>
      ) : (
        posts.map((post) => {
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
        })
      )}
    </div>
  );
}

export default Category;
