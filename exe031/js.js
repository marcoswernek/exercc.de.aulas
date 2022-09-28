var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Update the picsum image source on btn click
imgRefreshBtn.onclick = function () {
    document.getElementById("hero__image").src =
        "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};
