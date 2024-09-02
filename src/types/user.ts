export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserState {
  loading: boolean;
  error: string | null;
  userList: User[];
}

export const initialState: UserState = {
  loading: false,
  error: null,
  userList: [],
};