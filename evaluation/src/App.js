import React, { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "./api/api";
import Loading from "./components/Loading";
import Error from "./components/Error";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const postPerPage = 10;

  useEffect(() => {
    async function loadData() {
      try {
        const [postData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers(),
        ]);

        const userMap = {};
        usersData.forEach((user) => {
          userMap[user.id] = user.username;
        });

        setPosts(postData);
        setUsers(userMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const startIndex = (page - 1) * postPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postPerPage);

  return (
    <div>
      <header className="header">Post Feed</header>

      <PostList posts={paginatedPosts} users={users} />

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        <button
          disabled={startIndex + postPerPage >= posts.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
