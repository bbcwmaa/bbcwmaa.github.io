$( document ).ready(function() {

  var dev = false;

  if (dev == true) {

    $('.scene-wrapper').addClass('active');
    $('.scene-type').addClass('active');
    // $('body').addClass('interactively');
    $('.audio-bar').addClass('active');
    $('body').on('click',function(){ $('.scene-type .text02').toggleClass('active'); });
    // $('.echo').on('click',function(){ $('.scene-paul .text2').toggleClass('active'); });

  } else {

  // Page Load
  $(window).on('load', function() {

    $('.splash img,.title img,.play,h1,.splash-chars img').addClass('active');

    setTimeout(function(){
      letters();
    },400);

  });

  // Play Button
  $('.play').on('click',function(){
    $('.play svg').addClass('clicked');
      $('.splash img').addClass('exit');
      $('.title').addClass('exit');
      $('.scene-preface').addClass('active');
      $('.scene-wrapper').addClass('active');
      setTimeout(function(){
        $('.slogan').addClass('active');
      },500);
      setTimeout(function(){
        $('.title-wrapper,.splash').remove();
      },1500);
      setTimeout(function(){
        $('.slogan').removeClass('active');
      },4500);
      setTimeout(function(){
        $('.scene-opening').addClass('active');
        $('.scene-preface').remove();
      },5500);
      setTimeout(function(){
        document.getElementById('audio').play();
        $('.scene-opening-hours').text('9');
        $('.scene-opening-minutes').text('00');
        $('.audio-bar').addClass('active');
      },8000);
    return false;
  });

  // Text Type Functionality
  let count = 0;
  let type = document.getElementById('type');
  let copy = type.textContent;
  let char = copy.split('');
  type.textContent = '';

  for (var i = 0; i < char.length; i++) {
      // console.log(char[i]);
      let n = document.createElement('span');
      let tn = document.createTextNode(char[i]);
      n.appendChild(tn);
      type.appendChild(n);
      let lt = document.getElementsByTagName('span');
      lt[i].setAttribute('id', 'letter-' + i);
  }

  const letters = () => {
      if(count < char.length){
          setTimeout(function(){
              let curLetter = document.getElementById('letter-' + count);
              $(curLetter).addClass('show');
              count++;
              letters();
          }, 50);
      }
  }

  // Phonecall Count
  var sec = 738;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      $(".phone-s").html(pad(++sec%60));
      $(".phone-m").html(pad(parseInt(sec/60,10)));
  }, 1000);

  // Audio Player
  const player = new Plyr('audio', {
  	controls: [
  		'play','progress','current-time'
  	],
    listeners: {
        seek: function (e) {
            e.preventDefault() // required on v2
            // Your code here
            return false    // required on v3
        }
    }
  });

  // Functions
  function scene(sceneName){
    $('body').removeClass();
    $('.text').removeClass('active');
    $('.scene').removeClass('active');
    if (sceneName != '') {
      $('body').addClass(sceneName);
      $('.scene-' + sceneName).addClass('active');
    }
  }

  // Expose player so it can be used from the console
  window.player = player;

  // Popcorn
  var p = Popcorn( "#audio" )

  .code({
      start: 1,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 1.5,
      onStart: function( options ) {
        $('.scene-opening').remove();
        $('.scene-greg .greg').addClass('active');
        $('.scene-greg .greg-mic').addClass('active');
      }
  })
  .code({
      start: 2,
      onStart: function( options ) {
        $('.scene-greg .text00').addClass('active');
      }
  })
  .code({
      start: 3.8,
      onStart: function( options ) {
        $('.scene-greg .text00').removeClass('active');
      }
  })
  .code({
      start: 4,
      onStart: function( options ) {
        $('.scene-greg .text00a').addClass('active');
      }
  })
  .code({
      start: 5.5,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 5.75,
      onStart: function( options ) {
        $('.scene-blink .blink,.scene-blink .blink-mic').addClass('anim');
      }
  })
  .code({
      start: 6.25,
      onStart: function( options ) {
        $('.scene-blink .text00a').addClass('active');
      }
  })
  .code({
      start: 7,
      onStart: function( options ) {
        $('.scene-blink .text00b').addClass('active');
      }
  })
  .code({
      start: 8,
      onStart: function( options ) {
        $('.scene-blink .logo').addClass('active');
      }
  })
  .code({
      start: 11.5,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 12,
      onStart: function( options ) {
        $('.scene-greg .text00b').addClass('active');
      }
  })
  .code({
      start: 18,
      onStart: function( options ) {
        $('.scene-greg .text00b').removeClass('active');
      }
  })
  .code({
      start: 18.25,
      onStart: function( options ) {
        $('.scene-greg .text00c').addClass('active');
      }
  })
  .code({
      start: 20.5,
      onStart: function( options ) {
        $('.scene-blink .logo').remove();
        $('.text').removeClass('active');
        scene('sliders');
      }
  })
  .code({
      start: 21,
      onStart: function( options ) {
        $('.sliders-handle').addClass('active');
      }
  })
  .code({
      start: 23.33,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 23.7,
      onStart: function( options ) {
        $('.scene-blink .text01').addClass('active');
      }
  })
  .code({
      start: 28,
      onStart: function( options ) {
        $('.scene-blink .text01').remove();
        scene('greg');
      }
  })
  .code({
      start: 28.75,
      onStart: function( options ) {
        $('.scene-greg .text01').addClass('active');
      }
  })
  .code({
      start: 29.5,
      onStart: function( options ) {
        $('.scene-greg .text01').removeClass('active');
      }
  })
  .code({
      start: 30,
      onStart: function( options ) {
        $('.scene-greg .text02').addClass('active');
      }
  })
  .code({
      start: 32,
      onStart: function( options ) {
        $('.scene-greg .text02').removeClass('active');
      }
  })
  .code({
      start: 32.25,
      onStart: function( options ) {
        $('.scene-greg .text02a').addClass('active');
      }
  })
  .code({
      start: 34.25,
      onStart: function( options ) {
        $('.scene-greg .text02a').removeClass('active');
      }
  })
  .code({
      start: 34.5,
      onStart: function( options ) {
        $('.scene-greg .text02b').addClass('active');
      }
  })
  .code({
      start: 36,
      onStart: function( options ) {
        $('.scene-greg .text02b').removeClass('active');
      }
  })
  .code({
      start: 36.25,
      onStart: function( options ) {
        $('.scene-greg .text02c').addClass('active');
      }
  })
  .code({
      start: 38,
      onStart: function( options ) {
        $('.scene-greg .text02c').removeClass('active');
      }
  })
  .code({
      start: 38.25,
      onStart: function( options ) {
        $('.scene-greg .text02d').addClass('active');
      }
  })
  .code({
      start: 43.25,
      onStart: function( options ) {
        $('.scene-greg .text02d').removeClass('active');
      }
  })
  .code({
      start: 43.5,
      onStart: function( options ) {
        $('.scene-greg .text02e').addClass('active');
      }
  })
  .code({
      start: 45,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 45.3,
      onStart: function( options ) {
        $('.scene-type .text01').addClass('active');
      }
  })
  .code({
      start: 48.5,
      onStart: function( options ) {
        $('.scene-type .text01').removeClass('active');
      }
  })
  .code({
      start: 49,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 49.79,
      onStart: function( options ) {
        $('.scene-greg .text03').addClass('active');
      }
  })
  .code({
      start: 52.75,
      onStart: function( options ) {
        scene('type');
        $('body').addClass('interactively');
        $('.scene-greg .text03').remove();
      }
  })
  .code({
      start: 53,
      onStart: function( options ) {
        $('.scene-type .text02').addClass('active');
      }
  })
  .code({
      start: 53.9,
      onStart: function( options ) {
        scene('paul');
      }
  })
  .code({
      start: 54.1,
      onStart: function( options ) {
        $('.scene-paul').addClass('anim');
      }
  })
  .code({
      start: 55.15,
      onStart: function( options ) {
        $('.scene-paul .text01').addClass('active');
        $('.scene-type .text').removeClass('active');
      }
  })
  .code({
      start: 56.15,
      onStart: function( options ) {
        $('.alexaring').addClass('anim');
      }
  })
  .code({
      start: 56.5,
      onStart: function( options ) {
        $('.scene-paul .text01').removeClass('active');
      }
  })
  .code({
      start: 57.19,
      onStart: function( options ) {
        $('.scene-paul .text02').addClass('active');
      }
  })
  .code({
      start: 59.25,
      onStart: function( options ) {
        $('.scene-paul .text02').removeClass('active');
        scene('alexa');
      }
  })
  .code({
      start: 59.5,
      onStart: function( options ) {
        $('.scene-alexa .echo').addClass('anim');
      }
  })
  .code({
      start: 61,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 62,
      onStart: function( options ) {
        $('.scene-greg .text04').addClass('active');
      }
  })
  .code({
      start: 62.5,
      onStart: function( options ) {
        $('.scene-greg .text05').addClass('active');
      }
  })
  .code({
      start: 62.75,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 63,
      onStart: function( options ) {
        $('.scene-mel .phone').addClass('anim');
      }
  })
  .code({
      start: 63.25,
      onStart: function( options ) {
        $('.scene-mel .text01').addClass('active');
      }
  })
  .code({
      start: 64.75,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 65,
      onStart: function( options ) {
        $('.scene-greg .text05a').addClass('active');
      }
  })
  .code({
      start: 68.25,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 68.500,
      onStart: function( options ) {
        $('.scene-mel .text02').addClass('active');
      }
  })
  .code({
      start: 69.200,
      onStart: function( options ) {
        $('.scene-mel .text03').addClass('active');
      }
  })
  .code({
      start: 70,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 70.25,
      onStart: function( options ) {
        $('.scene-blink .text02').addClass('active');
      }
  })
  .code({
      start: 72,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 72.61,
      onStart: function( options ) {
        $('.scene-type .text03').addClass('active');
      }
  })
  .code({
      start: 75.61,
      onStart: function( options ) {
        $('.scene-type .text03').removeClass('active');
      }
  })
  .code({
      start: 76.34,
      onStart: function( options ) {
        $('.scene-type .text04').addClass('active');
      }
  })
  .code({
      start: 80.5,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 81.23,
      onStart: function( options ) {
        $('.scene-blink .text03').addClass('active');
      }
  })
  .code({
      start: 83,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 83.82,
      onStart: function( options ) {
        $('.scene-mel .text04').addClass('active');
      }
  })
  .code({
      start: 85,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 85.54,
      onStart: function( options ) {
        $('.scene-blink .text04').addClass('active');
      }
  })
  .code({
      start: 88,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 88.38,
      onStart: function( options ) {
        $('.scene-mel .text05').addClass('active');
      }
  })
  .code({
      start: 89,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 89.50,
      onStart: function( options ) {
        $('.scene-blink .text05').addClass('active');
      }
  })
  .code({
      start: 90.75,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 91,
      onStart: function( options ) {
        $('.scene-mel .text06').addClass('active');
      }
  })
  .code({
      start: 92.5,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 92.97,
      onStart: function( options ) {
        $('.scene-greg .text06').addClass('active');
      }
  })
  .code({
      start: 95,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 95.66,
      onStart: function( options ) {
        $('.scene-mel .text07').addClass('active');
      }
  })
  .code({
      start: 97.75,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 98.06,
      onStart: function( options ) {
        $('.scene-greg .text07').addClass('active');
      }
  })
  .code({
      start: 101,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 101.26,
      onStart: function( options ) {
        $('.scene-type .text05').addClass('active');
      }
  })
  .code({
      start: 103,
      onStart: function( options ) {
        scene('paul');

      }
  })
  .code({
      start: 103.25,
      onStart: function( options ) {
        $('.scene-paul .text03').addClass('active');
      }
  })
  .code({
      start: 104,
      onStart: function( options ) {
        $('.scene-paul .text03').removeClass('active');
      }
  })
  .code({
      start: 104.25,
      onStart: function( options ) {
        $('.scene-paul .text04').addClass('active');
      }
  })
  .code({
      start: 105.50,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 105.80,
      onStart: function( options ) {
        $('.scene-greg .text08').addClass('active');
      }
  })
  .code({
      start: 106.5,
      onStart: function( options ) {
        $('.scene-greg .text08').removeClass('active');
      }
  })
  .code({
      start: 106.5,
      onStart: function( options ) {
        $('.scene-greg .text09').addClass('active');
      }
  })
  .code({
      start: 108,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 108.25,
      onStart: function( options ) {
        $('.scene-blink .text06').addClass('active');
      }
  })
  .code({
      start: 109,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 109.25,
      onStart: function( options ) {
        $('.scene-type .text06').addClass('active');
      }
  })
  .code({
      start: 110,
      onStart: function( options ) {
        scene('mel');
      }
  })
  .code({
      start: 110.36,
      onStart: function( options ) {
        $('.scene-mel .text08').addClass('active');
      }
  })
  .code({
      start: 111.50,
      onStart: function( options ) {
        $('.scene-mel .text09').addClass('active');
      }
  })
  .code({
      start: 112.50,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 112.75,
      onStart: function( options ) {
        $('.scene-blink .text07').addClass('active');
      }
  })
  .code({
      start: 114.21,
      onStart: function( options ) {
        $('.scene-blink .text08').addClass('active');
      }
  })
  .code({
      start: 115.25,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 115.58,
      onStart: function( options ) {
        $('.scene-greg .text10').addClass('active');
      }
  })
  .code({
      start: 117.25,
      onStart: function( options ) {
        $('.scene-greg .text10').removeClass('active');
      }
  })
  .code({
      start: 117.5,
      onStart: function( options ) {
        $('.scene-greg .text11').addClass('active');
      }
  })
  .code({
      start: 119.4,
      onStart: function( options ) {
        scene('blink');
      }
  })
  .code({
      start: 119.75,
      onStart: function( options ) {
        $('.scene-blink .text09').addClass('active');
      }
  })
  .code({
      start: 123,
      onStart: function( options ) {
        $('.scene-blink .text10').addClass('active');
      }
  })
  .code({
      start: 124,
      onStart: function( options ) {
        $('.scene-blink').fadeOut(2000)
      }
  })
  .code({
      start: 126,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 126.5,
      onStart: function( options ) {
        $('.scene-greg .text12').addClass('active');
      }
  })
  .code({
      start: 127.6,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 127.8,
      onStart: function( options ) {
        $('.scene-type .text07').addClass('active');
      }
  })
  .code({
      start: 130,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 130.20,
      onStart: function( options ) {
        $('.scene-greg .text13').addClass('active');
      }
  })
  .code({
      start: 134.27,
      onStart: function( options ) {
        scene('alexa');
      }
  })
  .code({
      start: 135,
      onStart: function( options ) {
        $('.scene-alexa .echo').removeClass('anim');
      }
  })
  .code({
      start: 135.75,
      onStart: function( options ) {
        scene('greg');
      }
  })
  .code({
      start: 136,
      onStart: function( options ) {
        $('.scene-greg .text00').addClass('active');
      }
  })
  .code({
      start: 137.5,
      onStart: function( options ) {
        $('.scene-greg .text00').removeClass('active');
      }
  })
  .code({
      start: 138.15,
      onStart: function( options ) {
        $('.scene-greg .text14').addClass('active');
      }
  })
  .code({
      start: 141.5,
      onStart: function( options ) {
        scene('girl1');
      }
  })
  .code({
      start: 141.88,
      onStart: function( options ) {
        $('.scene-girl1 .girl').addClass('anim');
        $('.scene-girl1 .text-a').addClass('active');
      }
  })
  .code({
      start: 144,
      onStart: function( options ) {
        $('.scene-girl1 .text-b').addClass('active');
      }
  })
  .code({
      start: 146.5,
      onStart: function( options ) {
        $('.scene-girl1 .text-c').addClass('active');
      }
  })
  .code({
      start: 150.5,
      onStart: function( options ) {
        $('.scene-girl1 .text-d').addClass('active');
      }
  })
  .code({
      start: 153,
      onStart: function( options ) {
        scene('type');
      }
  })
  .code({
      start: 153.2,
      onStart: function( options ) {
        $('.scene-type .text08').addClass('active');
      }
  })
  .code({
      start: 155.5,
      onStart: function( options ) {
        $('.scene-type .text08').removeClass('active');
      }
  })
  .code({
      start: 156,
      onStart: function( options ) {
        scene('girl2');
      }
  })
  .code({
      start: 156.5,
      onStart: function( options ) {
        $('.scene-girl2 .girl').addClass('anim');
        $('.scene-girl2 .text').addClass('active');
      }
  })
  .code({
      start: 163.25,
      onStart: function( options ) {
        scene('girl3');
      }
  })
  .code({
      start: 163.55,
      onStart: function( options ) {
        $('.scene-girl3 .girl').addClass('anim');
        $('.scene-girl3 .text').addClass('active');
      }
  })
  .code({
      start: 167,
      onStart: function( options ) {
        scene('end');
      }
  })
  .code({
      start: 168,
      onStart: function( options ) {
        $('.scene-end .text').addClass('active');
        $('.audio-bar').removeClass('active');
      }
  })
  .code({
      start: 169,
      onStart: function( options ) {
        console.log('end');
      }
  })

  };


});
