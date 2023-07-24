import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CategoryIcon from '@mui/icons-material/Category'
import { CardHeader, Skeleton } from '@mui/material'
import { LabelContants } from '../constants/LabelConstants'

export default function CityProudctInfoCards({
  titleHeader,
  header,
  imageURI,
  descp,
  Component = CategoryIcon,
  loading = false
}) {
  return (
    <Card className="main-card">
      <CardHeader title={titleHeader} />
      {loading ? (
        <Skeleton animation="wave" variant="rectangular" height={'7rem'} />
      ) : (
        <CardMedia style={{ height: '7rem' }} image={imageURI || `/default-city-image-2.jpeg`} />
      )}
      <CardContent style={{ padding: '13px' }}>
        {loading ? (
          <Skeleton className="search-city-typo set-margin" animation="wave" variant="rectangular" />
        ) : (
          <Typography className="search-city-typo set-margin" gutterBottom variant="h5" component="div">
            {header}
            <Component></Component>
          </Typography>
        )}

        {loading ? (
          <Skeleton animation="wave" variant="rectangular" height={'6.5rem'} />
        ) : (
          <Typography variant="body2" color="text.secondary">
            {descp?.substr(0, 200)}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
