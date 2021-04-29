import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Result({ result }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {result.map((data) => (
        <FlipMove key={data.id}>
          <Thumbnail resultThumnail={data} />
        </FlipMove>
      ))}
    </div>
  );
}

export default Result;
