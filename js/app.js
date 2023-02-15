const applicationKey = '81545b16f5be72bb22435b9256468d15925f0c21b3f78fdc20cd45661aca06ae';
const clientKey = 'fe6d2a8faab5542d18fba5aa93b2cf554187a07b866f38298cd44638d6891243';
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
