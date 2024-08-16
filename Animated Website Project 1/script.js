let cursor=document.querySelector("#cursor");
let cursorBlur=document.querySelector("#cursor-blur");
let nav=document.querySelectorAll("#nav h4");
let navDiv=document.querySelector("#nav div");
let imgDiv=document.querySelectorAll(".dots div");
let foodImg=document.querySelector("#food-img");

nav.forEach((val)=>{
    val.addEventListener("mouseenter",()=>{
        val.style.color="#95c11e";
        val.style.cursor="pointer";
    })
    val.addEventListener("mouseout",()=>{
        val.style.color="white";
    })
})

navDiv.addEventListener("mouseenter",()=>{
    navDiv.style.backgroundColor="#95c11e";
    navDiv.style.color="black";
})
navDiv.addEventListener("mouseout",()=>{
    navDiv.style.backgroundColor="black";
    navDiv.style.color="white";
})

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursorBlur.style.left=dets.x-150+"px";
    cursorBlur.style.top=dets.y-150+"px";
})
let change=(obj)=>{
    obj.style.backgroundColor = "white";
    obj.style.transform = "scale(1)";
  }

imgDiv[0].addEventListener("click", () => {
    foodImg.style.backgroundImage = "url('https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1')";
    imgDiv[0].style.backgroundColor = "#95c113";
    imgDiv[0].style.transform = "scale(1.3)";
    change(imgDiv[1]);
    change(imgDiv[2]);
  });
imgDiv[1].addEventListener("click", () => {
    foodImg.style.backgroundImage = "url('https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869-734x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1')";
    imgDiv[1].style.backgroundColor = "#95c113";
    imgDiv[1].style.transform = "scale(1.3)";
    change(imgDiv[0]);
    change(imgDiv[2]);
  });
  
  imgDiv[2].addEventListener("click", () => {
    foodImg.style.backgroundImage = "url('https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1')";
    imgDiv[2].style.backgroundColor = "#95c113"; 
    imgDiv[2].style.transform = "scale(1.3)";
    change(imgDiv[0]);
    change(imgDiv[1]);
  });

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%", 
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:3
    }
})

gsap.from(".aboutus img,#aboutus", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutus",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale:0.8,
    duration: 1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:3
    }
})
gsap.from("#lastmsg",{
  y:50,
  scrollTrigger:{
    trigger:"#lastmsg",
    scroller:"body",
    start:"top 80%",
    end:"top 85%",
    scrub:2,
  }
})