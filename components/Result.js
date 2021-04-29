import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Result({ result }) {
  return (
    <div className="flex items-center justify-center">
      {result.map((data) => (
        <FlipMove key={data.id}>
          <Thumbnail resultThumnail={data} />
        </FlipMove>
      ))}
    </div>
  );
}

export default Result;
