"use strict";

const base_rect = document.getElementById("base_rect");
const rect = document.getElementById("rect");

const bar = 35;
const date = new Date();

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const currentMonth = date.getMonth() + 1;
const numberOfDays = getDays(date.getFullYear(), currentMonth);
let day = date.getDate();

base_rect.style.width = `${bar * numberOfDays}px`;
rect.style.width = `${bar * (numberOfDays - day + 1)}px`;

if (day !== 1) {
  rect.style.borderTopLeftRadius = 0;
  rect.style.borderBottomLeftRadius = 0;
}

// Appending day numbers

for (let i = 1; i <= numberOfDays; i++) {
  const span = document.createElement("span");
  span.innerHTML = i;
  span.classList.add("day_number");
  base_rect.appendChild(span);
}

const day_numbers = document.querySelectorAll(".day_number");

day_numbers.forEach((day_number, index) => {
  console.log(day_number);
  day_number.style.left = `${bar * index}px`;
});
