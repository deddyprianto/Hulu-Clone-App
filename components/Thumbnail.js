import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ resultThumnail }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      key={resultThumnail.id}
      className="group p-2 cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${
            resultThumnail.backdrop_path || resultThumnail.poster_path
          }` || `${BASE_URL}${resultThumnail.poster_path}`
        }
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{resultThumnail.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {resultThumnail.title || resultThumnail.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {resultThumnail.media_type && `${resultThumnail.media_type} .`}
          {resultThumnail.release_date || resultThumnail.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {resultThumnail.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
