var events = [
  {
    description: "Potluck after club rush",
    date: ""
  },
  {
    description: "Soldering workshop",
    date: ""
  },
  {
    description: "Guest speaker (Space X)",
    date: ""
  },
  {
    description: "Space X tour (bridge building workshop)",
    date: ""
  },
  {
    description: "Raspberry Pi workshop",
    date: ""
  },
  {
    description: "Transfer workshop",
    date: ""
  },
  {
    description: "Volunteering (Mission Trails)",
    date: ""
  },
  {
    description: "Hackathon",
    date: ""
  },
  {
    description: "Bonfire (unofficial)",
    date: ""
  },
  {
    description: "CAD workshop",
    date: ""
  },
  {
    description: "Logo design workshop/contest",
    date: ""
  },
  {
    description: "Resume workshop",
    date: ""
  },
  {
    description: "MatLab workshop",
    date: ""
  },
  {
    description: "Walk on water project",
    date: ""
  },
  {
    description: "Fundraiser",
    date: ""
  },
  {
    description: "Fundraiser",
    date: ""
  }
]

var content = ""

for (event of events) {
  content += "  <li>"+event.description+"</li>";
}
content = "<ol>"+content+"</ol>";

document.getElementById("calendar").innerHTML = content;

