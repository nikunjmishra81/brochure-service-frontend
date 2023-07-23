import { object } from 'prop-types'
import React from 'react'
import CityProudctForm from '../src/components/CityProduct'
import DividerGrid from '../src/components/DividerGrid'
import Navbar from '../src/components/Navbar'
import { API_URLS } from '../src/constants/apiUrls'
import { serverApiRequest } from '../src/libs/api'
import { handleErrorInitialProps } from '../src/libs/errorHandler'

const BrochurePage = (initData) => {
  // prepare initial data & param  
  return (
    <>
    <Navbar></Navbar>
    <CityProudctForm {...initData.data} city={initData.city} product = {initData.product}></CityProudctForm>
    
   </>
  )
}
BrochurePage.getInitialProps = async ({ query, isServer, req, res }) => {
  let initData = {}
  try {
    
    const  {city, product} = req.params
    const path = API_URLS.CITY_PRODUCT_INFO + `/${city}/${product}`
    const requestConfig = { method: 'get', path }
    const response = await serverApiRequest(requestConfig)    
    const {data} = response
    initData = { data, city, product}
    return initData
  } catch (error) {
    return handleErrorInitialProps(res, error)
  }
}
BrochurePage.propTypes = {
  initData: object
}

export default BrochurePage
