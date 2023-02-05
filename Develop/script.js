const currentDate = new Date();
const dateElement = document.getElementById("currentDate");
const timeElement = document.getElementById("currentTime");
dateElement.innerHTML = currentDate.toDateString();
timeElement.innerHTML = currentDate.toLocaleTimeString();

const timeBlockContainer = document.getElementById("timeblockcontainer");
for (let hour = 9; hour <= 17; hour++) {
  const time = hour < 10 ? "0" + hour + "00" : hour + "00";
  const timeBlock = document.createElement("div");
  timeBlock.classList.add("time-block");

  if (currentDate.getHours() > hour) {
    timeBlock.style.backgroundColor = "#d3d3d3";
  } 
  
  else if (currentDate.getHours() === hour) {
    timeBlock.id = "currentDay";
    timeBlock.style.backgroundColor = "#FFFFFF";
  }

  timeBlock.innerHTML = `<p>${time.slice(0, 2)}:${time.slice(2)}</p>`;

  const eventText = document.createElement("textarea");
  eventText.style.width = "80%";
  eventText.style.margin = "0 auto";

  const storedEvent = localStorage.getItem(time);
  if (storedEvent) {
    eventText.value = storedEvent;
  }

  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.addEventListener("click", function() {
    localStorage.setItem(time, eventText.value);
  });

  timeBlock.appendChild(eventText);
  timeBlock.appendChild(saveButton);
  timeBlockContainer.appendChild(timeBlock);
}