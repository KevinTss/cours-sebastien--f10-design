import useFetch from "../useFetch";
import Layout from "../components/Layout";

const AlbumsPage = () => {
  const { datas: albums, isPending, error } = useFetch("albums");

  return (
    <Layout>
      <h1>All albums</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {albums &&
        albums.map((album) => (
          <div key={album.id}>
            <h4>{album.title}</h4>
          </div>
        ))}
    </Layout>
  );
};

export default AlbumsPage;
