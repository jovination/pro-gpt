const accordionItem = document.querySelectorAll(".accordion_item");

accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelectorAll(".accordion_header");
    
    accordionHeader.forEach(header => {
        header.addEventListener("click", () => {
            item.classList.toggle("open");
            let descriptions = item.querySelector(".descriptions");
            if(item.classList.contains("open")){
                descriptions.style.height = `${descriptions.scrollHeight}px`;
            }
            else {
                descriptions.style.height = "0px";
            }
           console.log(descriptions);
        });
    });
});
