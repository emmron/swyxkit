import{S as a,i as e,s,e as t,t as l,k as r,c,a as o,g as i,d as h,n as f,b as n,f as d,G as v,H as m,h as k,I as u}from"./vendor-854805dc.js";function g(a){let e,s,g,b,p,E,x,y,I,S,w,L,N,V,z,A,D,j,B,G,H,T,U,M=a[0]?"😎":"🌙";return{c(){e=t("nav"),s=t("div"),g=t("div"),b=t("a"),p=l("Site Name"),E=r(),x=t("div"),y=t("ul"),I=t("li"),S=t("a"),w=l("Blog"),L=r(),N=t("li"),V=t("a"),z=l("GitHub"),A=r(),D=t("li"),j=t("button"),B=l(M),G=r(),H=t("div"),this.h()},l(a){e=c(a,"NAV",{class:!0});var t=o(e);s=c(t,"DIV",{class:!0});var l=o(s);g=c(l,"DIV",{class:!0});var r=o(g);b=c(r,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var n=o(b);p=i(n,"Site Name"),n.forEach(h),r.forEach(h),E=f(l),x=c(l,"DIV",{class:!0});var d=o(x);y=c(d,"UL",{class:!0});var v=o(y);I=c(v,"LI",{class:!0});var m=o(I);S=c(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=o(S);w=i(k,"Blog"),k.forEach(h),m.forEach(h),L=f(v),N=c(v,"LI",{class:!0});var u=o(N);V=c(u,"A",{href:!0,class:!0});var T=o(V);z=i(T,"GitHub"),T.forEach(h),u.forEach(h),A=f(v),D=c(v,"LI",{class:!0});var U=o(D);j=c(U,"BUTTON",{});var O=o(j);B=i(O,M),O.forEach(h),U.forEach(h),v.forEach(h),d.forEach(h),l.forEach(h),t.forEach(h),G=f(a),H=c(a,"DIV",{class:!0}),o(H).forEach(h),this.h()},h(){n(b,"sveltekit:prefetch",""),n(b,"href","/"),n(b,"class","text-3xl font-bold p-3"),n(g,"class","LeftNav hidden md:block"),n(S,"sveltekit:prefetch",""),n(S,"href","/blog"),n(S,"class","p-3 nav-link svelte-f5uz4z"),n(I,"class","sm:inline-block relative"),n(V,"href","https://github.com/sw-yx/swyxkit"),n(V,"class","p-3 nav-link svelte-f5uz4z"),n(N,"class","sm:inline-block relative"),n(D,"class","sm:inline-block"),n(y,"class","flex justify-center sm:items-center text-xl"),n(x,"class","sm:flex RightNav"),n(s,"class","sm:flex justify-between"),n(e,"class","bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4 border-b-thick dark:border-0"),n(H,"class","flex h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500")},m(t,l){d(t,e,l),v(e,s),v(s,g),v(g,b),v(b,p),v(s,E),v(s,x),v(x,y),v(y,I),v(I,S),v(S,w),v(y,L),v(y,N),v(N,V),v(V,z),v(y,A),v(y,D),v(D,j),v(j,B),d(t,G,l),d(t,H,l),T||(U=m(j,"click",a[1]),T=!0)},p(a,[e]){1&e&&M!==(M=a[0]?"😎":"🌙")&&k(B,M)},i:u,o:u,d(a){a&&h(e),a&&h(G),a&&h(H),T=!1,U()}}}function b(a,e,s){let t=!1;return"undefined"!=typeof localStorage&&("dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(t=!0),[t,function(){t?(document.documentElement.classList.remove("dark"),localStorage.theme="light",s(0,t=!1)):(document.documentElement.classList.add("dark"),localStorage.theme="dark",s(0,t=!0))}]}class p extends a{constructor(a){super(),e(this,a,b,g,s,{})}}export{p as N};
