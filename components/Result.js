import Thumbnail from "./Thumbnail";

function Result({ result }) {
  return (
    <div className="px-5 my-10">
      <Thumbnail resultThumnail={result} />
    </div>
  );
}

export default Result;
