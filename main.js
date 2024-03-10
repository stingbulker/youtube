window.addEventListener("load", () => {
  const topics = document.getElementById("topics");
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit Odio obcaecati at dicta quos modi Laboriosam animi impedit iure eaque tempore soluta vero"
  const loremArray = lorem.split(" ")
  loremArray.forEach((loremWord)=>{
    const topicButton = document.createElement("button")
    topicButton.innerText = loremWord
    topicButton.classList.add("topicBtn")
    topics.appendChild(topicButton)
  })
});