import useFetch from "../useFetch";
import Layout from "../components/Layout";

const UsersPage = () => {
  const { datas: users, isPending, error } = useFetch("users");

  return (
    <Layout>
      <h1>All users</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h4>
              {user.name} - <i>{user.username}</i>
            </h4>
            {user.email}
            <br />
            {user.address.zipcode} | {user.address.city}
            <br />
            {user.phone}
            <br />
            {user.website}
            <br />
            <br />
          </div>
        ))}
    </Layout>
  );
};

export default UsersPage;
