const d=document.getElementById("tilt"),f=25;function u(e,n){return e/n*2-1}function h(e,n,t,o){const r=Math.sqrt((t.left-o)**2+(t.top-o)**2);var s=Math.max(t.left-o-e,0,e-t.right-o),a=Math.max(t.top-o-n,0,n-t.bottom-o);return Math.sqrt(s*s+a*a)/r}function p(e,n,t,o,r){return e<r||n<r||e>t-r||n>o-r}let i=!0,l=!0;const M=32,x=-50;document.addEventListener("mouseleave",e=>{i=!1,d.animate({transform:"perspective(63rem) rotateX(0deg) rotateY(0deg)"},{duration:500,fill:"forwards"})});function g(e){const{clientX:n,clientY:t}=e,o=window.innerHeight,r=window.innerWidth,s=d.getBoundingClientRect(),a=h(n,t,s,x);let m=u(n,r)*a*f,c=u(t,o)*a*f;l=p(n,t,r,o,M),i&&!l?d.animate({transform:`perspective(63rem) rotateX(${-c}deg) rotateY(${m}deg)`},{duration:10,fill:"forwards"}):i&&l?(i=!1,d.animate({transform:"perspective(63rem) rotateX(0deg) rotateY(0deg)"},{duration:500,fill:"forwards"})):!i&&!l&&(d.animate({transform:`perspective(63rem) rotateX(${-c}deg) rotateY(${m}deg)`},{duration:500,fill:"forwards"}),setTimeout(()=>{i=!0},1e3))}function v(e){e.matches?document.removeEventListener("mousemove",g):document.addEventListener("mousemove",g)}let w=window.matchMedia("(max-width: 40rem)");v(w);w.addEventListener("change",v);