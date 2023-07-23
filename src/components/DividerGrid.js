    import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DividerGrid() {

  return (
    <Grid item container className={'divider-grid-container'}>
        <Typography variant='h3' className='divider-grid-typo'> Brochures </Typography>
    </Grid>
  );
}