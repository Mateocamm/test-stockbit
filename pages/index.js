import Layout from "../components/UI/Layout";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <Layout>
      <SearchForm />
      <MovieList />
    </Layout>
  );
}

export default Home;
