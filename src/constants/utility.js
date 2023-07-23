import config from '../config'
import { LabelContants } from './LabelConstants'

export function isValidHttpUrl(string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

export function checkIfImageURL(url) {
  const isUrl = isValidHttpUrl(url)
  if (!url) {
    return false
  }
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null
}

export const showToaster = (toaster, cityData = null, productData = null) => {
  if (!cityData & !productData) {
    toaster.error(LabelContants.NO_DATA_FOR_THIS_CITY_AND_PRODUCT, {
      autoClose: config.toasterCloseTime
    })
    return
  }
  if (!cityData) {
    toaster.info(LabelContants.NO_DATA_FOR_CITY, {
      autoClose: config.toasterCloseTime
    })
    return
  }
  if (!productData) {
    toaster.info(LabelContants.NO_DATA_FOR_PRODUCT, {
      autoClose: config.toasterCloseTime
    })
    return
  } else {
    toaster.success(LabelContants.DATA_FETCHED_SUCCESSFULLY, {
      autoClose: config.toasterCloseTime
    })
  }
}

export function makeid(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
