import moment from 'moment';

const url = new URL(window.location.href);

// Retrieve student id and date
const userId = url.searchParams.get('id') || window.location.pathname.split('/')[1] || 'raphael.tison';
const date = url.searchParams.get('date') || moment().format('MM/DD/YYYY');

// Make redirection
const urlRedirect = `https://edtmobiliteng.wigorservices.net/WebPsDyn.aspx?action=posEDTBEECOME&serverid=C&Tel=${userId}&date=${date}`;
console.log(`Redirecting to ${urlRedirect}`);
window.location.href = urlRedirect;
document.getElementById('info').innerText = 'Redirection en cours...'