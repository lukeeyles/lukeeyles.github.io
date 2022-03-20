function readMore(project) {
    //let dots = document.querySelector(`.content[project="${project}"] .dots`);
    let moreText = document.querySelector(`.content[project="${project}"] .more`); 
    let btnText = document.querySelector(`.content[project="${project}"] .myBtn`);

    if (moreText.style.display === "none") {
        //dots.style.display = "inline";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    } else {
        //dots.style.display = "none";
        
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    }
}