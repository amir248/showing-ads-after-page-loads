let yan=document.createElement('script');
yan.setAttribute('src','https://qucu.ru/script/yan.js');// tags in head
document.querySelector('head').append(yan);

window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    let yanBan=document.createElement('script');
    yanBan.setAttribute('async','');
    yanBan.setAttribute('src','https://yandex.ru/ads/system/context.js');
    document.querySelector('head').append(yanBan);
  },100);
});




//script for ads blockId
setTimeout(()=>{
//it's here banners
},1700);
