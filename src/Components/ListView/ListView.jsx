// components/ListView/ListView.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';

const ListView = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers()); // Only fetch once
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading users...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username} | Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
