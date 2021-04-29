import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import request from "../utils/request";

export default function Home({ res }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      <Nav />
      <Result result={res} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const data = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  );
  const reqData = await data.json();
  return {
    props: {
      res: reqData,
    },
  };
}
