"use strict";
const miniList = document.querySelector("#thumbs");
const bigPhotoElem = document.querySelector("#largeImg");
miniList.addEventListener("click", (clickEvent)=>{
    clickEvent.preventDefault();
    const link = clickEvent.target.closest(".list-item__link");
    if (!link) return;
    bigPhotoElem.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
