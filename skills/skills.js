const skills = [
  {
    name: "HTML",
    icon_url: "https://img.icons8.com/color/50/000000/html-5--v1.png",
    category: ["all", "frontend"],
  },
  {
    name: "CSS",
    icon_url: "https://img.icons8.com/color/50/000000/css3.png",
    category: ["all", "frontend"],
  },
  {
    name: "JavaScript",
    icon_url: "https://img.icons8.com/color/50/000000/javascript--v2.png",
    category: ["all", "frontend"],
  },
  {
    name: "React",
    icon_url: "../images/React_icon.png",
    category: ["all", "frontend"],
  },

  {
    name: "Redux",
    icon_url: "../images/Redux_img.png",
    category: ["all", "frontend"],
  },

  {
    name: "Chakra UI",
    icon_url: "../images/Chakra_UI.png",
    category: ["all", "frontend"],
  },
  {
    name: "Material UI",
    icon_url: "../images/Material-UI.png",
    category: ["all", "frontend"],
  },

  {
    name: "Tailwind",
    icon_url: "../images/Tailwind_CSS.png",
    category: ["all", "frontend"],
  },

  {
    name: "BootStrap",
    icon_url: "../images/Bootstrap.png",
    category: ["all", "frontend"],
  },
  {
    name: "Webflow",
    icon_url: "../images/Webflow.png",
    category: ["all", "frontend"],
  },
  {
    name: "Figma",
    icon_url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABYUlEQVR4AcxURVZDQRCcHXIBHK4y+8gWWU24ALaP3gM9BTp79Cj9yBJrfuE0MpZkUu9V5FtVS3019KDyrO5W5my3Ok8FWZI3V3/nVs3yujFJ4rfl2YYUdBqQXDfNuMorcwYCkQakCa1Cgbb3zMBGzapQSKFEAxQ+f7F0KQbArCNAIuLi17slNJExnM8VQxHHyoINNEBoO28hfok4WGJd0O6tMO0vM0uqN0we3+upkyc7ffJEBRm/J48eTJL43hI3pKCkgvjpYwOiv/L4Pm4EO0tsXOIgqpSikpPHrGNab30MoNUuA7hGhcJHHISAB0mFAkvnaYB8TIQbyDwCLKH2MYD4uQxEx/EgWwxFHOU4pAEAVX4ZB+E3uqNSMXrT0WM3HTt+06GCLKn6B4i3G1JQsp/iBgLZDKDtWQ0IoSwGaOhHgGv6t4QXTe0ygEXNFEOIt5pqEECVX8ZB+I2Xk3recAEAhH+thVgdXSQAAAAASUVORK5CYII=",
    category: ["all", "frontend"],
  },

  {
    name: "Vercel",
    icon_url: "../images/vercel.png",
    category: ["all"],
  },
];

let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn");
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills");
all_filter_btn.addEventListener("click", () => {
  filterSkills("all");
  all_filter_btn.classList.add("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});

frontend_filter_btn.addEventListener("click", () => {
  filterSkills("frontend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.add("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});
backend_filter_btn.addEventListener("click", () => {
  filterSkills("backend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.add("active_tech_skills");
});

function displaySkills(skills) {
  myTechnicalSkills.innerHTML = null;
  skills.forEach((skill) => {
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "service-item padd-15");
    itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="50px" height="50px" marginBottom="100px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`;

    myTechnicalSkills.append(itemContainer);
  });
}

function filterSkills(basis) {
  let filtered = skills.filter((el) => {
    return el.category.includes(basis);
  });
  displaySkills(filtered);
}

displaySkills(skills);
