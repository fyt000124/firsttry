window.onscroll=function(){
    var topScroll =window.pageYOffset;//滚动的距离,距离顶部的距离
    //alert(topScroll);
    var bignav = document.getElementById("nav");//获取到导航栏id
    if(topScroll > 90){ //当滚动距离大于250px时执行下面的东西
    bignav.style.position = 'fixed';
    bignav.style.top = '0';
    bignav.style.zIndex = '9999';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
    bignav.style.position = 'absolute';
    bignav.style.top='120px'
    }
    }