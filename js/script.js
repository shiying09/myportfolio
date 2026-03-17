/*Typing animation*/
const text = "I am a Math Tutor | Data Analyst";
let index = 0;

function type() {
    const typingElement = document.getElementById("typing");

    if (index < text.length) {
        // Type the next character
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Typing speed
    } else {
        // Text is finished! Wait 3 seconds, then refresh
        setTimeout(() => {
            typingElement.innerHTML = ""; // Clear the text
            index = 0; // Reset index
            type(); // Start typing again
        }, 3000); 
    }
}

type();

/*Clock*/
function updateClock(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
}

setInterval(updateClock,1000);
updateClock();

/*Views*/
document.addEventListener("DOMContentLoaded", function () {

fetch("https://countapi.mileshilliard.com/api/v1/hit/shiying09_myportfolio")
.then(res => res.json())
.then(data => {
    document.getElementById("views").textContent = data.value;
});

});

/*Dark mode*/
const toggle = document.getElementById("darkToggle");

    toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});


/*Image slider*/
function startCarousels() {
// 1. Find all grid items that contain sliding images
const containers = document.querySelectorAll('.item');

containers.forEach(container => {
    const slides = container.querySelectorAll('.mySlides');
    
    // Only proceed if this specific container actually has images
    if (slides.length > 0) {
        let currentIndex = 0;

        function showNextSlide() {
            // Hide all slides in THIS container
            slides.forEach(img => img.style.display = "none");
            
            // Move to next index
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            
            // Show the current slide
            slides[currentIndex].style.display = "block";
            
            // Repeat every 5 seconds
            setTimeout(showNextSlide, 5000);
        }

            // Initialize the first view
            showNextSlide();
        }
    });
}

// Start the process
startCarousels();

function openPopup(place){

const stories = {


jnj: `
<h3>📍 Exploring Data at Johnson & Johnson</h3>

<p>During my internship at Johnson & Johnson, I had the chance to wander into the world of <b>patient-related data </b>
    and saw how statistical analysis can support real healthcare decisions. It felt a bit like exploring a new landscape 
    except instead of paths and maps, I followed patterns, numbers, and statistical clues.</p>



<br>

<p> Along the way, I learned how real datasets are prepared, explored, and interpreted, and how those little discoveries 
    can support meaningful decisions in healthcare. The experience showed me that behind every dataset is a story waiting 
    to be uncovered  and sometimes all it takes is curiosity (and a bit of statistics) to find it.</p>

`,

tutor: `
<h3>📍 Guiding Students as a Math Tutor</h3>

<p>Currently working as a <b> Mathematics Tutor </b> in <b> Ikigai Math </b>. With a background in Mathematical Sciences, I enjoy guiding students 
 through the little “aha” moments that make math start to feel less intimidating and more like solving a puzzle. </p>

<br>

<p>To me, learning math is a bit like wandering through ideas: sometimes we take small steps, sometimes we pause to look at 
    patterns, and sometimes we discover a shortcut that suddenly makes everything clearer. I focus on helping students understand  concepts 
    step by step so they can build confidence and develop their own way of thinking through problems.</p>
    
<br>
<p>Seeing students grow more comfortable with math and maybe even a little curious about it is one of the most rewarding parts of teaching.</p>


`,


};

document.getElementById("popup-text").innerHTML = stories[place];
document.getElementById("popup").style.display = "flex";

}


function closePopup(){
document.getElementById("popup").style.display = "none";
}
