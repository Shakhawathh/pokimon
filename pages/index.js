import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Post from "./posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Launches }) {
  console.log("launches", Launches);
  return (
    <div className="bg-[url('https://i.ibb.co/ZWQD9mG/Background.png')] bg-cover ">
      <div className="grid sm:grid-cols-1 gap-12 mn md:grid-cols-2 lg:grid-cols-4 mb-2 mx-16 ">
        {Launches?.slice(0, 8)?.map((launch) => (
          <Post key={launch.id} launch={launch}></Post>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          message
          results {
            url
            name
            image
          }
        }
      }
    `,
  });
  console.log("data", data);
  return {
    props: {
      Launches: data?.pokemons?.results,
    },
  };
}
