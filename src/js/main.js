import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

function aboutContent() {
    let aboutContent = document.getElementById("about");
    // aboutContent.innerHTML = "Sunday Afternoon is an award-winning BIPOC & Women-owned creative company. We create impactful culture-expanding work for established and challenger brands that are looking to shake up the status quo. We believe in a fundamentally diverse and progressive approach to problem solving through design. A combination of relentless curiosity, forward-thinking technology and access to a global pool of renowned artists leads to holistic brand work that is uniquely built to be future-proof in an IRL-to-URL World."
    let textarray = ["Sunday Afternoon", " is an ", "award-winning ", "BIPOC & Women-owned", " creative company. We create impactful culture-expanding work for established and challenger brands that are looking to shake up the status quo. We believe in a fundamentally diverse and progressive approach to problem solving through design. A combination of relentless curiosity, forward-thinking technology and access to a global pool of renowned artists leads to holistic brand work that is uniquely built to be future-proof in an ", "IRL-to-URL", " World."]
    let spanarray = []
    for (let i = 0; i < textarray.length; i++) {
        let textcontent = textarray[i]
        let span = document.createElement("span")
        span.innerHTML = textcontent
        aboutContent.appendChild(span)
        spanarray.push(span)
    }
    shadowanime(spanarray[0])
        // spacing(spanarray[5])
    bounce(spanarray[3])
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
            if (index !== 0 || index < colors.length) {
                setTimeout(changeColor, 350); // Change color every 0.5 seconds
            }
        }
        changeColor();
    });
    span.addEventListener('mouseout', function() {
        span.style.color = 'black';
    });
}


function shadowanime(span) {
    span.classList.add("shadowanima");
}

function bounce(span) {
    span.innerHTML = span.textContent.split('').map(function(char) {
        if (char === ' ') {
            return char;
        }
        return '<span class="bounce">' + char + '</span>';
    }).join('');
    span.addEventListener('mouseenter', function() {
        var chars = span.querySelectorAll('.bounce');
        console.log(chars)
        chars.forEach(function(char, i) {
            setTimeout(function() {
                char.classList.add('wave');
            }, i * 100);
            setTimeout(function() {
                char.classList.remove('wave');
            }, i * 100 + 350);
        });
    });
}