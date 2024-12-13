import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(0);
  const [content, setContent] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const slugUpdate = title.trim().toLowerCase().replaceAll(" ", "-");

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/posts/${slug}`,
        { withCredentials: true }
      );
      setTitle(response.data.data.title);
      setImage(response.data.data?.image);
      setCategory(response.data.data?.category?.id);
      setContent(response.data.data?.content);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slugUpdate);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("content", content);

    try {
      const response = await axios.put(
        `http://localhost:7000/api/posts/${slug}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[1122px] h-fit py-10 my-20 rounded-[10px] shadow-xl">
        <form
          action=""
          onSubmit={handleUpdate}
          className="grid justify-items-center gap-3"
        >
          {/* Field input news title */}
          <div className="grid gap-2">
            <label htmlFor="title">Judul Berita</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[1000px] h-[36px] border-2 rounded-[10px] px-[18px]"
              required
            />
          </div>
          {/* Field input news slug */}
          <div className="grid gap-2">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              id="slug"
              value={slugUpdate}
              className="w-[1000px] h-[36px] border-2 rounded-[10px] px-[18px]"
              required
              readOnly
            />
          </div>
          {/* Field input news category */}
          <div className="grid gap-2">
            <label htmlFor="category">Kategori</label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-[1000px] h-[36px] rounded-[10px] border-2 px-[18px]"
            >
              <option value={1}>Nasional</option>
              <option value={2}>Kesehatan</option>
              <option value={3}>Opini</option>
              <option value={4}>Politik</option>
              <option value={5}>Budaya</option>
            </select>
          </div>
          {/* Field input file image */}
          <div className="grid gap-2">
            <label htmlFor="image">Gambar</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[1000px] h-[36px] rounded-[10px] border-2 px-[18px] content-center"
              required
            />
          </div>
          {/* Field input news content */}
          <div className="grid gap-2 mb-7">
            <label htmlFor="content">Isi Berita</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-[1000px] h-[321px] rounded-[10px] border-2 px-[18px] py-3"
            ></textarea>
          </div>
          <Button name="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Update;
