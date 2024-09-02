import React, { memo } from 'react';
import { User } from "@/types/user";
export const Record =  memo(({ user }: { user: User }) => {
  return (
    <div className="tableRow">
      <div className="tableCell">{user.name}</div>
      <div className="tableCell">{user.username}</div>
      <div className="tableCell">{user.email}</div>
      <div className="tableCell">{user.phone}</div>
    </div>
  );
});
