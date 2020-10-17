import {getSentenceCase, getName} from '../utils/stringUtils'

const surroundWithHtmlTag = (htmlText, tag='div') => {
    return `<${tag}> ${htmlText} </${tag}>`
}
const addLineBreak = (tag='br') => {
    return `<${tag} />`
}
const convertImage2LogoHtmlText = ( imageObj ) => {
    let logoText = `<img src=${imageObj.image} alt=${imageObj.altText}></img>`
    logoText = surroundWithHtmlTag(logoText, 'div')
    logoText = surroundWithHtmlTag(logoText, 'nav')
    return logoText
}
const convertText2Html = (text) => {
    return surroundWithHtmlTag(text, 'div')
}
const addTableRow = (key, value, tag = 'th') => {
    let col1 = surroundWithHtmlTag(key, tag)  // title
    let col2 = surroundWithHtmlTag(value, tag)    // value
    return surroundWithHtmlTag(`${col1} ${col2}`, 'tr')
}

const convertFormData2HtmlTable = (formObject) => {
    let strObject = `<table style="width:100%" border="1px">`

    let text = `<th colspan="2" style="text-alignment:center;">Details of a customer requesting a quote</th>`
    strObject += surroundWithHtmlTag(text, 'tr')

    strObject += addTableRow(`Customer Id:`, `#${formObject.id}`, 'th')

    strObject += addTableRow(`Date:`, `${formObject.timeStamp}`, 'th')

    strObject += addTableRow(`Name:`, getName(formObject.first_name, formObject.last_name), 'th')

    strObject += addTableRow(`Address:`, `${formObject.address}`, 'th')

    strObject += addTableRow(`City:`, `${formObject.city}`, 'th')

    strObject += addTableRow(`State:`, `${formObject.state}`, 'th')

    strObject += addTableRow(`Country:`, `${formObject.country.toUpperCase()}`, 'th')

    strObject += addTableRow(`Phone:`, `${formObject.phone}`, 'th')

    strObject += addTableRow(`E-mail:`, `${formObject.email}`, 'th')

    return `${strObject} </table>`
}

export { surroundWithHtmlTag, addLineBreak, addTableRow, convertImage2LogoHtmlText, convertText2Html, convertFormData2HtmlTable}