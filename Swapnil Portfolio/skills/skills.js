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
    icon_url: "data:image/png;base64,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",
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
