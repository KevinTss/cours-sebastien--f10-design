import useFetch from "../useFetch";

const AlbumsPage = () => {
  const { datas: albums, isPending, error } = useFetch("https://jsonplaceholder.typicode.com/albums");

  return (
    <div>
      <h1>All albums</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {albums && albums.map((album) => (
          <div key={album.id}>
            <h4>{album.title}</h4>
          </div>
        ))}
    </div>
  );
};

export default AlbumsPage;
