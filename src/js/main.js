import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

function aboutContent() {
    let aboutContent = document.getElementById("about");
    // aboutContent.innerHTML = "Sunday Afternoon is an award-winning BIPOC & Women-owned creative company. We create impactful culture-expanding work for established and challenger brands that are looking to shake up the status quo. We believe in a fundamentally diverse and progressive approach to problem solving through design. A combination of relentless curiosity, forward-thinking technology and access to a global pool of renowned artists leads to holistic brand work that is uniquely built to be future-proof in an IRL-to-URL World."
    const a = "Sunday Afternoon is an ";
    const b = "award-winning ";
    const c = "BIPOC & Women-owned ";
    const d = "creative company. We create impactful culture-expanding work for established and challenger brands that are looking to shake up the status quo. We believe in a fundamentally diverse and progressive approach to problem solving through design. A combination of relentless curiosity, forward-thinking technology and access to a global pool of renowned artists leads to holistic brand work that is uniquely built to be future-proof in an IRL-to-URL World.";
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")
    const span4 = document.createElement("span")
    span1.innerHTML = a
    span2.innerHTML = b
    span3.innerHTML = c
    span4.innerHTML = d
    aboutContent.appendChild(span1)
    aboutContent.appendChild(span2)
    aboutContent.appendChild(span3)
    aboutContent.appendChild(span4)
    colorInteraction(span3)
}
aboutContent()

function colorInteraction(span) {

    span.addEventListener('mouseover', function() {
        let colors = [
            '#FF0000',
            '#FF8000',
            '#FFFF00',
            '#80FF00',
            '#00FF00',
            '#00FF80',
            '#00FFFF',
            '#0080FF',
            '#0000FF',
            '#8040FF',
            '#000'
        ];
        let index = 0;

        function changeColor() {
            span.style.color = colors[index];
            index++;

            if (index < colors.length) {
                setTimeout(changeColor, 200); // Change color every 0.5 seconds
            }
        }
        changeColor();
    });

    span.addEventListener('mouseout', function() {
        // Reset color back to black when mouse leaves the element
        span.style.color = 'black';
    });
}