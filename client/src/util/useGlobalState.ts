import { createState, useState } from "@hookstate/core";

export type AlertSeverity = "error" | "warning" | "info" | "success";

export interface SnackbarSchema {
  severity: AlertSeverity;
  open: boolean;
  message: string;
  duration: number;
}
export const initialSnackbarState: SnackbarSchema = {
  severity: "info",
  open: false,
  message: "",
  duration: 5000,
};

export interface GlobalStateSchema {
  snackbar: SnackbarSchema;
  loading: boolean;
}
export const initialState: GlobalStateSchema = JSON.parse(
  JSON.stringify({
    snackbar: initialSnackbarState,
    loading: false,
  })
);
export const globalState = createState(initialState);
export const useGlobalState = () => useState(globalState);

export default globalState;