const users = [
  {
    username: "Max Green",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description: "Enjoys creating sleek UI components using React and CSS-in-JS.",
    tags: ["JavaScript", "React", "UI/UX", "CSS", "Web Developer"]
  },
  {
    username: "Sam Jones",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "Graphic Designer",
    description: "Passionate about branding and digital illustration for startups.",
    tags: ["Illustration", "Branding", "Photoshop", "Creativity", "Figma"]
  },
  {
    username: "Ajay Singh",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    profession: "Data Scientist",
    description: "Loves uncovering insights from data and building predictive models.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "AI"]
  },
  {
    username: "Emma Lee",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "Product Manager",
    description: "Coordinates cross-functional teams and drives product strategy.",
    tags: ["Leadership", "Agile", "Planning", "Communication", "Strategy"]
  },
  {
    username: "Robert Ray",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    profession: "DevOps Engineer",
    description: "Automates deployment pipelines and ensures reliable infrastructure.",
    tags: ["DevOps", "Docker", "CI/CD", "Linux", "Cloud"]
    },

];

var sum = "";

users.forEach(function (user) {
    sum += `<div id="card1">
            <img src="${user.image}" alt="">
            <h2 id="name">${user.username}</h2>
            <h4 id="profession">${user.profession}</h4>
            <p id="description">${user.description}</p>
        </div>`
})



var main = document.querySelector("main");

main.innerHTML = sum;
