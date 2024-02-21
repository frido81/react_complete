import { log, $, $$ } from "/scripts/utils.js"

let text = $("#text");


function readableTime(totalseconds) {
    let milliseconds = totalseconds * 1000;
    let mydate = new Date(milliseconds);
    let hours = mydate.getUTCHours();
    if (hours < 10) {
        hours = '0' + hours;
    }

    let minutes = mydate.getUTCMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = mydate.getUTCSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
}

let lectures = []
fetch("lectures.json")
    .then((res) => res.json())
    .then((data) => {
        for (let result of data) {
            lectures.push(...result.results)


        }



        let totalTime = 0;
        for (let lecture of lectures) {
            if (lecture._class === "chapter") {
                if (totalTime) {
                    text.innerHTML += `Total time: ${readableTime(totalTime * 3)}\n`;
                }
                totalTime = 0;
                console.log(lecture["title"])
                text.innerHTML += `<h1>${lecture.title}</h1>`;


            } else {
                if ("asset" in lecture) {
                    // console.log("     ", lecture["title"], "#", readableTime(lecture.asset.time_estimation))
                    // text.innerHTML += `\t${lecture.title} ${readableTime(lecture.asset.time_estimation)}\n`;
                    text.innerHTML += `<li>${lecture.title}\n`;
                    totalTime += lecture.asset.time_estimation;

                } else {
                    // console.log("     ", lecture["title"], ">")
                }

            }
        }
        console.log(lectures)
    })

// console.log(apis)