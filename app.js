const accordionItem = document.querySelectorAll(".accordion_item");

function closeAllItems(exceptIndex) {
    accordionItem.forEach((item, index) => {
        if (index !== exceptIndex) {
            let descriptions = item.querySelector(".descriptions");
            item.classList.remove("open");
            descriptions.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    });
}

accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelectorAll(".accordion_header");
    
    accordionHeader.forEach(header => {
        header.addEventListener("click", () => {
            closeAllItems(index);
            item.classList.toggle("open");
            let descriptions = item.querySelector(".descriptions");
            if(item.classList.contains("open")){
                descriptions.style.height = `${descriptions.scrollHeight}px`;
                item.querySelector("i").classList.replace("fa-plus", "fa-minus");
            }
            else {
                descriptions.style.height = "0px";
                item.querySelector("i").classList.replace("fa-minus", "fa-plus");
            }
            console.log(descriptions);
        });
    });
});
