import ActionLayout from "../components/ActionLayout";

const NewCommentPage = () => {
  return (
    <ActionLayout>
      <h1>Create new comment</h1>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="submit" value="Submit" />
      </form>
    </ActionLayout>
  );
};

export default NewCommentPage;
