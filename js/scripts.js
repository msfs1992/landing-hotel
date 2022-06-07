var menu = document.getElementById("menuTransitions");
function Waypoints(){
  this.storedwaypoints = [];
  this.funcs = [];
  this.createWayPoint =  function(element, callback){
    var wayTop = element.offsetTop;
    this.storedwaypoints.push(wayTop);
    this.funcs.push(callback);
  };
}
var waypoints = new Waypoints();
var storedwaypoints, storedfuncs;
var hoteleria = {
  header: document.getElementById("toolkit"),
  navigation: document.getElementById("navigation"),
  line1: document.getElementsByClassName('line')[0],
  line3: document.getElementsByClassName('line')[2],
  links: document.getElementsByClassName('navigate'),
  flagToggleHeader: true,
  menuClick: function(){
    this.toggleClass(menu ,"menusHolderTransition");
    this.toggleClass(this.line1, "line1Close");
    this.toggleClass(this.line3, "line3Close");
    if(innerWidth <= 768){
      this.toggleClass(this.navigation, "toggleMenu");
    }
  },
  hasClass: function(element, classN) {
      var classes = element.className.split(" ");
      var i = classes.indexOf(classN);
      return (i >= 0);
  },
  toggleClass: function(element, classN){
    if (element.classList) { 
      element.classList.toggle(classN);
    } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf(classN);

      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push(classN);
        element.className = classes.join(" "); 
    }
  },
  addClass: function(element, classN){
    var classString = element.className;
    var newClass = classString.concat(" "+classN);
    element.className = newClass;
  },
  scroll: function(event){
    var doc = document.documentElement;
    //var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var _top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(_top > 150){
      if(this.flagToggleHeader){
        this.flagToggleHeader = false;
        this.toggleClass(document.getElementById("toolkit"), "compressHeader");
        this.toggleClass(document.getElementById("logoH"), "compressLogoH");
         this.toggleClass(document.getElementById("logo"), "compressLogo");
      }
    }else if(_top < 150){
      if(!this.flagToggleHeader){
        this.flagToggleHeader = true;
        this.toggleClass(document.getElementById("toolkit"), "compressHeader");
        this.toggleClass(document.getElementById("logoH"), "compressLogoH");
         this.toggleClass(document.getElementById("logo"), "compressLogo");
      }
    }
    for(var g = 0; g < storedwaypoints.length; g++){
      if(_top > (storedwaypoints[g] - 150) && _top < (storedwaypoints[g] + 150)){
        storedfuncs[g].call();
      }
    }
  },
  openGallery: function(){
    document.getElementsByClassName("img")[0].click();
  },
  init: function(){
    document.getElementById("menuTransitions").addEventListener('click', this.menuClick.bind(this));
    document.getElementById("openGallery").addEventListener('click', this.openGallery.bind(this));
    for (var i =  0; i < this.links.length; i++) {
      this.links[i].addEventListener('click', function(){
        hoteleria.menuClick();
      });
    }
    waypoints.createWayPoint(document.querySelector(".product-1"), function(){
        if(!this.hasClass(document.querySelector(".wp1"), "animated")){
          this.addClass(document.querySelector(".wp1"), "animated bounceInLeft");
        }
    }.bind(this));
    waypoints.createWayPoint(document.querySelector(".product-2"), function(){
        if(!this.hasClass(document.querySelector(".wp4"), "animated")){
          this.addClass(document.querySelector(".wp4"), "animated fadeInUp");
        }
    }.bind(this));
    waypoints.createWayPoint(document.querySelector(".product-3"), function(){
        if(!this.hasClass(document.querySelector(".wp5"), "animated")){
          this.addClass(document.querySelector(".wp5"), "animated fadeInUp");
        }
    }.bind(this));
    waypoints.createWayPoint(document.querySelector(".product-4"), function(){
        if(!this.hasClass(document.querySelector(".wp2"), "animated")){
          this.addClass(document.querySelector(".wp2"), "animated bounceInRight");
        }
    }.bind(this));
    waypoints.createWayPoint(document.querySelector(".product-5"), function(){
        if(!this.hasClass(document.querySelector(".wp3"), "animated")){
          this.addClass(document.querySelector(".wp3"), "animated bounceInLeft");
        }
    }.bind(this));
    waypoints.createWayPoint(document.querySelector(".product-6"), function(){
        if(!this.hasClass(document.querySelector(".wp6"), "animated")){
          this.addClass(document.querySelector(".wp6"), "animated fadeInUp");
        }
    }.bind(this));
    storedwaypoints = waypoints.storedwaypoints;
    storedfuncs = waypoints.funcs;
    window.onscroll = this.scroll.bind(this);
    var slider = tns({
      container: '.bannerul',
      controls: false,
      nav: true,
      mouseDrag: true,
      items: 1,
      autoplayButtonOutput: false,
      swipeAngle: false,
      autoplay: true
      /*responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }*/
    });
    $t(document.getElementById("effect"), {selector: '.img'});
    
  }
};
//INSTANTIATE APPLICATION
document.addEventListener("DOMContentLoaded", function(){
    hoteleria.init(); 
}, true);