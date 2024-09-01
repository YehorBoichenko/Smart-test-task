'use client';

import { useEffect } from 'react';
import { useTypedDispatch, useUserFilterSelector } from '@/shared/utils/hooks';
import { fetchUsers } from '@/store/reducers/userCreator';
import { User } from '@/types/user';
import styles from '@/shared/components/Table.module.css';
import { filterSlice } from '@/store/reducers/filterSlice';

export const Table = () => {
  const { users, error, isLoading } = useUserFilterSelector();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div className={styles.error}>Hmmm....Something went wrong</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        {['Name', 'Username', 'Email', 'Phone'].map((header) => (
          <div key={header} className={styles.headerCell}>
            <div>{header}</div>
            <div className={styles.filterWrapper}>
              <SearchIcon />
              <input
                className={styles.filterInput}
                placeholder={`${header} filter`}
                onChange={(e) =>
                  dispatch(
                    filterSlice.actions.updateFilters({
                      [header.toLowerCase()]: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {users.map((user) => (
          <Record key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const Record = ({ user }: { user: User }) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>{user.name}</div>
      <div className={styles.tableCell}>{user.username}</div>
      <div className={styles.tableCell}>{user.email}</div>
      <div className={styles.tableCell}>{user.phone}</div>
    </div>
  );
};

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#7E7E7E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35"
    />
  </svg>
);
