(function($, window, document,undefined){
  //定义Beautifier的构造函数
  const Beautifier = function(ele, opt) {
    this.$element = ele;
    this.defaults = {
      'color': 'red',
      'fontSize': '12px',
      'textDecoration':'none'
    };
    this.options = $.extend({}, this.defaults, opt)
  }
  //定义Beautifier的方法
  Beautifier.prototype = {
    beautify: function() {
      return this.$element.css({
        'color': this.options.color,
        'fontSize': this.options.fontSize,
        'textDecoration': this.options.textDecoration
      });
    }
  }

  // 名为myPlugin的插件
  $.fn.myPlugin = function(props) {
    //创建Beautifier的实体
    let beautifier = new Beautifier(this, props);
    //调用其方法
    return beautifier.beautify();
  }
})(jQuery, window, document);
