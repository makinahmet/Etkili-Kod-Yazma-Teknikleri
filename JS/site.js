const leftMenu =
'<div class="hamnav">'+
    '<!-- (B) THE HAMBURGER -->'+
    '<label for="verticalHamburger" class="fs-l">☰</label>'+
    '<input type="checkbox" id="verticalHamburger" class="hamChekbox"/>'+

    '<!-- (C) MENU ITEMS -->'+
    '<div class="hamitems">'+
        '<div class="row text-white vertical-navbar bg-blue-4 mt-10 p-10 radius-5">'+
            '<b>KONULAR</b>'+
            '<a class="text-white" href="index.html">Giriş</a>'+
            '<a class="text-white" href="isimlendirmeler.html">isimlendirmeler</a>'+
            '<a class="text-white" href="yorumlar.html">Yorumlar</a>'+
            '<a class="text-white" href="metotlar.html">Metotlar</a>'+
        '</div>'+
    '</div>'+
'</div>';

document.getElementById("leftMenu").innerHTML = leftMenu;

const navbar = 
'<div class="col-2 justify-content-center vertical-align-center"><img class="logo" src="images/abmLogo.png"></div>'+
'<div class="col-10 justify-content-center vertical-align-center text-white"><span class="fs-m">Etkili Kod Yazma Teknikleri</span></div>';

document.getElementById("navbar").innerHTML = navbar;

const footer =
'<div class="col-12 justify-content-center vertical-align-center vh-5 bg-blue-4 radius-5">'+
'<span class="text-white"> <a class="no-decoration text-white" href="https://makinahmet.github.io/abmcss.github.io/">ABMCSS</a> kullanılarak yazılmıştır. </span>'+
'</div>';

document.getElementById("footer").innerHTML = footer;