// My Experience

function showuva1(){
    // window.alert("haha");
    document.getElementById("showuva1").style.display = "flex";
    document.getElementById("showuva2").style.display = "none";
    document.getElementById("showuva3").style.display = "none";

    document.getElementById("titleuva1").style.backgroundColor = "#f5f5f5";
    document.getElementById("titleuva2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleuva3").style.backgroundColor = "#FFFFFF";
}

function showuva2(){
    document.getElementById("showuva1").style.display = "none";
    document.getElementById("showuva2").style.display = "block";
    document.getElementById("showuva3").style.display = "none";

    document.getElementById("titleuva1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleuva2").style.backgroundColor = "#f5f5f5";
    document.getElementById("titleuva3").style.backgroundColor = "#FFFFFF";

}

function showuva3(){
    document.getElementById("showuva1").style.display = "none";
    document.getElementById("showuva2").style.display = "none";
    document.getElementById("showuva3").style.display = "block";

    document.getElementById("titleuva1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleuva2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleuva3").style.backgroundColor = "#f5f5f5";
}

function showpsu1(){
    // window.alert("haha");
    document.getElementById("showpsu1").style.display = "flex";
    document.getElementById("showpsu2").style.display = "none";
    document.getElementById("showpsu3").style.display = "none";

    document.getElementById("titlepsu1").style.backgroundColor = "#f5f5f5";
    document.getElementById("titlepsu2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titlepsu3").style.backgroundColor = "#FFFFFF";
    // document.getElementsByClassName("content-template-content-1").style.display="block";
    // window.alert("hha");
    // document.getElementsByClassName("content-template-content-2").style.display="none";
    // document.getElementsByClassName("content-template-content-3").style.display="none";
}

function showpsu2(){
    document.getElementById("showpsu1").style.display = "none";
    document.getElementById("showpsu2").style.display = "block";
    document.getElementById("showpsu3").style.display = "none";

    document.getElementById("titlepsu1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titlepsu2").style.backgroundColor = "#f5f5f5";
    document.getElementById("titlepsu3").style.backgroundColor = "#FFFFFF";

}

function showpsu3(){
    document.getElementById("showpsu1").style.display = "none";
    document.getElementById("showpsu2").style.display = "none";
    document.getElementById("showpsu3").style.display = "block";

    document.getElementById("titlepsu1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titlepsu2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titlepsu3").style.backgroundColor = "#f5f5f5";
}


function showccut1(){
    // window.alert("haha");
    document.getElementById("showccut1").style.display = "flex";
    document.getElementById("showccut2").style.display = "none";
    document.getElementById("showccut3").style.display = "none";

    document.getElementById("titleccut1").style.backgroundColor = "#f5f5f5";
    document.getElementById("titleccut2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleccut3").style.backgroundColor = "#FFFFFF";
    // document.getElementsByClassName("content-template-content-1").style.display="block";
    // window.alert("hha");
    // document.getElementsByClassName("content-template-content-2").style.display="none";
    // document.getElementsByClassName("content-template-content-3").style.display="none";
}

function showccut2(){
    document.getElementById("showccut1").style.display = "none";
    document.getElementById("showccut2").style.display = "block";
    document.getElementById("showccut3").style.display = "none";

    document.getElementById("titleccut1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleccut2").style.backgroundColor = "#f5f5f5";
    document.getElementById("titleccut3").style.backgroundColor = "#FFFFFF";

}

function showccut3(){
    document.getElementById("showccut1").style.display = "none";
    document.getElementById("showccut2").style.display = "none";
    document.getElementById("showccut3").style.display = "block";

    document.getElementById("titleccut1").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleccut2").style.backgroundColor = "#FFFFFF";
    document.getElementById("titleccut3").style.backgroundColor = "#f5f5f5";
}

// document.querySelector('.navbar-toggle').addEventListener('click', function() {
//     document.querySelector('.navbar-menu').classList.toggle('active');
//   });


function navbarToggleList(){
    var navbarList = document.getElementById('navbar-list');
    if(navbarList.style.display == 'block'){
        navbarList.style.display = 'none';
    }else{
        navbarList.style.display = 'block';
    }
}

// Life Part

function openModal(modalId, imageId, imageUrl) {
    var modal = document.getElementById(modalId);
    var modalImage = document.getElementById(imageId);
    modalImage.src = imageUrl;
    modal.style.display = 'flex';

    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    
    document.body.classList.add('lock-scroll');
    // 记录当前滚动位置
    document.body.setAttribute('data-scroll', scrollPosition);
    // 固定页面位置
    document.body.style.top = `-${scrollPositionY}px`;
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // document.body.style.overflow = 'hidden';

    document.body.classList.remove('lock-scroll');
    // 恢复之前的滚动位置
    const scrollPosition = document.body.getAttribute('data-scroll');
    document.body.removeAttribute('data-scroll');
    // 解除固定页面位置
    document.body.style.position = '';
    // document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    document.body.style.overflow = 'auto';

}

