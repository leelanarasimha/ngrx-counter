export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export const initialState: SharedState = {
  showLoading: false,
  errorMessage: '',
};
