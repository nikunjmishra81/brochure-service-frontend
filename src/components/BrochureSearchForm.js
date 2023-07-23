import SearchIcon from '@mui/icons-material/Search'
import { Grid } from '@mui/material'
import * as React from 'react'
import { inputBoxProps } from '../constants/commonConstants'
import { LabelContants } from '../constants/LabelConstants'
import { makeid } from '../constants/utility'
import { ColorButton } from './CityProduct'
import InputWithIcon from './TextBoxUserInput'

export default function BrochureSearchForm(props) {
  const { brochureQueryData, setBrochureQueryData, handleFetchBrochureData, setPaginationKey } = props

  return (
    <>
      <Grid item container className="brochure-search-fields-main-grid">
        {inputBoxProps.map(item => {
          return (
            <Grid className="brochure-search-fields-grid" item lg={2} md={6} sm={10} xs={12}>
              <InputWithIcon
                {...item}
                value={brochureQueryData[item.key]}
                onChange={e =>
                  setBrochureQueryData(currentData => {
                    return {
                      ...currentData,
                      [item.key]: e?.target?.value
                    }
                  })
                }
              />
            </Grid>
          )
        })}
        <Grid item className="brochure-search-button-grid" lg={2} md={6} sm={12} xs={12}>
          <ColorButton
            onClick={() => {
              setBrochureQueryData({ ...brochureQueryData, page: 1 })
              handleFetchBrochureData({ ...brochureQueryData, page: 1 })
              setPaginationKey(makeid(6))
            }}
            variant="contained"
            className="search-brochure-button"
            disabled={brochureQueryData.lat === '' || brochureQueryData.lng === ''}
          >
            {' '}
            {LabelContants.SEARCH_BROCHURE}
            <SearchIcon className="search-icon"></SearchIcon>
          </ColorButton>
        </Grid>
      </Grid>
    </>
  )
}
