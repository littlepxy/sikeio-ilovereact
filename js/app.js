function animateLogo() {
    TweenMax.fromTo("#react-logo", 1, {
        css: {
            y: "-20px"
        }
    }, {
        css: {
            y: "20px"
        },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut
    });
}

function animateRobot() {
  var t = new TimelineMax({repeat: -1});
  t.to("#android-robot",0.5,{rotation: "-=10deg"})
    .to("#android-robot",1,{rotation: "+=20deg"})
    .to("#android-robot",0.5,{rotation: "-=10deg"});  
}

function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute("href"));
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + window.innerHeight;

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  })
}

// 当点击指示器时平滑滚动到被定为的部分
function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("click", function(event) {
      event.preventDefault();

      var section = document.querySelector(this.getAttribute("href"));

      scrollToElement(section);
    });
  }
}

window.onscroll = function() {
  updateSliderControl();
}
// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
};
