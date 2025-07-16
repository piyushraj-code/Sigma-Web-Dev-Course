function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views >= 1000000) {
    viewStr = Math.floor(views / 1000000) + "M";
  } else {
    viewStr = Math.floor(views / 1000) + "K";
  }
  let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration} </div>
            </div>
            <div class="text">
                <h1>
                    ${title}
                </h1>
                <p>
                    ${cName} . ${viewStr} views . ${monthsOld} months ago
                </p>
            </div>
        </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
createCard(
  "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
  "CodeWithHarry",
  128069,
  10,
  "24:12",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA"
);
