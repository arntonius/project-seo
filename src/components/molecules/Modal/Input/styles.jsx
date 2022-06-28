/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

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
        margin: '0px 50px'
    }
})

const textHeader = css({
    color: '#3B82F6',
    fontSize: 18,
    paddingRight: 20,
    [mq[0]]: {
        fontSize: 28
    }

})

const inputText = css({
    marginTop: 30,
    border: 0,
    backgroundColor: '#E7E5E4',
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

const subContent = css({
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#FAFAF9',
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

const textList = css({
    fontSize: 14,
    padding: 10,
    borderBottom: '2px solid #E7E5E4',
    [mq[0]]: {
        fontsize: 18,
        padding: 15,
    }
})

const textInfo = css({
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
    margin: 0,
    paddingTop: 10
})

export const styles = {
    modal,
    content,
    textHeader,
    inputText,
    bundleButton,
    subContent,
    bundleTitle,
    iconTimes,
    textList,
    textInfo
}