const events = [
  {
    month: "JAN",
    monthIndex: 0,
    day: 12,
    time: "6:00 PM - 8:00 PM",
    title: "Winter Family Game Night",
    tag: "Family",
    calendar: "Family",
    description: "Bring the whole family for board games, hot cocoa, and friendly competitions at the community center.",
    highlight: false
  },
  {
    month: "FEB",
    monthIndex: 1,
    day: 8,
    time: "10:00 AM - 1:00 PM",
    title: "Neighborhood Makers Market",
    tag: "Market",
    calendar: "Market",
    description: "Browse handmade crafts, candles, baked goods, and gifts from local makers and vendors.",
    highlight: false
  },
  {
    month: "MAR",
    monthIndex: 2,
    day: 19,
    time: "7:00 PM",
    title: "Community Town Hall Night",
    tag: "Community",
    calendar: "Community",
    description: "Residents are invited to hear updates, share ideas, and discuss upcoming neighborhood projects.",
    highlight: false
  },
  {
    month: "APR",
    monthIndex: 3,
    day: 6,
    time: "4:00 PM - 7:00 PM",
    title: "Spring Street Food Festival",
    tag: "Food",
    calendar: "Food",
    description: "Enjoy local food trucks, dessert stands, and live entertainment in the center of town.",
    highlight: false
  },
  {
    month: "APR",
    monthIndex: 3,
    day: 18,
    time: "11:00 AM - 2:00 PM",
    title: "Saturday Community Market",
    tag: "Market",
    calendar: "Market",
    description: "Shop produce, flowers, fresh bread, and specialty items from local vendors across the county.",
    highlight: false
  },
  {
    month: "MAY",
    monthIndex: 4,
    day: 10,
    time: "6:30 PM",
    title: "Live Music on Main Street",
    tag: "Music",
    calendar: "Music",
    description: "Enjoy a free evening concert featuring local bands and student performers downtown.",
    highlight: false
  },
  {
    month: "MAY",
    monthIndex: 4,
    day: 24,
    time: "5:30 PM",
    title: "Movie Night in the Park",
    tag: "Family",
    calendar: "Family",
    description: "Bring lawn chairs and blankets for a family-friendly outdoor movie and snack stand.",
    highlight: false
  },
  {
    month: "JUN",
    monthIndex: 5,
    day: 14,
    time: "9:00 AM - 12:00 PM",
    title: "Community Garden Volunteer Day",
    tag: "Community",
    calendar: "Community",
    description: "Help plant flowers and vegetables while meeting neighbors and supporting the shared garden.",
    highlight: false
  },
  {
    month: "JUL",
    monthIndex: 6,
    day: 4,
    time: "3:00 PM - 9:00 PM",
    title: "Summer Celebration & Fireworks",
    tag: "Community",
    calendar: "Community",
    description: "A full afternoon of family activities, food vendors, music, and fireworks to end the night.",
    highlight: false
  },
  {
    month: "JUL",
    monthIndex: 6,
    day: 20,
    time: "8:00 AM - 1:00 PM",
    title: "Riverfront Farmers Market",
    tag: "Market",
    calendar: "Market",
    description: "Fresh fruits, vegetables, honey, jams, and handmade goods along the riverfront pavilion.",
    highlight: false
  },
  {
    month: "AUG",
    monthIndex: 7,
    day: 9,
    time: "6:00 PM",
    title: "Sunset Jazz in the Square",
    tag: "Music",
    calendar: "Music",
    description: "Relax in the square with live jazz, picnic seating, and local dessert vendors.",
    highlight: false
  },
  {
    month: "SEP",
    monthIndex: 8,
    day: 13,
    time: "1:00 PM - 4:00 PM",
    title: "Fall Family Fun Day",
    tag: "Family",
    calendar: "Family",
    description: "An afternoon filled with games, inflatables, crafts, and activities for kids and parents.",
    highlight: false
  },
  {
    month: "SEP",
    monthIndex: 8,
    day: 27,
    time: "10:00 AM - 3:00 PM",
    title: "Autumn Harvest Market",
    tag: "Market",
    calendar: "Market",
    description: "Celebrate the season with pumpkins, baked goods, flowers, and handmade decor from local sellers.",
    highlight: false
  },
  {
    month: "OCT",
    monthIndex: 9,
    day: 11,
    time: "5:00 PM - 8:00 PM",
    title: "Community Chili Cook-Off",
    tag: "Food",
    calendar: "Food",
    description: "Taste chili recipes from local cooks, vote for your favorite, and enjoy live music and games.",
    highlight: false
  },
  {
    month: "OCT",
    monthIndex: 9,
    day: 25,
    time: "2:00 PM - 6:00 PM",
    title: "Fall Festival in the Commons",
    tag: "Outdoors",
    calendar: "Outdoors",
    description: "Pumpkin decorating, hayrides, food stands, and seasonal activities for all ages.",
    highlight: false
  },
  {
    month: "NOV",
    monthIndex: 10,
    day: 8,
    time: "6:30 PM",
    title: "Neighborhood Appreciation Night",
    tag: "Community",
    calendar: "Community",
    description: "Celebrate local volunteers, community leaders, and neighbors making a difference.",
    highlight: false
  },
  {
    month: "DEC",
    monthIndex: 11,
    day: 6,
    time: "4:00 PM - 8:00 PM",
    title: "Holiday Lights Market",
    tag: "Market",
    calendar: "Market",
    description: "Shop festive crafts, warm drinks, gifts, and seasonal treats under twinkling lights.",
    highlight: false
  },
  {
    month: "DEC",
    monthIndex: 11,
    day: 19,
    time: "6:00 PM",
    title: "Winter Music Night",
    tag: "Music",
    calendar: "Music",
    description: "Enjoy holiday songs and live performances from local musicians in the town hall plaza.",
    highlight: false
  }
];

const fullMonthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const eventsList = document.getElementById("eventsList");
const searchInput = document.getElementById("searchInput");
const miniCalendarDays = document.getElementById("miniCalendarDays");
const monthButtons = document.querySelectorAll(".month-btn");
const miniHeaderTitle = document.querySelector(".mini-header strong");
const miniHeaderArrows = document.querySelectorAll(".mini-header span");

/*
  These checkboxes now act like category filters.
  Make sure the label text in your HTML sidebar matches:
  Family, Community, Market, Music, Food, Outdoors
*/
const checkboxes = document.querySelectorAll(".check-row input");

let selectedMonth = 0; // start on January
let selectedDay = null;
let searchTerm = "";

function getEnabledCategories() {
  const categories = [];
  checkboxes.forEach(box => {
    if (box.checked) {
      categories.push(box.parentElement.textContent.trim());
    }
  });
  return categories;
}

function getFilteredEvents() {
  const enabledCategories = getEnabledCategories();

  return events.filter(event => {
    const matchesMonth = event.monthIndex === selectedMonth;
    const matchesDay = selectedDay === null || event.day === selectedDay;
    const matchesCategory =
      enabledCategories.length === 0 || enabledCategories.includes(event.calendar);

    const searchableText = `
      ${event.title}
      ${event.tag}
      ${event.calendar}
      ${event.description}
      ${event.time}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm.toLowerCase());

    return matchesMonth && matchesDay && matchesCategory && matchesSearch;
  });
}

function renderEvents() {
  const filtered = getFilteredEvents();
  eventsList.innerHTML = "";

  if (filtered.length === 0) {
    eventsList.innerHTML = `
      <div style="padding: 40px 0; color: #555; font-size: 16px;">
        No events found for this month and filter selection.
      </div>
    `;
    return;
  }

  filtered.forEach(event => {
    const row = document.createElement("div");
    row.className = "event-row";

    row.innerHTML = `
      <div class="event-date">
        <div class="month">${event.month}</div>
        <div class="day">${event.day}</div>
        <div class="time">${event.time}</div>
      </div>

      <div class="event-main" ${event.highlight ? 'style="background:#dfe5ed; padding:20px; border-radius:2px;"' : ""}>
        <div class="event-title">${event.title}</div>
        <div class="event-tag">${event.calendar}</div>
        <div class="event-description">${event.description}</div>
      </div>

      
    `;

    eventsList.appendChild(row);
  });

  
}

function renderMiniCalendar() {
  miniHeaderTitle.textContent = `${fullMonthNames[selectedMonth]} 2026`;

  const firstDay = new Date(2026, selectedMonth, 1).getDay();
  const daysInMonth = new Date(2026, selectedMonth + 1, 0).getDate();

  const visibleEvents = events.filter(event => event.monthIndex === selectedMonth);
  const eventDays = new Set(visibleEvents.map(event => event.day));

  let html = "";

  for (let i = 0; i < firstDay; i++) {
    html += `<span></span>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const hasEvent = eventDays.has(day);
    const isActive = selectedDay === day;

    html += `
      <span class="day-cell ${hasEvent ? "day-dot" : ""} ${isActive ? "active" : ""}" data-day="${day}">
        ${day}
      </span>
    `;
  }

  miniCalendarDays.innerHTML = html;

  document.querySelectorAll(".day-cell[data-day]").forEach(cell => {
    cell.addEventListener("click", () => {
      const clickedDay = Number(cell.dataset.day);
      selectedDay = selectedDay === clickedDay ? null : clickedDay;
      renderMiniCalendar();
      renderEvents();
    });
  });
}

function updateMonthButtons() {
  monthButtons.forEach((button, index) => {
    button.classList.toggle("active", index === selectedMonth);
  });
}

monthButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectedMonth = index;
    selectedDay = null;
    updateMonthButtons();
    renderMiniCalendar();
    renderEvents();
  });
});

searchInput.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderEvents();
});

checkboxes.forEach(box => {
  box.addEventListener("change", () => {
    renderEvents();
  });
});

if (miniHeaderArrows.length >= 2) {
  miniHeaderArrows[0].addEventListener("click", () => {
    selectedMonth = (selectedMonth - 1 + 12) % 12;
    selectedDay = null;
    updateMonthButtons();
    renderMiniCalendar();
    renderEvents();
  });

  miniHeaderArrows[1].addEventListener("click", () => {
    selectedMonth = (selectedMonth + 1) % 12;
    selectedDay = null;
    updateMonthButtons();
    renderMiniCalendar();
    renderEvents();
  });
}

updateMonthButtons();
renderMiniCalendar();
renderEvents();