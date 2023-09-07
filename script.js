var rect = document.querySelector ("#centre");

rect.addEventListener("mousemove", function (details) {
 var rectanglelocation = rect.getBoundingClientRect();
 var insiderecval = details.clientX - rectanglelocation.left;

 if(insiderecval < rectanglelocation.width / 2) {
    var redcolour = gsap.utils.mapRange(
    0,
    rectanglelocation.width / 2, 
    255,
    0, 
    insiderecval
    );
    gsap.to(rect, {
        backgroundColor: `rgb(${redcolour}, 0, 0)`,
         ease: Power4,
    })
}
 else{
    (insiderecval < rectanglelocation.width / 2) 
        var bluecolor = gsap.utils.mapRange(
        rectanglelocation.width / 2, 
        rectanglelocation.width,
        0,
        255, 
        insiderecval
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0,  ${bluecolor})`,
             ease: Power4,
        })
 }

}) 

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})