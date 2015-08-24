jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

   //smooth scroll to second section from masthead-arrow
    $('#mast_process').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

//########################################/
//	video player space camp section
//########################################/
$(document).ready(function() {
        $('.play-button').click(function() {
            document.getElementById("space-camp-video-wrapper").style.display="block";
            //$("video").click();
        });
});

//########################################/
//	flipclock
//########################################/
var clock;

$(document).ready(function() {

	// Grab the current date
	var currentDate = new Date();

	// Set to the date the applicaiton is due (year, month, day, hour, minute). Currently set to end of internship
	var futureDate  = new Date(2015, 08, 28, 17, 30);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	clock = $('.spaceClock').FlipClock(diff, {
		// ... your options here
		countdown: true
	});
});

//########################################/
//	split slider
//########################################/

var Split = (function () {
  function Split (el) {
    this.left = el.querySelector('.split__left')
    this.leftInner = el.querySelector('.split__left__inner')
    // this.right = el.querySelector('.split__right')
    // this.rightInner = el.querySelector('.split__right__inner')
    this.p = 0
  }

  Split.prototype = {
    update: function update (p) {
      var targetP = 100 - p * 100
      if (Math.abs(targetP - this.p) < .20) return false
      this.p += (targetP - this.p) * .25
      this.left.style.transform = 'translateZ(0) translateX(' + -this.p + '%)'
      this.leftInner.style.transform = 'translateZ(0) translateX(' + this.p + '%)'
      return true
    }
  }

  return Split
})()


var width = window.innerWidth
var targetX = width / 2

var resting = false

if (window.width >= 768) {
  var el = document.getElementById('split')
  var split = new Split(el)

  update()

  function update () {
    var p = targetX / window.innerWidth
    var moved = split.update(p)
    resting = !moved
    if (moved) requestAnimationFrame(update)
  }

  el.addEventListener('mousemove', function (e) {
    targetX = e.clientX
    if (resting) update()
  })

  el.addEventListener('mouseleave', function () {
    targetX = window.innerWidth / 2
    if (resting) update()
  })
}
