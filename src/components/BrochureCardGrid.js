import { Button, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { DUMMY_DATA } from '../constants/dummydata'
import { makeid } from '../constants/utility'
import BrochureCards from './BrochureCards'
import PaginationComponent from './BrochurePagination'
import BrochureSearchForm from './BrochureSearchForm'

export default function BrochureCardGrid(props) {
  const [paginationKey, setPaginationKey] = React.useState(makeid(5))
  return (
    <>
      <Grid item container lg={11.5} md={11} xs={11} style={{ height: 'max-content' }}>
        <BrochureSearchForm setPaginationKey={setPaginationKey} {...props} />
        <BrochureCards brochureData={DUMMY_DATA.brochures} {...props}></BrochureCards>
        <PaginationComponent paginationKey={paginationKey} {...props}></PaginationComponent>
      </Grid>
    </>
  )
}
