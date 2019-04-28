let countDownDate = new Date('May 26, 2019 20:30:00').getTime();

const x = setInterval(() => {
    const today = new Date().getTime();
    
    const howLong = countDownDate - today;

    let days = Math.floor(howLong / (1000 * 60 * 60 * 24));
    let hours = Math.floor((howLong % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((howLong % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((howLong % (1000 * 60)) / 1000);

    const daysShow = document.querySelector('.days');
    const hoursShow = document.querySelector('.hours');
    const minutesShow = document.querySelector('.minutes');
    const secondsShow = document.querySelector('.seconds');

    if (days < 10) {
        daysShow.innerHTML = `0${days}`;
    } else {
        daysShow.innerHTML = days;
    }
    if (hours < 10) {
        hoursShow.innerHTML = `0${hours}`;
    } else {
        hoursShow.innerHTML = hours;
    }
    if (minutes < 10) {
        minutesShow.innerHTML = `0${minutes}`;
    } else {
        minutesShow.innerHTML = minutes;
    }
    if (seconds < 10) {
        secondsShow.innerHTML = `0${seconds}`;
    } else {
        secondsShow.innerHTML = seconds;
    }

    if (howLong < 0) {
        clearInterval(this);
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000)

const sent = [
    {
        id: 0,
        sentence: `Can you feel the love tonight?...`,
        author: 'Elton John'
    },
    {
        id: 1,
        sentence: `I have died every day waiting for you.`,
        author: 'Christina Perri'
    },
    {
        id: 2,
        sentence: `I'm in love with the shape of you.`,
        author: 'Ed Sheeran'
    },
    {
        id: 3,
        sentence: 'I can be your hero baby, I can kiss away the pain…',
        author: 'Enrique Iglesias'
    },
    {
        id: 4,
        sentence: 'How long will I love you, As long as stars are above you',
        author: 'Ellie Goulding'
    },
    {
        id: 5,
        sentence: 'All you need is love.',
        author: 'Beatles'
    },
    {
        id: 6,
        sentence: `I never knew you were the someone waiting for me.`,
        author: 'Ed Sheeran'
    },
    {
        id: 7,
        sentence: `Baby it's you. You're the one I love, You're the one I need,  You're the only one I see.`,
        author: 'Beyonce'
    },
    {
        id: 8,
        sentence: `If you're not the one then why does my hand fit yours this way?.`,
        author: 'Daniel Bedingfield'
    },
    {
        id: 9,
        sentence: 'Lights will guide you home. And ignite your bones. And I will try to fix you.',
        author: 'Coldplay'
    },
    {
        id: 10,
        sentence: `Your one in a million, Your once in a lifetime.`,
        author: 'Bosson'
    },
    {
        id: 11,
        sentence: `I could stay lost in this moment forever, Every moment spent with you is a moment I treasure.`,
        author: 'Aerosmith'
    },
    {
        id: 12,
        sentence: `I can't fall in love without you.`,
        author: ' Zara Larsson'
    },
    {
        id: 13,
        sentence: `Some just want everything. But everything means nothing. If I ain't got you, yeah.`,
        author: 'Alicia Keys'
    },
    {
        id: 14,
        sentence: `And I will take you in my arms and hold you right where you belong.`,
        author: 'NSYNC'
    },
    {
        id: 15,
        sentence: `You're the fear, I don't care, cause I've never been so high.`,
        author: 'Ellie Goulding'
    },
    {
        id: 16,
        sentence: `I never knew I had a dream, until that dream was you.`,
        author: 'Bon Jovi'
    },
    {
        id: 17,
        sentence: `No matter where you go you know you're not alone.`,
        author: 'Charlie Puth'
    },
    {
        id: 18,
        sentence: `I'll be your dream, I'll be your wish, I'll be your fantasy.`,
        author: 'Savage Garden'
    },
    {
        id: 19,
        sentence: `When the rain is pouring down and my heart is hurting, You will always be around his I know for certain.`,
        author: 'Alicia Keys'
    },
    {
        id: 20,
        sentence: `And when you smile. The whole world stops and stares for a while. 'Cause girl you're amazing. Just the way you are.`,
        author: 'Bruno Mars'
    },
    {
        id: 21,
        sentence: `Because maybe, you're gonna be the one that saves me, and after all, you're my wonderwall.`,
        author: 'Oasis'
    },
    {
        id: 22,
        sentence: `And if our love was a story book, we would meet on the very first page.`,
        author: 'Shayne Ward'
    },
    {
        id: 23,
        sentence: `Cause all of me loves all of you. Love your curves and all your edges, all your perfect imperfections.`,
        author: 'John Legend'
    },
    {
        id: 24,
        sentence: `Take me into your loving arms, kiss me under the light of a thousand stars.`,
        author: 'Ed Sheeran'
    },
    {
        id: 25,
        sentence: `I pray in my heart that this dream never ends.`,
        author: 'Leona Lewis'
    },
    {
        id: 26,
        sentence: `Well I found a woman, stronger than anyone I know. She shares my dreams, I hope that someday I'll share her home.`,
        author: 'Ed Sheeran'
    },
    {
        id: 27,
        sentence: `You put your arms around me and I'm home.`,
        author: 'Christina Perri'
    },
    {
        id: 28,
        sentence: `I'm so glad we made it, look how far we've come my baby`,
        author: 'Shania Twain'
    },
    {
        id: 29,
        sentence: `I was blessed because I was loved by you.`,
        author: 'Celine Dion'
    }
]

// Add songs to each day + change pictures
// Make the website responsive
// Make the player better looking

const myAudio = document.querySelector('#myAudio');
const volume = document.querySelector('.volume');
const durationSlider = document.querySelector('.durationSlider');
const currentTime = document.querySelector('.currentTime');
const length = document.querySelector('.length');
const play = document.querySelector('.play');
const playBtn = document.querySelector('#playBtn');

volume.addEventListener('change', changeVolume);
// durationSlider.addEventListener('change', changeLength);
// myAudio.addEventListener('timeupdate', timeUpdate);

myAudio.addEventListener('play', updateButton);
myAudio.addEventListener('pause', updateButton);

function playPause(btn) {
    if(myAudio.paused) {
        myAudio.play();
        playBtn.src = `imgs/_ionicons_svg_md-pause.svg`;
    } else {
        myAudio.pause();
        playBtn.src = `imgs/_ionicons_svg_md-play.svg`;
    }
}

function updateButton() {
    const icon = this.paused ? 'imgs/play.svg' : 'imgs/pause.svg';
    playBtn.src = icon;
}

function changeVolume(e) {
    myAudio.volume = e.target.value;
}

function changeLength() {
    const duration = myAudio.duration * (durationSlider.value / 100);
    myAudio.currentTime = duration;
}

// function timeUpdate() {
//     const newTime = myAudio.currentTime * (100 / myAudio.duration);
//     durationSlider.value = newTime;
//     console.log();

//     let currentMins = Math.floor(myAudio.currentTime /60);
//     let currentSecs = Math.floor(myAudio.currentTime -currentMins * 60);
//     let durationMins = Math.floor(myAudio.duration / 60);
//     let durationSecs = Math.round(myAudio.duration - durationMins * 60);
//     if (currentSecs < 10) {
//         currentSecs = "0"+currentSecs;
//     }
//     if (durationSecs < 10) {
//         durationSecs = "0"+durationSecs;
//     }

//     currentTime.innerHTML = `${currentMins}:${currentSecs}`;
//     length.innerHTML = `${durationMins}:${durationSecs}`;
// }

function updateDaily() {
    const today = new Date().getTime();
    const howLong = countDownDate - today;
    let days = Math.floor(howLong / (1000 * 60 * 60 * 24));

    const songLine = document.querySelector('#songLine');
    const author = document.querySelector('#author');
    const cover = document.querySelector('#cover');

    for(i=0;i<sent.length;i++) {
        if(sent[i].id === days) {
            cover.style.background = `url(imgs/${days}.jpg)`;
            cover.style.backgroundPositionX = 'center';
            cover.style.backgroundSize = 'cover';
            cover.style.backgroundColor = 'rgba(129, 59, 59, 0.5)';
            cover.style.backgroundBlendMode = 'overlay';

            if(days === 0) {
                cover.style.backgroundPositionY = '70%';
            }
            if(days === 1 || days === 3 || days === 11 || days === 13 || days === 20 || days === 21 || days === 22) {
                cover.style.backgroundPositionY = '30%';
            }
            if(days === 6 || days === 28) {
                cover.style.backgroundPositionY = '50%';
            }
            if(days === 7 || days === 14) {
                cover.style.backgroundPositionY = '60%';
            }
            if(days === 8 || days === 10 || days === 17 || days === 25 || days === 26) {
                cover.style.backgroundPositionY = '40%';
            }
            if(days === 16 || days === 23) {
                cover.style.backgroundPositionY = '20%';
            }
            if(days === 19 || days === 27) {
                cover.style.backgroundPositionY = '10%';
            }
            

            songLine.innerHTML = sent[i].sentence;
            author.innerHTML = sent[i].author;
            myAudio.src = `audio/${days}.mp3`;
        }
    }
}

updateDaily();
