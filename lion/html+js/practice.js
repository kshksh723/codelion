document.querySelectorAll('.list')[0].addEventListener("click", function(e){
    tabBtn(e.target.dataset.id);
})

function tabBtn(a) {
    document
    .querySelectorAll(".tab-bottom")
    [a].addEventListener("click", function () {
        for (
            let i = 0;
            i < document.querySelectorAll(".tab-button").length;
            i++
        ) {
      document.querySelectorAll(".tab-button")[0].classList.add("here");
      document.querySelectorAll(".tab-content")[0].classList.add("show");
    });
}





