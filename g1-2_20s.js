const btn = document.getElementById('btn');
const res = document.getElementById('result');

var start;
var end;
var et;

function check_time() {
  var txt = btn.innerText;

  if(txt == '시작') {
    btn.innerText = '종료';
    btn.style.backgroundColor = '#222'
    result.innerText = '20초 세고 버튼을 다시 누르세요'
    start = new Date();
  } else {
    btn.innerText = '시작';
    end = new Date();
    et = end - start;
    et = parseInt(et / 1000);
    btn.style.backgroundColor = '#123E77'
    res.innerText = '경과 시간 ' + et + '초'
  }
}