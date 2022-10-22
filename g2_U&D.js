var com = Math.random() * 100;
com = parseInt(com) + 1;
console.log(com);

const result = document.getElementById('result');
const num = document.getElementById('num');

var cnt = 0;

function check_num() {
  var usr = parseInt(num.value);

  if(usr < com) {
    msg = "Up";
    cnt += 1;
  } else if(usr > com) {
    msg = "Down";
    cnt += 1;
  } else if(usr == com) {
    msg = "Correct";
    cnt += 1;
    const btn = document.getElementById('btn');
    btn.disabled = 'disabled';
  } else {
    msg = "수를 입력하시오";
  }

  var msg_cnt = '시도횟수: ' + cnt + '회';
  result.innerText = msg + '\n' + msg_cnt

}