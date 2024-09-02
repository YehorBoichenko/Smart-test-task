/**
 * `Record` component displays user information in a table row format.
 * 
 * @component
 * @param {Object} props - The props for the component.
 * @param {User} props.user - The user object containing user details.
 * @returns {JSX.Element} A table row displaying user information.
 * 
 * @example
 * const user = {
 *   name: "John Doe",
 *   username: "johndoe",
 *   email: "john.doe@example.com",
 *   phone: "123-456-7890"
 * };
 * 
 * <Record user={user} />
 */
import React, { memo } from 'react';
import { User } from '@/types/user';
export const Record = memo(({ user }: { user: User }) => {
  return (
    <div className="tableRow">
      <div className="tableCell">{user.name}</div>
      <div className="tableCell">{user.username}</div>
      <div className="tableCell">{user.email}</div>
      <div className="tableCell">{user.phone}</div>
    </div>
  );
});
