// get the first button, the first list element, and the corresponding text
// element
let button21 = document.getElementById("box2-button1");
let li21 = document.getElementById("box2-li1");
if (button21 && li21) { // are we in box 2?
    // when the button is clicked, change the text
    button21.onclick = function() {
        li21.innerText = "Button 1 was clicked!";
    };

    // for the second button, we can try the mouse down and mouse up events
    let button22 = document.getElementById("box2-button2");
    let li22 = document.getElementById("box2-li2");
    // on mouse down, change the text
    button22.onmousedown = function() {
        li22.innerText = "Button 2 is being pressed - to break it move the mouse outside the button before releasing";
    };
    button22.onmouseup = function() {
        li22.innerText = "Button 2 has been released";
    };

    // the problem is the we only get mouse up events if the cursor is over
    // the button.
    // there are lots of ways to deal with this - here's one using the
    // mouseleave event (when the mouse leaves the button)
    let button23 = document.getElementById("box2-button3");
    let li23 = document.getElementById("box2-li3");
    // I will keep track of state myself
    let button23state = 0;
    button23.onmousedown = function() {
        li23.innerText = "Button 3 is being pressed";
        button23state = 1;
    };
    button23.onmouseup = function() {
        if (button23state) {
            li23.innerText = "Button 3 has been released correctly";
        } else {
            li23.innerText = "Button 3 was released without being pressed (enter while press)";
        }
        button23state = 0;
    };
    button23.onmouseleave = function() {
        if (button23state) {
            li23.innerText = "Button 3 was left without being released";
        } 
        button23state = 0;
    };
    //adding this comment to indicate that I have read this box.
}
