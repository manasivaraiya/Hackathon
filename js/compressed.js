center=[19.072809,72.900958];var mymap=L.map("map").setView(center,15);L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{maxZoom:18,id:"mapbox.dark",accessToken:"pk.eyJ1Ijoia2l0ZXJldHN1IiwiYSI6ImNqc216MTExNzA2NDE0OW80bWhyNmwyMmoifQ.v7pnFYhTlfA59e_sMBMSBA"}).addTo(mymap);var marker=L.marker(center).addTo(mymap);marker.bindPopup("<b>KJSCE</b> CodeCell, <br>K.J. Somaiya College Of Engineering,<br/>Vidyavihar, Mumbai.").openPopup();var pJS=function(e,t){var a=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:a,w:a.offsetWidth,h:a.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var m=this.pJS;t&&Object.deepExtend(m,t),m.tmp.obj={size_value:m.particles.size.value,size_anim_speed:m.particles.size.anim.speed,move_speed:m.particles.move.speed,line_linked_distance:m.particles.line_linked.distance,line_linked_width:m.particles.line_linked.width,mode_grab_distance:m.interactivity.modes.grab.distance,mode_bubble_distance:m.interactivity.modes.bubble.distance,mode_bubble_size:m.interactivity.modes.bubble.size,mode_repulse_distance:m.interactivity.modes.repulse.distance},m.fn.retinaInit=function(){m.retina_detect&&1<window.devicePixelRatio?(m.canvas.pxratio=window.devicePixelRatio,m.tmp.retina=!0):(m.canvas.pxratio=1,m.tmp.retina=!1),m.canvas.w=m.canvas.el.offsetWidth*m.canvas.pxratio,m.canvas.h=m.canvas.el.offsetHeight*m.canvas.pxratio,m.particles.size.value=m.tmp.obj.size_value*m.canvas.pxratio,m.particles.size.anim.speed=m.tmp.obj.size_anim_speed*m.canvas.pxratio,m.particles.move.speed=m.tmp.obj.move_speed*m.canvas.pxratio,m.particles.line_linked.distance=m.tmp.obj.line_linked_distance*m.canvas.pxratio,m.interactivity.modes.grab.distance=m.tmp.obj.mode_grab_distance*m.canvas.pxratio,m.interactivity.modes.bubble.distance=m.tmp.obj.mode_bubble_distance*m.canvas.pxratio,m.particles.line_linked.width=m.tmp.obj.line_linked_width*m.canvas.pxratio,m.interactivity.modes.bubble.size=m.tmp.obj.mode_bubble_size*m.canvas.pxratio,m.interactivity.modes.repulse.distance=m.tmp.obj.mode_repulse_distance*m.canvas.pxratio},m.fn.canvasInit=function(){m.canvas.ctx=m.canvas.el.getContext("2d")},m.fn.canvasSize=function(){m.canvas.el.width=m.canvas.w,m.canvas.el.height=m.canvas.h,m&&m.interactivity.events.resize&&window.addEventListener("resize",function(){m.canvas.w=m.canvas.el.offsetWidth,m.canvas.h=m.canvas.el.offsetHeight,m.tmp.retina&&(m.canvas.w*=m.canvas.pxratio,m.canvas.h*=m.canvas.pxratio),m.canvas.el.width=m.canvas.w,m.canvas.el.height=m.canvas.h,m.particles.move.enable||(m.fn.particlesEmpty(),m.fn.particlesCreate(),m.fn.particlesDraw(),m.fn.vendors.densityAutoParticles()),m.fn.vendors.densityAutoParticles()})},m.fn.canvasPaint=function(){m.canvas.ctx.fillRect(0,0,m.canvas.w,m.canvas.h)},m.fn.canvasClear=function(){m.canvas.ctx.clearRect(0,0,m.canvas.w,m.canvas.h)},m.fn.particle=function(e,t,a){if(this.radius=(m.particles.size.random?Math.random():1)*m.particles.size.value,m.particles.size.anim.enable&&(this.size_status=!1,this.vs=m.particles.size.anim.speed/100,m.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=a?a.x:Math.random()*m.canvas.w,this.y=a?a.y:Math.random()*m.canvas.h,this.x>m.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>m.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),m.particles.move.bounce&&m.fn.vendors.checkOverlap(this,a),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var i=e.value[Math.floor(Math.random()*m.particles.color.value.length)];this.color.rgb=hexToRgb(i)}else null!=e.value.r&&null!=e.value.g&&null!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),null!=e.value.h&&null!=e.value.s&&null!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(m.particles.opacity.random?Math.random():1)*m.particles.opacity.value,m.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=m.particles.opacity.anim.speed/100,m.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(m.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}m.particles.move.straight?(this.vx=n.x,this.vy=n.y,m.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var s=m.particles.shape.type;if("object"==typeof s){if(s instanceof Array){var r=s[Math.floor(Math.random()*s.length)];this.shape=r}}else this.shape=s;if("image"==this.shape){var o=m.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==m.tmp.img_type&&null!=m.tmp.source_svg&&(m.fn.vendors.createSvgImg(this),m.tmp.pushing&&(this.img.loaded=!1))}},m.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(null!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(m.canvas.ctx.fillStyle=i,m.canvas.ctx.beginPath(),e.shape){case"circle":m.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":m.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":m.fn.vendors.drawShape(m.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":m.fn.vendors.drawShape(m.canvas.ctx,e.x-t/(m.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(m.particles.shape.polygon.nb_sides/3),m.particles.shape.polygon.nb_sides,1);break;case"star":m.fn.vendors.drawShape(m.canvas.ctx,e.x-2*t/(m.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(m.particles.shape.polygon.nb_sides/3),m.particles.shape.polygon.nb_sides,2);break;case"image":;if("svg"==m.tmp.img_type)var n=e.img.obj;else n=m.tmp.img_obj;n&&m.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}m.canvas.ctx.closePath(),0<m.particles.shape.stroke.width&&(m.canvas.ctx.strokeStyle=m.particles.shape.stroke.color,m.canvas.ctx.lineWidth=m.particles.shape.stroke.width,m.canvas.ctx.stroke()),m.canvas.ctx.fill()},m.fn.particlesCreate=function(){for(var e=0;e<m.particles.number.value;e++)m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value))},m.fn.particlesUpdate=function(){for(var e=0;e<m.particles.array.length;e++){var t=m.particles.array[e];if(m.particles.move.enable){var a=m.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(m.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=m.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=m.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),m.particles.size.anim.enable&&(1==t.size_status?(t.radius>=m.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=m.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==m.particles.move.out_mode)var i={x_left:t.radius,x_right:m.canvas.w,y_top:t.radius,y_bottom:m.canvas.h};else i={x_left:-t.radius,x_right:m.canvas.w+t.radius,y_top:-t.radius,y_bottom:m.canvas.h+t.radius};switch(t.x-t.radius>m.canvas.w?(t.x=i.x_left,t.y=Math.random()*m.canvas.h):t.x+t.radius<0&&(t.x=i.x_right,t.y=Math.random()*m.canvas.h),t.y-t.radius>m.canvas.h?(t.y=i.y_top,t.x=Math.random()*m.canvas.w):t.y+t.radius<0&&(t.y=i.y_bottom,t.x=Math.random()*m.canvas.w),m.particles.move.out_mode){case"bounce":t.x+t.radius>m.canvas.w?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>m.canvas.h?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(isInArray("grab",m.interactivity.events.onhover.mode)&&m.fn.modes.grabParticle(t),(isInArray("bubble",m.interactivity.events.onhover.mode)||isInArray("bubble",m.interactivity.events.onclick.mode))&&m.fn.modes.bubbleParticle(t),(isInArray("repulse",m.interactivity.events.onhover.mode)||isInArray("repulse",m.interactivity.events.onclick.mode))&&m.fn.modes.repulseParticle(t),m.particles.line_linked.enable||m.particles.move.attract.enable)for(var n=e+1;n<m.particles.array.length;n++){var s=m.particles.array[n];m.particles.line_linked.enable&&m.fn.interact.linkParticles(t,s),m.particles.move.attract.enable&&m.fn.interact.attractParticles(t,s),m.particles.move.bounce&&m.fn.interact.bounceParticles(t,s)}}},m.fn.particlesDraw=function(){m.canvas.ctx.clearRect(0,0,m.canvas.w,m.canvas.h),m.fn.particlesUpdate();for(var e=0;e<m.particles.array.length;e++){m.particles.array[e].draw()}},m.fn.particlesEmpty=function(){m.particles.array=[]},m.fn.particlesRefresh=function(){cancelRequestAnimFrame(m.fn.checkAnimFrame),cancelRequestAnimFrame(m.fn.drawAnimFrame),m.tmp.source_svg=void 0,m.tmp.img_obj=void 0,m.tmp.count_svg=0,m.fn.particlesEmpty(),m.fn.canvasClear(),m.fn.vendors.start()},m.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=m.particles.line_linked.distance){var s=m.particles.line_linked.opacity-n/(1/m.particles.line_linked.opacity)/m.particles.line_linked.distance;if(0<s){var r=m.particles.line_linked.color_rgb_line;m.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+s+")",m.canvas.ctx.lineWidth=m.particles.line_linked.width,m.canvas.ctx.beginPath(),m.canvas.ctx.moveTo(e.x,e.y),m.canvas.ctx.lineTo(t.x,t.y),m.canvas.ctx.stroke(),m.canvas.ctx.closePath()}}},m.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=m.particles.line_linked.distance){var n=a/(1e3*m.particles.move.attract.rotateX),s=i/(1e3*m.particles.move.attract.rotateY);e.vx-=n,e.vy-=s,t.vx+=n,t.vy+=s}},m.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},m.fn.modes.pushParticles=function(e,t){m.tmp.pushing=!0;for(var a=0;a<e;a++)m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value,{x:t?t.pos_x:Math.random()*m.canvas.w,y:t?t.pos_y:Math.random()*m.canvas.h})),a==e-1&&(m.particles.move.enable||m.fn.particlesDraw(),m.tmp.pushing=!1)},m.fn.modes.removeParticles=function(e){m.particles.array.splice(0,e),m.particles.move.enable||m.fn.particlesDraw()},m.fn.modes.bubbleParticle=function(o){if(m.interactivity.events.onhover.enable&&isInArray("bubble",m.interactivity.events.onhover.mode)){var e=o.x-m.interactivity.mouse.pos_x,t=o.y-m.interactivity.mouse.pos_y,a=1-(c=Math.sqrt(e*e+t*t))/m.interactivity.modes.bubble.distance;function i(){o.opacity_bubble=o.opacity,o.radius_bubble=o.radius}if(c<=m.interactivity.modes.bubble.distance){if(0<=a&&"mousemove"==m.interactivity.status){if(m.interactivity.modes.bubble.size!=m.particles.size.value)if(m.interactivity.modes.bubble.size>m.particles.size.value){0<=(s=o.radius+m.interactivity.modes.bubble.size*a)&&(o.radius_bubble=s)}else{var n=o.radius-m.interactivity.modes.bubble.size,s=o.radius-n*a;o.radius_bubble=0<s?s:0}var r;if(m.interactivity.modes.bubble.opacity!=m.particles.opacity.value)if(m.interactivity.modes.bubble.opacity>m.particles.opacity.value)(r=m.interactivity.modes.bubble.opacity*a)>o.opacity&&r<=m.interactivity.modes.bubble.opacity&&(o.opacity_bubble=r);else(r=o.opacity-(m.particles.opacity.value-m.interactivity.modes.bubble.opacity)*a)<o.opacity&&r>=m.interactivity.modes.bubble.opacity&&(o.opacity_bubble=r)}}else i();"mouseleave"==m.interactivity.status&&i()}else if(m.interactivity.events.onclick.enable&&isInArray("bubble",m.interactivity.events.onclick.mode)){if(m.tmp.bubble_clicking){e=o.x-m.interactivity.mouse.click_pos_x,t=o.y-m.interactivity.mouse.click_pos_y;var c=Math.sqrt(e*e+t*t),l=((new Date).getTime()-m.interactivity.mouse.click_time)/1e3;l>m.interactivity.modes.bubble.duration&&(m.tmp.bubble_duration_end=!0),l>2*m.interactivity.modes.bubble.duration&&(m.tmp.bubble_clicking=!1,m.tmp.bubble_duration_end=!1)}function v(e,t,a,i,n){if(e!=t)if(m.tmp.bubble_duration_end)null!=a&&(r=e+(e-(i-l*(i-e)/m.interactivity.modes.bubble.duration)),"size"==n&&(o.radius_bubble=r),"opacity"==n&&(o.opacity_bubble=r));else if(c<=m.interactivity.modes.bubble.distance){if(null!=a)var s=a;else s=i;if(s!=e){var r=i-l*(i-e)/m.interactivity.modes.bubble.duration;"size"==n&&(o.radius_bubble=r),"opacity"==n&&(o.opacity_bubble=r)}}else"size"==n&&(o.radius_bubble=void 0),"opacity"==n&&(o.opacity_bubble=void 0)}m.tmp.bubble_clicking&&(v(m.interactivity.modes.bubble.size,m.particles.size.value,o.radius_bubble,o.radius,"size"),v(m.interactivity.modes.bubble.opacity,m.particles.opacity.value,o.opacity_bubble,o.opacity,"opacity"))}},m.fn.modes.repulseParticle=function(i){if(m.interactivity.events.onhover.enable&&isInArray("repulse",m.interactivity.events.onhover.mode)&&"mousemove"==m.interactivity.status){var e=i.x-m.interactivity.mouse.pos_x,t=i.y-m.interactivity.mouse.pos_y,a=Math.sqrt(e*e+t*t),n=e/a,s=t/a,r=clamp(1/(c=m.interactivity.modes.repulse.distance)*(-1*Math.pow(a/c,2)+1)*c*100,0,50),o={x:i.x+n*r,y:i.y+s*r};"bounce"==m.particles.move.out_mode?(0<o.x-i.radius&&o.x+i.radius<m.canvas.w&&(i.x=o.x),0<o.y-i.radius&&o.y+i.radius<m.canvas.h&&(i.y=o.y)):(i.x=o.x,i.y=o.y)}else if(m.interactivity.events.onclick.enable&&isInArray("repulse",m.interactivity.events.onclick.mode))if(m.tmp.repulse_finish||(m.tmp.repulse_count++,m.tmp.repulse_count==m.particles.array.length&&(m.tmp.repulse_finish=!0)),m.tmp.repulse_clicking){var c=Math.pow(m.interactivity.modes.repulse.distance/6,3),l=m.interactivity.mouse.click_pos_x-i.x,v=m.interactivity.mouse.click_pos_y-i.y,p=l*l+v*v,d=-c/p*1;p<=c&&function(){var e=Math.atan2(v,l);if(i.vx=d*Math.cos(e),i.vy=d*Math.sin(e),"bounce"==m.particles.move.out_mode){var t=i.x+i.vx,a=i.y+i.vy;t+i.radius>m.canvas.w?i.vx=-i.vx:t-i.radius<0&&(i.vx=-i.vx),a+i.radius>m.canvas.h?i.vy=-i.vy:a-i.radius<0&&(i.vy=-i.vy)}}()}else 0==m.tmp.repulse_clicking&&(i.vx=i.vx_i,i.vy=i.vy_i)},m.fn.modes.grabParticle=function(e){if(m.interactivity.events.onhover.enable&&"mousemove"==m.interactivity.status){var t=e.x-m.interactivity.mouse.pos_x,a=e.y-m.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=m.interactivity.modes.grab.distance){var n=m.interactivity.modes.grab.line_linked.opacity-i/(1/m.interactivity.modes.grab.line_linked.opacity)/m.interactivity.modes.grab.distance;if(0<n){var s=m.particles.line_linked.color_rgb_line;m.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",m.canvas.ctx.lineWidth=m.particles.line_linked.width,m.canvas.ctx.beginPath(),m.canvas.ctx.moveTo(e.x,e.y),m.canvas.ctx.lineTo(m.interactivity.mouse.pos_x,m.interactivity.mouse.pos_y),m.canvas.ctx.stroke(),m.canvas.ctx.closePath()}}}},m.fn.vendors.eventsListeners=function(){"window"==m.interactivity.detect_on?m.interactivity.el=window:m.interactivity.el=m.canvas.el,(m.interactivity.events.onhover.enable||m.interactivity.events.onclick.enable)&&(m.interactivity.el.addEventListener("mousemove",function(e){if(m.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;m.interactivity.mouse.pos_x=t,m.interactivity.mouse.pos_y=a,m.tmp.retina&&(m.interactivity.mouse.pos_x*=m.canvas.pxratio,m.interactivity.mouse.pos_y*=m.canvas.pxratio),m.interactivity.status="mousemove"}),m.interactivity.el.addEventListener("mouseleave",function(e){m.interactivity.mouse.pos_x=null,m.interactivity.mouse.pos_y=null,m.interactivity.status="mouseleave"})),m.interactivity.events.onclick.enable&&m.interactivity.el.addEventListener("click",function(){if(m.interactivity.mouse.click_pos_x=m.interactivity.mouse.pos_x,m.interactivity.mouse.click_pos_y=m.interactivity.mouse.pos_y,m.interactivity.mouse.click_time=(new Date).getTime(),m.interactivity.events.onclick.enable)switch(m.interactivity.events.onclick.mode){case"push":m.particles.move.enable?m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb,m.interactivity.mouse):1==m.interactivity.modes.push.particles_nb?m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb,m.interactivity.mouse):1<m.interactivity.modes.push.particles_nb&&m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb);break;case"remove":m.fn.modes.removeParticles(m.interactivity.modes.remove.particles_nb);break;case"bubble":m.tmp.bubble_clicking=!0;break;case"repulse":m.tmp.repulse_clicking=!0,m.tmp.repulse_count=0,m.tmp.repulse_finish=!1,setTimeout(function(){m.tmp.repulse_clicking=!1},1e3*m.interactivity.modes.repulse.duration)}})},m.fn.vendors.densityAutoParticles=function(){if(m.particles.number.density.enable){var e=m.canvas.el.width*m.canvas.el.height/1e3;m.tmp.retina&&(e/=2*m.canvas.pxratio);var t=e*m.particles.number.value/m.particles.number.density.value_area,a=m.particles.array.length-t;a<0?m.fn.modes.pushParticles(Math.abs(a)):m.fn.modes.removeParticles(a)}},m.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<m.particles.array.length;a++){var i=m.particles.array[a],n=e.x-i.x,s=e.y-i.y;Math.sqrt(n*n+s*s)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*m.canvas.w,e.y=t?t.y:Math.random()*m.canvas.h,m.fn.vendors.checkOverlap(e))}},m.fn.vendors.createSvgImg=function(s){var e=m.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(e,t,a,i){if(s.color.rgb)var n="rgba("+s.color.rgb.r+","+s.color.rgb.g+","+s.color.rgb.b+","+s.opacity+")";else n="hsla("+s.color.hsl.h+","+s.color.hsl.s+"%,"+s.color.hsl.l+"%,"+s.opacity+")";return n}),t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),a=window.URL||window.webkitURL||window,i=a.createObjectURL(t),n=new Image;n.addEventListener("load",function(){s.img.obj=n,s.img.loaded=!0,a.revokeObjectURL(i),m.tmp.count_svg++}),n.src=i},m.fn.vendors.destroypJS=function(){cancelAnimationFrame(m.fn.drawAnimFrame),a.remove(),pJSDom=null},m.fn.vendors.drawShape=function(e,t,a,i,n,s){var r=n*s,o=n/s,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var v=0;v<r;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},m.fn.vendors.exportImg=function(){window.open(m.canvas.el.toDataURL("image/png"),"_blank")},m.fn.vendors.loadImg=function(e){if(m.tmp.img_error=void 0,""!=m.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",m.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(m.tmp.source_svg=e.currentTarget.response,m.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),m.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",function(){m.tmp.img_obj=a,m.fn.vendors.checkBeforeDraw()}),a.src=m.particles.shape.image.src}else console.log("Error pJS - No image.src"),m.tmp.img_error=!0},m.fn.vendors.draw=function(){"image"==m.particles.shape.type?"svg"==m.tmp.img_type?m.tmp.count_svg>=m.particles.number.value?(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame)):m.tmp.img_error||(m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw)):null!=m.tmp.img_obj?(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame)):m.tmp.img_error||(m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw)):(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame))},m.fn.vendors.checkBeforeDraw=function(){"image"==m.particles.shape.type?"svg"==m.tmp.img_type&&null==m.tmp.source_svg?m.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(m.tmp.checkAnimFrame),m.tmp.img_error||(m.fn.vendors.init(),m.fn.vendors.draw())):(m.fn.vendors.init(),m.fn.vendors.draw())},m.fn.vendors.init=function(){m.fn.retinaInit(),m.fn.canvasInit(),m.fn.canvasSize(),m.fn.canvasPaint(),m.fn.particlesCreate(),m.fn.vendors.densityAutoParticles(),m.particles.line_linked.color_rgb_line=hexToRgb(m.particles.line_linked.color)},m.fn.vendors.start=function(){isInArray("image",m.particles.shape.type)?(m.tmp.img_type=m.particles.shape.image.src.substr(m.particles.shape.image.src.length-3),m.fn.vendors.loadImg(m.tmp.img_type)):m.fn.vendors.checkBeforeDraw()},m.fn.vendors.eventsListeners(),m.fn.vendors.start()};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,a,i){return t+t+a+a+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,t,a){return Math.min(Math.max(e,t),a)}function isInArray(e,t){return-1<t.indexOf(e)}function fullscroll(){if("undefined"==typeof fires&&(fires=[]),"undefined"!=typeof svgDoc&&null!=svgDoc&&fires.length<3&&(fires=svgDoc.getElementsByClassName("fire")),scrollHandling.allow){for(var e=0;e<fires.length;e++)fires[e].style.display="block";var t=$(fullcont).scrollTop(),a=t>lastScrollTop?"down":"up";lastScrollTop=t,clearTimeout($.data(fullcont,"scrollTimer")),$.data(fullcont,"scrollTimer",setTimeout(function(){for(var e=0;e<fires.length;e++)fires[e].style.display="none"},250)),"up"==a?rocketsvg.css("transform","rotate(180deg)"):rocketsvg.css("transform","rotate(0deg)");for(var i=fullcont.scrollTop(),n=0;n<lazyloadImages.length;n++){var s=lazyloadImages[n];s.getBoundingClientRect().top<window.innerHeight+i&&(s.src=s.dataset.src,s.classList.remove("lazyimage"))}var r=100*i/(childcontparent.height()-(reachus.height()-teamscroll.height()-contactshelf.height()));$(rocketsvg).css("top",r+"%");var o=[0,20,50,75,100],c=[title_link,about_link,sponsor_link,faq_link,contact_link];for(e=0;e<5;e++)Math.abs(r-o[e])<12?c[e].addClass("highlighted"):c[e].removeClass("highlighted");$(fullcont).scrollTop()>=$("#ramanujan").position().top&&!triggered&&(triggered=!0,ramanujaninner.each(function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:1e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum+"+")}})}))}}function getOffset(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-e.scrollLeft,a+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{top:a,left:t}}function rocketDrag(e){}function get_email(){email_id=document.getElementById("id_email").value,console.log(email_id)}Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e=e||"particles-js";var a=document.getElementById(e),i="particles-js-canvas-el",n=a.getElementsByClassName(i);if(n.length)for(;0<n.length;)a.removeChild(n[0]);var s=document.createElement("canvas");s.className=i,s.style.width="100%",s.style.height="100%",null!=document.getElementById(e).appendChild(s)&&pJSDom.push(new pJS(e,t))},window.particlesJS.load=function(a,e,i){var n=new XMLHttpRequest;n.open("GET",e),n.onreadystatechange=function(e){if(4==n.readyState)if(200==n.status){var t=JSON.parse(e.currentTarget.response);window.particlesJS(a,t),i&&i()}else console.log("Error pJS - XMLHttpRequest status: "+n.status),console.log("Error pJS - File config not found")},n.send()},particlesJS("particles-js",{particles:{number:{value:60,density:{enable:!0,value_area:1100}},color:{value:"#99dfdf"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:.1,opacity_min:.5278501879958744,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:20,size_min:1.9,sync:!1}},line_linked:{enable:!0,distance:220,color:"#ddd",opacity:.3,width:1.2},move:{enable:!0,speed:.6,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0}),$(document).ready(function(){$(window).on("load",function(){preloaderFadeOutTime=500,$(".preloadsvg").fadeOut(preloaderFadeOutTime)})}),$(document).ready(function(){if(lastScrollTop=0,ramanujaninner=$(".rect-future-inner"),triggered=!1,fullcont=$(".full-container"),childcontparent=$("#innerchildparent"),reachus=$("#view-4"),rocketsvg=$(".rocketsvg"),a=document.getElementById("alphasvg"),title_link=$("#title_link"),about_link=$("#about_link"),sponsor_link=$("#sponsor18_link"),contact_link=$("#contact_link"),faq_link=$("#faq_link"),lazyloadImages=document.getElementsByClassName("lazyimage"),rockervanilla=document.getElementsByClassName("rocketsvg")[0],svgDoc=a.contentDocument,$(".full-container").on("scroll",fullscroll),"undefined"!=typeof svgDoc&&null!=svgDoc){fires=svgDoc.getElementsByClassName("fire");for(var e=0;e<fires.length;e++)fires[e].style.display="none"}}),$(document).ready(function(){sv=document.getElementsByClassName("rocketsvg")[0],reachus=$("#view-4"),teamscroll=$("#info-section"),contactshelf=$("#contact_shelf"),innerchildparent=$("#innerchildparent");var n=!1,s=document.getElementsByClassName("full-container")[0];$(".overlaysvg").mousedown(function(){n=!0}),$("*").mousemove(function(e){if(n){for(var t=0;t<fires.length;t++)fires[t].style.display="block";var a=window.innerHeight;if(0<e.pageY-.05*a&&e.pageY<.95*a){var i=100*(e.pageY-.05*a)/(.9*a);sv.style.top=i+"% ",sv.style.transition="none",s.style.scrollBehavior="unset",s.scrollTop=.01*i*(innerchildparent.height()-(reachus.height()-teamscroll.height()-contactshelf.height()))}}}),$("*").mouseup(function(){n&&(n=!1,s.style.scrollBehavior="smooth")})});var TxtType=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};if(TxtType.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,i=80;this.isDeleting&&(i-=30),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},i)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var a=e[t].getAttribute("data-type"),i=e[t].getAttribute("data-period");a&&new TxtType(e[t],JSON.parse(a),i)}var n=document.createElement("style");n.type="text/css",n.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(n)},$(document).ready(function(){var t=new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');$(".email input").on("keyup",function(e){$(this).parent().toggleClass("success",t.test($(this).val())),console.log("asd")})}),detectIE())for(var frames=document.querySelectorAll(".js_video-box-frame"),i=frames.length;i--;)frames[i].style.display="none";function detectIE(){var e=window.navigator.userAgent,t=!!~e.indexOf("MSIE "),a=!!~e.indexOf("Trident/"),i=!!~e.indexOf("Edge/");return t||a||i}
