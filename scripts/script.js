const $ = document

const notifBox = $.querySelector('#notifBox')

let successMsg = 'Successfully submitted'
let errorMsg = 'Please fix the error!'
let invalidMsg = 'Invalid input, check again'

function showNotif(msg){
    console.log(msg);
}