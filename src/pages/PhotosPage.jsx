import useFetch from "../useFetch";

const CommentsPage = () => {
  const {datas: photos, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/photos')

  return (
    <div>
      <h1>All photos</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {photos &&
        photos.map((photo) => (
          <div key={photo.id}>
            <h4>Album n° {photo.albumId}</h4>
            {photo.title}<br/>
            <img src={photo.thumbnailUrl} alt=""/>
            <br/>
          </div>
        ))}
    </div>
  );
};

export default CommentsPage;
