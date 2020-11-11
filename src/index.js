import wid from './component/widgit';
import LB from './component/comp1';
require('../index.css');
require('../src/component/form2.less');
import img1 from '../assets/yay1.jpg';
import img2 from '../assets/yay2.jpg';
import img3 from '../assets/yay3.jpg';
$(function(){

  // 第一种方法
  $.extend({
    sayHello: function(name) {
      console.log('Hello,' + (name ? name : 'Dude') + '!');
    },
    log: function(message) {
      var now = new Date(),
        y = now.getFullYear(),
        m = now.getMonth() + 1, //！JavaScript中月分是从0开始的
        d = now.getDate(),
        h = now.getHours(),
        min = now.getMinutes(),
        s = now.getSeconds(),
        time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
      console.log(time + ' My App: ' + message);
    }
  })
  $.sayHello(); //调用
  $.sayHello('Wayou'); //带参调用
  $.log('initializing...'); //调用


  // 第二种方法
  $('a').myPlugin({
    'color': '#2C9929',
    'fontSize': '20px',
    'textDecoration': 'underline'
  })

  $('#lunbo').createLunBo({
    //todo 为啥这里不能直接用require呢
    imgs: [
        img1,
        img2,
        img3
    ],
    time:2000
  })
});
