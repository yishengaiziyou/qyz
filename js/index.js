window.onload = function () {
    let bei = document.querySelector(".banner");
    let tu = document.querySelectorAll(".banner>.tu");
    let dian = document.querySelectorAll(".banc_son");
    let now = 0;
    let time = setInterval(t,2000);
    function t(){
        if(now == tu.length){
            now = 0
        }
        tu.forEach(function (ele,index) {
            ele.style.opacity = 0;
            dian[index].style.backgroundColor = "#fff";
        });
        tu[now].style.opacity = 1;
        dian[now].style.backgroundColor = "#E1472F";
        now++;
    }
    bei.onmouseover = function () {
        clearInterval(time);
    }
    bei.onmouseout = function () {
        time = setInterval(t,2000);
    }
    dian.forEach(function (ele,index) {
        ele.addEventListener('click', function () {
            tu.forEach(function (ele1,index1) {
                ele1.style.opacity = 0;
                dian[index1].style.backgroundColor = "#fff";
            })
            tu[index].style.opacity = 1;
            this.style.backgroundColor = "#E1472F";
            now = index;
        })
    })
}