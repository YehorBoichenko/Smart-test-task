'use client';
import { ChangeEvent, useEffect } from 'react';
import { useTypedDispatch, useUserFilterSelector } from '@/shared/utils/hooks';
// import styles from '@/shared/components/Table.module.css';
import { fetchUsers } from '@/store/reducers/userCreator';
import { Record } from '@/shared/components/Record';
import { filterSlice } from '@/store/reducers/filterSlice';
import { SearchIcon } from '@/shared/components/SearchIcon';

export const Table = () => {
  const { users, error, isLoading } = useUserFilterSelector();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div className="error">Hmmm....Something went wrong</div>;
  }
  const handleFilterChange = (header: string, event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      filterSlice.actions.updateFilters({
        [header.toLowerCase()]: event.target.value,
      })
    );
  };

  return (
    <div className="tableContainer">
      <div className="tableHeader">
        {['Name', 'Username', 'Email', 'Phone'].map((header) => (
          <div key={header} className="headerCell">
            <div>{header}</div>
            <div className="filterWrapper">
              <SearchIcon />
              <input
                className="filterInput"
                placeholder={`${header} filter`}
                onChange={(e) => handleFilterChange(header, e)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="tableBody">
        {users.map((user) => (
          <Record key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
