import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
function Thumbnail({ resultThumnail }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group p-2 cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${
            resultThumnail.results.backdrop_path ||
            resultThumnail.results.poster_path
          }` || `${BASE_URL}${resultThumnail.results.poster_path}`
        }
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{resultThumnail.results.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {resultThumnail.results.title || resultThumnail.results.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {resultThumnail.results.media_type &&
            `${resultThumnail.results.media_type} .`}
          {resultThumnail.results.release_date ||
            resultThumnail.results.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" />{" "}
          {resultThumnail.results.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
