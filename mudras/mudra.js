var mudras = [
    {
        title: "Gyan Mudra",
        description: "This is a powerful mudra practiced and used in the practice of yoga. Touch the tip of the thumb and the tip of the index finger together, forming a circle. The other three fingers are stretched out.",
        img: "Gyan-Mudra.jpg"
    },
    {
        title: "Prana Mudra",
        description: "This mudra is said to be one of the most important mudras due to its ability to activate dormant energy in your body. Prana Mudra can be performed in both a sitting and standing position.",
        img: "Prana-Mudra.jpg"
    },
    {
        title: "Anjali Mudra",
        description: "Also known as the 'salutation seal', this mudra is done by pressing the palms together. The fingers are together with fingertips pointing up. The hands are pressed together firmly and evenly.",
        img: "Anjali-Mudra.png"
    },
    {
        title: "Shunya Mudra",
        description: "This mudra helps to relieve an earache within 4 or 5 minutes. It is a gesture of emptiness or heaven, which reduces the space element in the body.",
        img: "Shunya-Mudra.jpg"
    },
    {
        title: "Surya Mudra",
        description: "This mudra helps to control weight and obesity. It also helps to resolve digestive issues and boosts metabolism.",
        img: "Surya-Mudra.jpg"
    },
    {
        title: "Prithvi Mudra",
        description: "This mudra is used for increasing the earth element and decreasing the fire element within the body. It helps to increase weight and improve the complexion of skin.",
        img: "Prithvi-Mudra.jpg"
    },
    {
        title: "Apan Mudra",
        description: "This mudra helps in the purification of the body, urinary problems and easing labor pains.",
        img: "Apan-Mudra.jpg"
    },
    {
        title: "Apan Vayu Mudra",
        description: "This mudra is also known as the 'Mritsanjeevani mudra'. It can help in reducing chest pain and improves heart health.",
        img: "Apan Vayu Mudra.png"
    },
    {
        title: "Linga Mudra",
        description: "This mudra is used for increasing body heat as it strengthens the fire element within the body. It helps in relieving congestion and cold.",
        img: "Linga-Mudra.png"
    },
    {
        title: "Ganesha Mudra",
        description: "This mudra is beneficial for opening up the heart chakra and releasing any trapped tension there.",
        img: "Ganesha Mudra.jpg"
    },
    {
        title: "Makara Mudra",
        description: "This mudra is useful in treating asthma, balancing the air element, and rejuvenating the body cells.",
        img: "Makara Mudra.png"
    },
    {
        title: "Rudra Mudra",
        description: "This mudra is used for balancing the solar plexus chakra and improving concentration and memory.",
        img: "Rudra Mudra.png"
    },
    {
        title: "Shankh Mudra",
        description: "This mudra benefits the throat chakra, improving communication and speech. It's also used in practices to aid in thyroid health.",
        img: "Shankh Mudra.png"
    }
];


var timer;
var duration;
var currentIndex = 0;
var totalTime = 0;

window.addEventListener('load', function () {
    currentIndex = Math.floor(Math.random() * mudras.length);
    showMudra(mudras[currentIndex], false);
});

document.getElementById('start').addEventListener('click', function() {
    duration = document.getElementById('duration').value * 60; // convert to seconds
    if (duration <= 0) {
        alert("Please enter a duration greater than 0.");
        return;
    }
    mudras = shuffle(mudras); // shuffle the array
    showMudra(mudras[currentIndex], true);
    timer = setInterval(countdown, 1000); // set the countdown
    document.getElementById('duration').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timer); // stop the timer
    document.getElementById('duration').style.display = 'block';
    document.getElementById('start').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
});

function showMudra(mudra) {
    document.getElementById('title').textContent = mudra.title;
    document.getElementById('description').textContent = mudra.description;
    document.getElementById('image').src = 'mudras/' + mudra.img;
}

function countdown() {
    if (duration === 0) {
        currentIndex++;
        if (currentIndex >= mudras.length) { // if end is reached, return to the first mudra
            currentIndex = 0;
        }
        showMudra(mudras[currentIndex]);
        duration = document.getElementById('duration').value * 60; // reset the duration
    }
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    duration--;
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}