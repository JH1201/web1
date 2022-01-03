function setColor(color) {
  var alist = document.querySelectorAll('a');
  var i=0;
  while(i< alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
var Body = {
  setColor:function(color) {
      document.querySelector('body').style.color = color;
  //  $('body').css('color', color);
  },
  setBackgroundColor:function(color) {
    document.querySelector('body').style.backgroundColor = color;
  //  $('body').css('backgroundColor', color);
  }
}
function nightDayhandler(self) {
  if(self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day'

    setColor('red');
  }

  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night'

    setColor('blue');
  }
}
