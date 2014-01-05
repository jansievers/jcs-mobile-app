function showAside() {
	console.log('showAside');
	var infoBar = document.getElementById('aside');
	infoBar.className = "fadeIn";
}

function hideAside() {
	console.log('hideAside');
	var infoBar = document.getElementById('aside');
	infoBar.className = "fadeOut";
}


/* Do the scrolling stuff */

var mainScroll;
var asideScroll;

function loaded() {	
	mainScroll = new iScroll('wrapper', {
                   useTransform: false,
                   onBeforeScrollStart: function (e) {
                       var target = e.target;
                       while (target.nodeType != 1) target = target.parentNode;
                       if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION')
                           e.preventDefault();
                   }
    });
    setTimeout(function () { mainScroll.refresh(); }, 200);
	
	asideScroll = new iScroll('info-bar', {
		useTransform: false
	});
	setTimeout(function () { asideScroll.refresh(); }, 200);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);


