import { Link } from "react-router-dom";
import Tagline from "./Tagline";

function Card({ key, title, slug, image, author, category, createdAt }) {
  const getDate = new Date(createdAt);
  const formatDate = getDate.toLocaleDateString("en-Us", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  return (
    <Link to={`/posts/${slug}`}>
      <div
        className="w-[350px] h-[366px] shadow-xl rounded-[10px] overflow-hidden"
        key={key}
      >
        <figure className="w-full h-[197px] overflow-hidden">
          <img
            src={image}
            alt="Image News"
            className="w-full h-full object-cover object-center"
          />
        </figure>
        <div className="px-6 py-[5px]">
          <div className="h-[79px]">
            <p className="text-base sm:text-lg font-semibold">{title}</p>
          </div>
          <div className="h-[40px] text-sm sm:text-base content-center">
            <Tagline name={category} />
          </div>
          <div className="h-[40px] content-center">
            <p className="text-xs sm:text-sm">
              by <b>{author}</b>, {formatDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
