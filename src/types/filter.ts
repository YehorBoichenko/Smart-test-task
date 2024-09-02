export interface FilterState {
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
}

export const initialFilterState: FilterState = {
  name: undefined,
  username: undefined,
  email: undefined,
  phone: undefined,
};
