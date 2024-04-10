
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');

const myBatteryImage = document.createElement('img');
myBatteryImage.setAttribute('id', 'image');
document.body.appendChild(myBatteryImage);

function updateBatteryStatus(battery) {
    console.log(battery);
    if (battery.charging === true) {
        chargeStatus.textContent = "Charging...";
    } else {
        chargeStatus.textContent = "Discharging...";
    }
    chargeLevel.textContent = (battery.level * 100) + "%";
    chargeMeter.value = (battery.level * 100);

    const percentage =(battery.level * 100);
    const imgUrl = `https://robohash.org/${percentage}.png`;
    myBatteryImage.setAttribute("src", imgUrl);
    myBatteryImage.setAttribute("alt", "Image");

}


navigator.getBattery().then(battery => {
    console.log(battery);
    updateBatteryStatus(battery);
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    })
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    })
})








