var Links = {
    setColor: function (color) {

        $('a').css('color', color);

        // var alist = document.querySelectorAll('a');

        // for (var i = 0; i < alist.length; i++) {
        //     alist[i].style.color = color;
        // }
    }
}

var Body = {
    setColor:function (color) {

        $('body').css('color', color);

        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color) {

        $('body').css('backgroundColor', color);

        // document.querySelector('body').style.backgroundColor = color;
    }
}

function NightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    }

    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('black');
    }
}