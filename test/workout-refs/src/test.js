const SECONDS = "180000"


console.log(new Date(SECONDS * 1000).toISOString().slice(11, 19))