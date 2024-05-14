
const fortuneVar = document.getElementById("fortuneVar");

function messages() {
    randomInteger();
    if (rand == 1) {
        alert('Your hard work will pay off in unexpected ways.');
    } else if (rand == 2) {
        alert('A thrilling adventure awaits you in the near future.');
    } else if (rand == 3) {
        alert('An old friend will reappear in your life with exciting news.');
    } else if (rand == 4) {
        alert('Trust your instincts; they will lead you to success.');
    } else if (rand == 5) {
        alert('Good fortune will come to you through a chance encounter.');
    } else if (rand == 6) {
        alert('Embrace change; it will bring you great opportunities.');
    } else if (rand == 7) {
        alert('Your creativity will lead you to new heights of achievement.');
    } else if (rand == 8) {
        alert('Take a leap of faith; it will lead to prosperity.');
    } else if (rand == 9) {
        alert('A hidden talent will soon be revealed to you.');
    } else if (rand == 10) {
        alert('A wise investment will bring you financial stability.');
    } else if (rand == 11) {
        alert('Your kindness will be repaid tenfold.');
    } else if (rand == 12) {
        alert('Let go of the past; brighter days are ahead.');
    } else if (rand == 13) {
        alert('Your determination will overcome any obstacle.');
    } else if (rand == 14) {
        alert('Unexpected blessings will come your way.');
    } else if (rand == 15) {
        alert('Love is just around the corner; keep an open heart.');
    } else if (rand == 16) {
        alert('Your dreams are within reach; keep pursuing them.');
    } else if (rand == 17) {
        alert('A journey of a thousand miles begins with a single step.');
    } else if (rand == 18) {
        alert('Your resilience will guide you through tough times.');
    } else if (rand == 19) {
        alert('Stay patient; good things take time to unfold.');
    } else if (rand == 20) {
        alert('A new friendship will enrich your life.');
    } else if (rand == 21) {
        alert('Trust in the universe; it has a plan for you.');
    } else if (rand == 22) {
        alert('Your unique perspective will lead to success.');
    } else if (rand == 23) {
        alert('The key to happiness lies within you.');
    } else if (rand == 24) {
        alert('Your positive attitude will attract abundance.');
    } else if (rand == 25) {
        alert('Listen to your intuition; it holds the answers you seek.');
    } else if (rand == 26) {
        alert('Seize the opportunities that come your way.');
    } else if (rand == 27) {
        alert('Let go of worry; everything will work out in the end.');
    } else if (rand == 28) {
        alert('Your strength will inspire others to greatness.');
    } else if (rand == 29) {
        alert('Take time for self-care; its essential for your well-being.');
    } else if (rand == 30) {
        alert('Believe in yourself; you are capable of achieving anything.');
    }

    //fortuneVar.remove();
}

function randomInteger() {
    rand = Math.floor(Math.random() * 30);
    return rand;
}


// Image Gallery Code

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const switchButton = document.getElementById("image-switch");

let currentImage = 1;

function imageCycle() {
    switchButton.addEventListener("click", event => {
        console.log('button clicked');
        if (currentImage === 1) {
            img1.style.display = "none";
            img2.style.display = "block";
            currentImage = 2;
        } else if (currentImage === 2) {
            img2.style.display = "none";
            img3.style.display = "block";
            currentImage = 3;
        } else if (currentImage === 3) {
            img3.style.display = "none";
            img1.style.display = "block";
            currentImage = 1;
        }
    });
}
img1.style.display = "block";

imageCycle();