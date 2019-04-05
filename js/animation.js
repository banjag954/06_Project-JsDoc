TweenMax.to('.line_01', 2, { backgroundColor: '#6774C1', ease: Sine.easeInOut, yoyo: true, repeat: -1 });
TweenMax.to('.line_02', 1, { backgroundColor: '#3b4856', ease: Sine.easeInOut, yoyo: true, repeat: -1 });
TweenMax.to('.line_03', 1, { backgroundColor: '#3b4856', ease: Sine.easeInOut, yoyo: true, repeat: -1 });

$(document).ready(()=>{

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#container01',
		triggerHook: 0,
		duration: '60%'
	})
	.setPin('#container01', {pushFollowers: false})
  .addTo(controller);
  
  // pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#container02',
		triggerHook: 0.6
	})
	.setPin('#container01', {pushFollowers: false})
	.addTo(controller);


  // build a scene_01
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container01',
    duration: '100%', // 시작점과 끝점의 폭
    triggerHook: 0.78 // 스타트 포인트
  })
  .setClassToggle('#container01', 'fade-in')
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'red',
  //   colorStart: '#75C695',
  //   colorEnd: 'pink'
  // }) // this requires a plugin
  .addTo(controller);
  
  // build a scene_02
  var tl = new TimelineMax();
  tl.from('#desc_02_wrap', 24, {ease: Power2.easeOut, y: 400, opacity: 0});
  tl.from('#container_02_imgs', 24, {ease: Power2.easeOut, y: -200, opacity: 0});

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container02',
    duration: '1600', // 시작점과 끝점의 폭
    triggerHook: 0.8 // 스타트 포인트
  })
  .setTween(tl)
  .setPin("#container_02")
  .setClassToggle('#container02', 'fade-in')
  .addTo(controller);

  // build a scene_03
  var tl2 = new TimelineMax();
  tl2.from('.desc_03_wrap', 24, {ease: Power2.easeOut, y:200, opacity: 0},"=-11");
  tl2.from('#main_img', 8, {y:400, opacity: 0}, "=-11");

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container03',
    duration: '1700', // 시작점과 끝점의 폭
    triggerHook: 1 // 스타트 포인트
  })
  .setTween(tl2)
  .setPin("#container_03")
  .setClassToggle('#container03', 'fade-in')
  .addTo(controller);

  // build a scene_04
  var tl3 = new TimelineMax();
  tl3.from('#img_furnish', 8, {x:-320, opacity: 0});

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#container04',
    duration: '100%', // 시작점과 끝점의 폭
    triggerHook: 1 // 스타트 포인트
  })
  .setTween(tl3)
  .setPin("#container_04")
  .addTo(controller);

});