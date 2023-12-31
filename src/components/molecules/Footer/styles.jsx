/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../../utils'

const footer = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0px',
    marginTop: 100
})

const textFooter = css({
    textAlign: 'center',
    marginBottom: 20
})

const footerInfo = css({
    display: 'flex',
    marginTop: 15
})

const iconInfo = css({
    fontSize: 20,
    color: 'black',
    padding: '0px 10px',
    ':hover': {
        color: colors.primary
    }
})

export const styles = {
    footer,
    textFooter,
    footerInfo,
    iconInfo
}