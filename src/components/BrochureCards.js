import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardHeader, Grid, IconButton, Skeleton, Tooltip } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { LabelContants } from '../constants/LabelConstants'

export default function BrochureCards(props) {
  const { brochureData, loading = true } = props
  return (
    <Grid item container className="brochure-cards-main-grid">
      {loading
        ? [1, 2, 3, 4].map(item => {
            return (
              <Grid item lg={3} md={6} xs={12} sm={12} className="brochure-cards-individual-grid ">
                <Card className="brochure-data-card">
                  <CardContent>
                    {['2rem', '8rem', '4rem', '5rem'].map(heightMapped => {
                      return (
                        <Skeleton
                          animation="wave"
                          variant="rectangular"
                          height={heightMapped}
                          className="brochure-cards-skeleton-grid"
                        />
                      )
                    })}
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        : brochureData.map(item => {
            return (
              <Grid item lg={3} md={6} xs={12} sm={12} className="brochure-data-card-grid">
                <Card className="brochure-data-card">
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.title || 'Brochure Title'}
                    subheader={
                      <Typography className="common-font-family">
                        {<strong>{LabelContants.PUBLISHED_FROM} </strong>}
                        {Date(item.publishedFrom)
                          .toString()
                          .slice(0, 24)}
                      </Typography>
                    }
                  />
                  <CardMedia component="img" height="194" image={item?.brochureImages?.thumbnails} />
                  <CardContent>
                    <Typography className="publisher-details-typo" variant="h5" color="text.secondary">
                      <strong>{LabelContants.PUBLISHER_DETAILS}</strong>
                    </Typography>
                    <Typography className="publishar-details common-font-family" variant="body2" color="text.secondary">
                      <strong>{LabelContants.PUBLISHER_ID}</strong> {item.publisher.id}
                    </Typography>
                    <Typography className="publishar-details common-font-family" variant="body2" color="text.secondary">
                      <strong>{LabelContants.PUBLISHER_NAME}</strong>
                      {item.publisher.name}
                    </Typography>
                    <Typography className="publishar-details common-font-family" variant="body2" color="text.secondary">
                      <strong>{LabelContants.PUBLISHER_TYPE}</strong> {item.publisher.publisherType}
                    </Typography>
                    <Typography className="publishar-details common-font-family" variant="body2" color="text.secondary">
                      <strong>{LabelContants.BROCHURE_DESC}</strong> {item?.desciption?.substring(0, 150)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
    </Grid>
  )
}
