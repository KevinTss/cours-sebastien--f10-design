import useFetch from "../useFetch";
import Layout from "../components/Layout";

const CommentsPage = () => {
  const { datas: photos, isPending, error } = useFetch("photos");

  return (
    <Layout>
      <h1>All photos</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {photos &&
        photos.map((photo) => (
          <div key={photo.id}>
            <h4>Album n° {photo.albumId}</h4>
            {photo.title}
            <br />
            <img src={photo.thumbnailUrl} alt="" />
            <br />
          </div>
        ))}
    </Layout>
  );
};

export default CommentsPage;
