import axios from "axios";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const [myPosts, setMyPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/posts", {
        withCredentials: true,
      });
      //const getUserLocal = JSON.parse(localStorage.getItem("user"));
      //setUser(getUserLocal);
      setMyPosts(response.data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const deletePost = async (slug) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/posts/${slug}`,
        { withCredentials: true }
      );
      alert(response.data.message);
      getMyPosts();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[1122px] mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-7">Selamat Datang, {user}</h1>
        <hr className="border-2 border-black mb-7" />
        <Link to={"/api/posts"}>
          <Button name="+ Posting Berita" />
        </Link>

        {myPosts?.length > 0 ? (
          <table className="w-full border-2 border-black mt-7">
            <thead>
              <tr className="border-b border-black">
                <th className="py-2">No.</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Post</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((myPost, index) => {
                return (
                  <tr
                    className="text-center border-2 border-gray-600 content-center"
                    key={myPost.id}
                  >
                    <td>{index + 1}</td>
                    <td>{myPost.title}</td>
                    <td>{myPost.category?.name}</td>
                    <td>{myPost.createdAt}</td>
                    <td className="flex gap-2 justify-center items-baseline py-2">
                      <span>detail</span>
                      <span className="text-yellow-700">
                        <Link to={`/api/posts/${myPost?.slug}`}>update</Link>
                      </span>
                      <span
                        onClick={() => deletePost(myPost.slug)}
                        className="text-red-700 hover:cursor-pointer"
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center w-full font-semibold text-2xl">
            <p>You haven&apos;t uploaded Posts</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
