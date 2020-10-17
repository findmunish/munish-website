// import * as uuid from 'uuid';
// import * as moment from 'moment';
import { getName } from '../utils/stringUtils'
import { addLineBreak, convertImage2LogoHtmlText, convertText2Html, convertFormData2HtmlTable} from './formatEmail'
import { sendEmail, sendEmailWithAttachment } from './email'

const companyTitle = `Fantastic Windows`
// window.location:  Location http://localhost:8080/requestQuote.html#
// window.location.port:  8080
// window.location.hostname:  localhost
// window.location.href:  http://localhost:8080/requestQuote.html#
// window.location.pathname:  /requestQuote.html
// window.location.protocol:  http:
const getLogoFileName = () => {
    let port = window.location.port ? `:${window.location.port}` : ''
    let imageUrl = `//${window.location.hostname}${port}/assets/images/fantastic-icon.png`
    let imageObj = {image: imageUrl, altText: "FantasticLogo"}
    return imageObj
}
const prepareAndSendEmail = (jsonData, emailObject) => {
    if (jsonData.mailParams.isSendEmail.toLowerCase() === 'true') {
        if (jsonData.mailParams.sendAttachments.toLowerCase() === 'true') {
            emailObject.attachments =  [{name: 'fantastic-icon.png', path: '/assets/images/fantastic-icon.png'}]
            sendEmailWithAttachment(emailObject)
        } else {
            sendEmail(emailObject)
        }
    } else {
        if (jsonData.mailParams.sendAttachments.toLowerCase() === 'true') {
            emailObject.attachments =  [{name: 'fantastic-icon.png', path: '/assets/images/fantastic-icon.png'}]
            console.log('[Email Object with attachments]\n', JSON.stringify(emailObject))
        } else {
            console.log('[Email Object]\n', JSON.stringify(emailObject))
        }
    }
}
const getEmailObject = (toEmail, subject, messageBody) => {
    let sendEmailObject = {
        host: '',                 // process.env.gmailSmtpServer,
        fromEmail: '',            // process.env.gmailMail,
        toEmail: toEmail,
        username: '',
        password: '',             // process.env.gmailAppPassword,
        subject: subject,
        messageBody: messageBody
    }
    return sendEmailObject
}
const sendEmailToCustomer = (jsonData, requestFormData) => {
    let subject = `[FantasticWindows #${requestFormData.id}] Acknowledgement mail to your request!`
    let salutation = `Hello ${getName(requestFormData.first_name, requestFormData.last_name)},`

    let signOff = `Thanks and regards`
    let signOffSalutation = `Team ${companyTitle}`

    let imgObj = getLogoFileName()
    let messageBody = convertImage2LogoHtmlText( imgObj )
    messageBody += addLineBreak('hr')
    messageBody += addLineBreak('br')
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(salutation)
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(`Thank you for showing interest in ${companyTitle}.`)
    messageBody += convertText2Html(`Your request id is ${requestFormData.id} on ${requestFormData.timeStamp}. Please quote your id, email id and date of request if you chat with someone from ${companyTitle}.`)
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(signOff)
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(signOffSalutation)

    let sendEmailObject = getEmailObject(requestFormData.email, subject, messageBody)
    prepareAndSendEmail(jsonData, sendEmailObject)
}
const sendEmailToTeam = (jsonData, requestFormData) => {
    let subject = `[FantasticWindows #${requestFormData.id}] Customer ${requestFormData.first_name.toUpperCase()} requests a quote`
    let salutation = `Hello Team,`

    let signOff = `Thanks and regards`

    let imgObj = getLogoFileName()
    let messageBody = convertImage2LogoHtmlText( imgObj )
    messageBody += addLineBreak('hr')
    messageBody += addLineBreak('br')
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(salutation)
    messageBody += addLineBreak('br')
    messageBody += convertFormData2HtmlTable(requestFormData)
    messageBody += addLineBreak('br')
    messageBody += convertText2Html(signOff)
    messageBody += addLineBreak('br')
    let sendEmailObject = getEmailObject(jsonData.mailParams.customerEmail, subject, messageBody)
    prepareAndSendEmail(jsonData, sendEmailObject)
}
const getFormData = (formId) => {
    /*let elements = document.getElementById(formId).elements
    let requestFormData = {};
    for(let i = 0 ; i < elements.length ; i++) {
        let item = elements.item(i);
        requestFormData[item.name] = item.value;
    }
    requestFormData.id = uuid.v4()     // requestFormData.id = Math.random().toString(36).substr(2,11)
    requestFormData.timeStamp = moment().toDate()*/
    let requestFormData: any = {};
    //requestFormData.id = uuid.v4()     // requestFormData.id = Math.random().toString(36)
    //requestFormData.timeStamp =  new Date()   // moment().toDate()
    return requestFormData
}
export { getEmailObject, prepareAndSendEmail, sendEmailToCustomer, sendEmailToTeam, getFormData}