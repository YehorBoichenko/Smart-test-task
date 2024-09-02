/**
 * `Table` component displays a table of users with filter options.
 *
 * This component fetches user data on mount and provides input fields to filter
 * the displayed users based on the provided headers: Name, Username, Email, and Phone.
 * 
 * It also handles the loading state, error handling, and displays a message
 * if no results are found.
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @component
 * 
 * @example
 * ```jsx
 * <Table />
 * ```
 */
'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTypedDispatch, useUserFilterSelector } from '@/shared/utils/hooks';
import { fetchUsers } from '@/store/reducers/userCreator';
import { Record } from '@/shared/components/Record';
import { filterSlice } from '@/store/reducers/filterSlice';
import { SearchIcon } from '@/shared/components/SearchIcon';
import { NoItems } from '@/shared/components/NoItems';

export const Table = () => {
  // Destructuring the state related to users from the custom hook
  const { users, error, isLoading, noResultsFound } = useUserFilterSelector();
  
  // Dispatch function for Redux actions
  const dispatch = useTypedDispatch();
  
  // State to track if initial data is still loading
  const [initialLoading, setInitialLoading] = useState(true);

  // Fetch users on component mount and update loading state
  useEffect(() => {
    dispatch(fetchUsers()).finally(() => {
      setInitialLoading(false);
    });
  }, [dispatch]);

  // Handle errors by logging them and displaying an error message
  if (error) {
    console.error(error);
    return <div className="error">Hmmm....Something went wrong</div>;
  }

  /**
   * Handles filter input changes and updates the filter state in the Redux store.
   * 
   * @param {string} header - The header name corresponding to the filter being updated.
   * @param {ChangeEvent<HTMLInputElement>} event - The event object from the input change event.
   */
  const handleFilterChange = (
    header: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
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
        {initialLoading ? (
          <div className="loaderWrapper">
                    <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
          </div>
        ) : noResultsFound ? (
          <NoItems />
        ) : (
          users.map((user) => <Record key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};