const leftMenu =
'<b class="text-white"><div class="vertical-navbar bg-blue-4 p-10 radius-5 mr-10">'+
        '<a class="text-black" href="index.html">Giriş</a>'+
        '<a class="text-black" href="isimlendirmeler.html">isimlendirmeler</a>'+
        '<a class="text-black" href="yorumlar.html">Yorumlar</a>'+
        '<a class="text-black" href="metotlar.html">Metotlar</a>'+
    '</div></b>';

document.getElementById("leftMenu").innerHTML = leftMenu;

const navbar = 
'<div class="col-2 justify-content-center vertical-align-center"><img class="logo" src="images/abmLogo.png"></div>'+
'<div class="col-10 justify-content-center vertical-align-center text-white"><span class="fs-xxl">Etkili Kod Yazma Teknikleri</span></div>';

document.getElementById("navbar").innerHTML = navbar;

const footer =
'<div class="col-12 justify-content-center vertical-align-center vh-5 bg-blue-4 radius-5">'+
'<span class="text-white"> <a class="no-decoration" href="https://makinahmet.github.io/abmcss.github.io/">ABMCSS</a> kullanılarak yazılmıştır. </span>'+
'</div>';

document.getElementById("footer").innerHTML = footer;