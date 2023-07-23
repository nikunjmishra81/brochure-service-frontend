import config from '../config'
import ArticleIcon from '@mui/icons-material/Article'
import RememberMeIcon from '@mui/icons-material/RememberMe'
import SearchIcon from '@mui/icons-material/Search'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
export const ApiResponseStatusCodes = {
  CODE_200: 200,
  CODE_500: 500
}
export const initialFormState = {
  lat: config.defaultLat,
  lng: config.defaultLng,
  page: config.defaultPage,
  size: config.defaultPageSize,
  publisherId: '',
  query: ''
}

export const inputBoxProps = [
  {
    component: TravelExploreIcon,
    componentWidth: '90%',
    label: 'Latitude',
    key: 'lat',
    type: 'number'
  },
  {
    component: TravelExploreIcon,
    componentWidth: '90%',
    label: 'Longitude',
    key: 'lng',
    type: 'number'
  },
  {
    component: RememberMeIcon,
    componentWidth: '90%',
    label: 'Publisher ID',
    key: 'publisherId'
  },
  {
    component: ArticleIcon,
    componentWidth: '90%',
    label: 'Query',
    key: 'query'
  }
]
