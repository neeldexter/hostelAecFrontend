import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({open,setOpen,handleClose,severity,msg}) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar  open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity={severity}>{msg}
        {/* Your registration has been initiated . Administrator will review and update soon. !! */}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
