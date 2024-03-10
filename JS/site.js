const leftMenu =
'<b><div class="vertical-navbar bg-blue-4 p-10 radius-5 mr-10">'+
        '<a class="text-black" href="index.html">Giriş</a>'+
        '<a class="text-black" href="isimlendirmeler.html">isimlendirmeler</a>'+
        '<a class="text-black" href="yorumlar.html">Yorumlar</a>'+
        '<a class="text-black" href="metotlar.html">Metotlar</a>'+
    '</div></b>';

document.getElementById("leftMenu").innerHTML = leftMenu;

const footer =
'<div class="col-12 justify-content-center vertical-align-center vh-5 bg-blue-4 radius-5">'+
'<span> <a class="no-decoration text-white" href="https://makinahmet.github.io/abmcss.github.io/">ABMCSS</a> kullanılarak yazılmıştır. </span>'+
'</div>';

document.getElementById("footer").innerHTML = footer;