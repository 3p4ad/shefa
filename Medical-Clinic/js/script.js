//==============================
// Loader
//==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

//==============================
// Hamburger Menu
//==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.innerHTML = navMenu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

//==============================
// Close Menu
//==============================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

//==============================
// Counter
//==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);
        const count = +counter.getAttribute("data-count") || 0;
        const speed = Math.ceil(target / 100);

        if (count < target) {

            counter.setAttribute("data-count", count + speed);
            counter.innerText = count + speed;

            setTimeout(update, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

//==============================
// WhatsApp Form
//==============================

const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name=this.querySelector('input[type="text"]').value;
    const phone=this.querySelector('input[type="tel"]').value;
    const department=this.querySelector("select").value;
    const date=this.querySelector('input[type="date"]').value;
    const message=this.querySelector("textarea").value;

    const text=`
    *حجز موعد*

الاسم: ${name}

الهاتف: ${phone}

القسم: ${department}

التاريخ: ${date}

الملاحظات:
${message}`;

    window.open`(https://wa.me/9647830929916?text=${encodeURIComponent(text)})`;

});

}


//==============================
// Language System
//==============================

const languageSelect = document.getElementById("language");

function changeLanguage(lang){

    document.documentElement.lang = lang;

    document.documentElement.dir = (lang === "en") ? "ltr" : "rtl";

    document.querySelectorAll("[data-ar]").forEach(el=>{

        if(el.dataset[lang]){

            el.textContent = el.dataset[lang];

        }

    });

    document.querySelectorAll("[data-ar-placeholder]").forEach(el=>{

        const key =`${lang}Placeholder`;

        if(el.dataset[key]){

            el.placeholder = el.dataset[key];

        }

    });

    localStorage.setItem("clinic-language",lang);

}

const savedLanguage = localStorage.getItem("clinic-language") || "ar";

languageSelect.value = savedLanguage;

changeLanguage(savedLanguage);

languageSelect.addEventListener("change",()=>{

    changeLanguage(languageSelect.value);

});

//==============================
// Scroll Animation
//==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".section-title,.stat-card,.department-card,.service-card,.why-card,.doctor-card,.gallery-grid img,.testimonial-card,.info-card"
).forEach(item=>{

    observer.observe(item);

});

//==============================
// Active Navigation
//==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

//==============================
// Gallery Light Hover
//==============================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

//==============================
// Current Year
//==============================

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

//==============================
// FAQ Accordion
//==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button = item.querySelector("button");
    const content = item.querySelector(".faq-content");

    content.style.maxHeight = "0px";
    content.style.overflow = "hidden";
    content.style.transition = ".35s ease";

    button.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq !== item){

                faq.querySelector(".faq-content").style.maxHeight = "0px";
                faq.classList.remove("active");

            }

        });

        if(item.classList.contains("active")){

            content.style.maxHeight = "0px";
            item.classList.remove("active");

        }else{

            content.style.maxHeight = content.scrollHeight + "px";
            item.classList.add("active");

        }

    });

});

//==============================
// Navbar Shadow
//==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";

    }

});

//==============================
// Smooth Scroll
//==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

//==============================
// Scroll To Top Button
//==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "scrollTop";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
    position:"fixed",
    bottom:"25px",
    left:"25px",
    width:"50px",
    height:"50px",
    border:"none",
    borderRadius:"50%",
    background:"#0F6CBD",
    color:"#fff",
    cursor:"pointer",
    display:"none",
    zIndex:"999"
});

window.addEventListener("scroll",()=>{

    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

    topBtn.style.alignItems = "center";
    topBtn.style.justifyContent = "center";

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

//==============================
// Active Page Link
//==============================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("#navMenu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});

//==============================
// Image Lazy Loading
//==============================

document.querySelectorAll("img").forEach(img=>{

    img.loading = "lazy";

});

//==============================
// Prevent Empty Links
//==============================

document.querySelectorAll('a[href="#"]').forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

    });

});

//==============================
// Copy Phone Number
//==============================

document.querySelectorAll(".copy-phone").forEach(btn=>{

    btn.addEventListener("click",()=>{

        navigator.clipboard.writeText("07830929916");

        btn.innerText="✓";

        setTimeout(()=>{

            btn.innerText="Copy";

        },1500);

    });

});

//==============================
// Footer Year
//==============================

const footerYear=document.querySelector(".footer-year");

if(footerYear){

    footerYear.textContent=new Date().getFullYear();

}

//==============================
// Disable Right Click (Optional)
//==============================

document.addEventListener("contextmenu",e=>{

    e.preventDefault();

});

//==============================
// Keyboard Shortcuts
//==============================

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        navMenu.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

//==============================
// End
//==============================

console.log("Al Shifa Medical Clinic Loaded Successfully.");

