require ('./comp1.css');

(function($, window, document,undefined){
  $.fn.createLunBo = function (props) {
    const {
      imgs = [],
      time = 1000,
    } = props;

    // 渲染dom
    $(this).html(`
      <div id="box">
        <div class="screen">
          <ul id="ul"></ul>
          <ol id="ol"></ol>
          <div id="arrow">
            <span id="left">&lt;</span>
            <span id="right">&gt;</span>
          </div>
        </div>
      </div>
    `);
    [...imgs].map((it,index) =>{
      if(index === 0){
        $('#ol').append(`<li class="current">${index+1+''}</li>`);
      }else {
        $('#ol').append(`<li>${index+1+''}</li>`);
      }
    });
    [...imgs,imgs[0]].map(it =>{
      $('#ul').append(`<li><img src='${it}' alt=""></li>`);
    });
    // 需要自定义的样式
    $('.screen > ul').css({
      width:'3000px'
    })
    $('.screen').css({
      height: '200px',
      width: '400px',
    });
    $('.screen > ul > li').css({
      width: '400px',
    });
    $('.screen > ol').css({
      textAlign:'center'
    });

    // 常用变量
    let index = 0;
    const [box] = $('#box');
    const [ul] = $('#ul');
    const [arr] = $('#arrow');
    const screenW = $('.screen')[0].offsetWidth;
    const pageList = $('ol>li');
    const { children:ulChildren } = ul;
    const { length = 0 } = ulChildren || [];

    function animate(obj, target) {
      clearInterval(obj.timerID);
      obj.timerID = setInterval(function () {
        let current = obj.offsetLeft;
        if (Math.abs(target - current) > 10) {
          current += target > current ? 10 : -10;
          obj.style.left = `${current}px`;
        } else {
          obj.style.left = `${target}px`;
        }
        if (current === target) {
          clearInterval(obj.timerID);
        }
      }, 10);
    }

    function next() {
      if (index === length - 1) {
        index = 0;
        ul.style.left = 0;
      }
      index++;
      pageList[index - 1].className = "";
      if (index === length - 1) {
        pageList[0].className = "current";
      } else {
        pageList[index].className = "current";
      }
      animate(ul, -index * screenW);
    }

    pageList.map( it => { // 这点居然it不是元素 是index
      pageList[it].setAttribute('index', it);
      pageList[it].onclick = function () {
        if (index === length - 1) {
          index = 0;
          ul.style.left = 0;
        }
        let idx = this.getAttribute('index');
        if (index === 0 && idx === pageList.length - 1) {
          index = ul.children.length - 1;
          ul.style.left = -index * screenW + "px";
        }
        animate(ul, -idx * screenW);
        index = idx;
        for (let j = 0; j < pageList.length; j++) {
          pageList[j].className = "";
        }
        this.className = "current";
      }
    })

    box.onmouseover = function () {
      //左右点击按钮隐藏
      arr.style.display = "block";
      //停止计时器
      clearInterval(timerID);
    }
    box.onmouseout = function () {
      arr.style.display = "none";
      timerID = setInterval(next, 1000);
    }

    $('#right').click(next);
    $('#left').click(function () {
      if (index === 0) {
        index = ul.children.length - 1;
        ul.style.left = -index * screenW + "px";
      }
      index--;
      animate(ul, -index * screenW);
      for (let i = 0; i < pageList.length; i++) {
        pageList[i].className = "";
      }
      pageList[index].className = "current";

    })

    // 执行循环
    let timerID = setInterval(next, time);
  };
})(jQuery, window, document);
