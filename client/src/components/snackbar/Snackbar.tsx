import { useGlobalState } from "../../util/useGlobalState";
import MuiSnackbar from "@material-ui/core/Snackbar";
import React, { FunctionComponent } from "react";
import { Alerts, AlertProps } from "./Alert";


export interface SnackbarProps {
  severity?: AlertProps["severity"];
  message?: string;
  duration?: number;
  open?: boolean;
}
export const Snackbar: FunctionComponent<SnackbarProps> = () => {
  const { snackbar } = useGlobalState();
  const message = snackbar.message.get();
  const severity: AlertProps["severity"] = snackbar.severity.get();
  const open = snackbar.open.get();
  const reset = () => {
    snackbar.merge({
      severity: "info",
      message: "",
      open: false,
    });
  };
  const handleClose = (
    _: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    reset();
  };
  return (
    <MuiSnackbar
      style={{ zIndex: 99999 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={snackbar.duration.get()}
      onClose={handleClose}
      message={message}
    >
      <Alerts
        severity={severity}
        message={message}
        onClose={reset}
        isOpen={open}
      />
    </MuiSnackbar>
  );
};
export default Snackbar;