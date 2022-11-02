const applicationKey = 'dcdbc15ed7d1c475bbdeca82babca1f81612cf373ae97bc98ed2a7f02b21a9cb';
const clientKey = 'c19bee46f05ec731c10a86a0cde8f76455b60f521b41412132537d64d68a5459';
var ncmb = new NCMB(applicationKey, clientKey);

function onLogoutButton() {
    // ログアウト
    ncmb.User.logout()
             .then(function(user) {
                 // ログイン成功時の処理
                 console.log("ログアウト成功:" + JSON.stringify(user));
                 window.location.href = "./login.html";
                 location.reload();
             })
             .catch(function(error) {
                 // ログイン失敗時の処理
                 console.log("ログアウト失敗:" + JSON.stringify(error));
             });
}

function start(){
  
window.location.href = 'index2.html';
//location.reload();
}

function qr(){
  
window.location.href = 'qrdemo.html';
//location.reload();
}
function form(){
  
window.location.href = 'index2.html';
//location.reload();
}

function setsu(){
  
window.location.href = 'setsumei.html';
//location.reload();
}
function mp4Click() {
  return $('#moNav')[0].pushPage('report.html');
 
}