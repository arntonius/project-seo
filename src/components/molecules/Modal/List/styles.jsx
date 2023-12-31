/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { colors } from '../../../../utils'

const breakpoints = [992]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const modal = css({
    backgroundColor: 'rgba(0, 0, 0, 0.8);',
    width: '100%',
    height: '100%',
    zIndex: 10,
    top: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center'
})

const content = css({
    paddingTop: '20%',
    margin: '0px 16px',
    [mq[0]]: {
        paddingTop: '10%',
        margin: '0px 50px'
    }
})

const textHeader = css({
    color: colors.primary,
    fontSize: 18,
    paddingRight: 20,
    [mq[0]]: {
        fontSize: 28
    }

})

const inputText = css({
    marginTop: 30,
    border: 0,
    backgroundColor: colors.tertiaryGrey,
    padding: '15px 20px',
    borderRadius: 10,
    fontSize: 16,
    ':focus': {
        outline: 0
    },
    [mq[0]]: {
        fontSize: 20,
        width: '80%',

    }
})

const bundleButton = css({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 80,
    margin: '80px 0px 10px 0px'
})

const buttonCancel = css({
    backgroundColor: colors.primaryError,
    border: 0,
    margin: 0,
    padding: '0px 20px',
    borderRadius: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: colors.secondaryError
    },
    [mq[0]]: {
        fontSize: 18,
        borderRadius: 15,
        padding: '0px 30px',

    }
})


const buttonSave = css({
    backgroundColor: colors.primary,
    border: 0,
    margin: 0,
    padding: '0px 20px',
    borderRadius: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    ':hover': {
        backgroundColor: colors.secondary
    },
    [mq[0]]: {
        fontSize: 18,
        borderRadius: 15,
        padding: '0px 30px',

    }
})

const subContent = css({
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
    borderRadius: 20,
    backgroundColor: colors.secondaryWhite,
    [mq[0]]: {
        width: 600
    }
})

const bundleTitle = css({
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center'
})

const iconTimes = css({
    fontSize: 24,
    color: 'gray',
    [mq[0]]: {
        fontSize: 30
    }
})

const textListInActive = css({
    fontSize: 14,
    padding: 10,
    [mq[0]]: {
        fontsize: 18,
        padding: 15,
    }
})

const textListActive = css({
    fontSize: 14,
    padding: 10,
    backgroundColor: colors.tertiaryGrey,
    borderRadius: 10,
    [mq[0]]: {
        fontsize: 18,
        padding: 15,
    }
})

const textInfo = css({
    fontSize: 18,
    fontStyle: 'italic',
    color: colors.primaryGrey,
    margin: 0,
    paddingTop: 10
})

export const styles = {
    modal,
    content,
    textHeader,
    inputText,
    bundleButton,
    buttonCancel,
    buttonSave,
    subContent,
    bundleTitle,
    iconTimes,
    textListInActive,
    textListActive,
    textInfo
}