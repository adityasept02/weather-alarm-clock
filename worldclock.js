const update = () => {
    let x = new Date();
    usa.innerHTML = x.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(", ")[1];
    let y = new Date();
    usa1.innerHTML = y.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(", ")[0];
    let a = new Date();
    europe.innerHTML = a.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
    }).split(", ")[1];
    let b = new Date();
    europe1.innerHTML = b.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
    }).split(", ")[0];
    let e = new Date();
    india.innerHTML = e.toLocaleString('de-DE', {
        timeZone: 'Asia/Kolkata',
    }).split(", ")[1];
    let f = new Date();
    india1.innerHTML = f.toLocaleString('de-DE', {
        timeZone: 'Asia/Kolkata',
    }).split(", ")[0];
}
setInterval(update, 1000);