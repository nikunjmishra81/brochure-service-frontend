import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Grid } from '@mui/material'
import config from '../config'

export default function PaginationComponent(props) {
  const {
    brochureQueryData,
    setBrochureQueryData,
    handleFetchBrochureData,
    totalBrochurePages = 0,
    defaultPage = config.defaultPage,
    paginationKey
  } = props
  const handlePageChange = page => {
    const updatedQuery = {
      ...brochureQueryData,
      page: page
    }
    setBrochureQueryData(updatedQuery)
    handleFetchBrochureData(updatedQuery)
  }

  return (
    <Grid item container className="pagination-component-grid">
      <Stack spacing={2}>
        <Pagination
          key={paginationKey}
          size="large"
          count={totalBrochurePages}
          defaultPage={defaultPage}
          showFirstButton
          showLastButton
          onChange={(e, page) => {
            handlePageChange(page)
          }}
        />
      </Stack>
    </Grid>
  )
}
