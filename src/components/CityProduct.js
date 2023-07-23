import CategoryIcon from '@mui/icons-material/Category'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PlaceIcon from '@mui/icons-material/Place'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { getCityProductData } from '../api/apiFunctions'
import config from '../config'
import { ApiResponseStatusCodes, initialFormState } from '../constants/commonConstants'
import { LabelContants } from '../constants/LabelConstants'
import { checkIfImageURL, showToaster } from '../constants/utility'
import BrochureCardGrid from './BrochureCardGrid'
import CityProudctInfoCards from './CityProductInfoCards'
import DividerGrid from './DividerGrid'
import InputWithIcon from './TextBoxUserInput'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '19rem',
  lineHeight: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: '1rem',
  width: '80%',
  alignItems: 'center'
}))

export const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#009347'
  }
}))
export default function CityProudctForm(props) {
  const [city, setCity] = React.useState(props?.City)
  const [cityName, setCityName] = React.useState(props?.city)
  const [product, setProduct] = React.useState(props?.Product)
  const [productName, setProductName] = React.useState(props?.product)
  const [loadingData, setLoadingData] = React.useState(false)
  const [loadingBrochureCards, setLoadingBrochureCards] = React.useState(false)
  const [brochureQueryData, setBrochureQueryData] = React.useState(initialFormState)
  const [brochureData, setBrochureData] = React.useState([])
  const [totalBrochurePages, setTotalBrochurePages] = React.useState(0)

  const setDataLoading = (condition, value) => {
    if (condition) {
      setLoadingData(value)
      setLoadingBrochureCards(value)
    } else {
      setLoadingBrochureCards(value)
    }
  }

  const handleFetchData = async (
    cityData = cityName,
    productData = productName,
    setCityProduct = true,
    queryParamsObj = brochureQueryData
  ) => {
    try {
      const queryParams = new URLSearchParams(queryParamsObj).toString()
      setDataLoading(setCityProduct, true)
      const response = await getCityProductData(`/${cityData}/${productData}?${queryParams}`)
      if (response.status === ApiResponseStatusCodes.CODE_200) {
        if (setCityProduct) {
          setBrochureQueryData(initialFormState)
          setCity(
            response.data.City
              ? response.data.City
              : { name: cityName, description: LabelContants.NO_DATA_FOR_CITY, url: '' }
          )
          setProduct(
            response.data.Product
              ? response.data.Product
              : { name: productName, description: LabelContants.NO_DATA_FOR_PRODUCT, url: '' }
          )
          showToaster(toast, response.data.City, response.data.Product)
        }
        if (response?.data?.brochureData) {
          setBrochureData(response?.data?.brochureData?.data?._embedded?.brochures)
          setTotalBrochurePages(response?.data?.brochureData?.data?.page?.totalPages)
          // Checking if brochure data's length is zero
          if (!response?.data?.brochureData?.data?._embedded?.brochures?.length) {
            toast.info(LabelContants.NO_BROCHURES_FOUND, {
              autoClose: config.toasterCloseTime
            })
            setTotalBrochurePages(0)
          }
        } else {
          toast.error('Failed to brochure data', {
            autoClose: config.toasterCloseTime
          })
          setBrochureData([])
          setTotalBrochurePages(0)
        }
      }
    } catch {
      toast.error('Failed to fetch data', {
        autoClose: config.toasterCloseTime
      })
    } finally {
      setDataLoading(true, false)
    }
  }

  React.useEffect(async () => {
    handleFetchData(props.city, props.product)
  }, [])

  return (
    <>
      <ToastContainer autoClose={config.toasterCloseTime} position={toast.POSITION.TOP_RIGHT} />
      <Grid container className={'main-grid-city-product-form'}>
        <Grid item container className="city-form-grid" lg={3} md={4} sm={6}>
          <Item key={6} elevation={6}>
            <Typography variant="h5" className="search-city-typo">
              {' '}
              {`${LabelContants.SEARCH_CITY_PRODUCT}`}
            </Typography>
            <InputWithIcon
              disabled={loadingData}
              onChange={e => setCityName(e.target.value)}
              component={LocationCityIcon}
              value={cityName}
              label={LabelContants.CITY}
            ></InputWithIcon>
            <InputWithIcon
              disabled={loadingData}
              onChange={e => setProductName(e.target.value)}
              component={ProductionQuantityLimitsIcon}
              value={productName}
              label={LabelContants.PRODUCT}
            ></InputWithIcon>
            <ColorButton
              className="search-button"
              variant="contained"
              disabled={!cityName || !productName || loadingData}
              onClick={() => handleFetchData()}
            >
              {' '}
              {LabelContants.SEARCH}
              <SearchIcon className="search-icon"></SearchIcon>
            </ColorButton>
          </Item>
        </Grid>
        <Grid item container className="city-descp-grid" lg={8} md={4} sm={6}>
          <CityProudctInfoCards
            loading={loadingData}
            header={`${LabelContants.ABOUT_CITY}  ${city?.name || 'Not found'}`}
            imageURI={checkIfImageURL(city?.url) ? city?.url : '/default-city-image.jpeg'}
            descp={city?.description}
            Component={PlaceIcon}
            onChange={e => setCityName(e.target.value)}
          ></CityProudctInfoCards>
          <CityProudctInfoCards
            loading={loadingData}
            header={`${LabelContants.ABOUT_PRODUCT}  ${product?.name || 'Not found'}`}
            imageURI={checkIfImageURL(product?.url) ? product?.url : '/default-product-image.jpeg'}
            descp={product?.description}
            Component={CategoryIcon}
            onChange={e => setProductName(e.target.value)}
          ></CityProudctInfoCards>
        </Grid>
        <DividerGrid></DividerGrid>
        <Grid item container className="brochure-search-main-grid-background">
          <Grid item lg={0.25} md={0.5} xs={0.5} className="empty-grids"></Grid>
          <BrochureCardGrid
            loading={loadingBrochureCards}
            brochureQueryData={brochureQueryData}
            setBrochureQueryData={setBrochureQueryData}
            brochureData={brochureData}
            handleFetchBrochureData={brochureQuery => handleFetchData(cityName, productName, false, brochureQuery)}
            totalBrochurePages={totalBrochurePages}
          ></BrochureCardGrid>
          <Grid item lg={0.25} md={0.5} xs={0.5} className="empty-grids"></Grid>
        </Grid>
      </Grid>
    </>
  )
}
