let user = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

// Stories Function
let stories = document.querySelector(".stories");
function storyFun() {
  let str = "";
  user.forEach((user, index) => {
    str += `<div class="story">
            <img id=${index} src=${user.userprofile} alt=""/>
            <div class="name" >${user.username}</div>
          </div>`;
    stories.innerHTML = str;
  });
}
storyFun();

// Posts Function
let posts = document.querySelector(".posts");
function postFun() {
  let str = "";
  user.forEach((user, index) => {
    str += `<div class="post">
          <div class="user-info">
            <div class="first">
              <div class="profile">
                <img
                  src=${user.userprofile}
                  alt="User Profile"
                />
              </div>
              <div class="user">
                <div class="username">${user.username}</div>
                <div class="location">${user.userlocation}</div>
              </div>
            </div>

            <i class="ri-more-2-fill"></i>
          </div>
          <div class="main">
            <img
              src=${user.userPost}
              alt="Post Image"
            />
          </div>
          <div class="bottom">
            <div class="counter">
              <div class="like" id=${index}>
              ${
                user.like
                  ? ' <i class="ri-heart-fill"></i>'
                  : '<i class="ri-heart-line"></i>'
              }
                <div class="like-count" >${user.likeCount}</div>
              </div>
              <div class="comment">
                <i class="ri-chat-1-line"></i>
                <div class="comment-count">${user.commentCount}</div>
              </div>
              <div class="share">
                <i class="ri-share-forward-line"></i>
                <div class="share-count">${user.shareCount}</div>
              </div>
            </div>
            <div class="caption">
              ${user.caption}
            </div>
            <div class="time-ago">${user.timeAgoUploaded} hour ago</div>
          </div>
        </div>`;
    posts.innerHTML = str;
  });
}
postFun();

// Story Status
let popup = document.querySelector(".popup");
let close = document.querySelector(".close-popup");
let popupImg = document.querySelector(".popup img");

stories.addEventListener("click", (event) => {
  popupImg.setAttribute("src", event.target.src);
  // popupImg.setAttribute("src", user[event.target.id].userPost);
  popup.style.display = "flex";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});

// Like Function
posts.addEventListener("click", (event) => {
  if (!user[event.target.id].like) {
    user[event.target.id].like = true;
    user[event.target.id].likeCount++;
  } else {
    user[event.target.id].like = false;
    user[event.target.id].likeCount--;
  }
  postFun();
});

// // Message Functions
let Message = document.querySelector(".Message");
let msg = document.querySelector(".message");
let back = document.querySelector(".message-header");

Message.addEventListener("click", () => {
  msg.style.right = `${0}%`;
  msg.style.transition = "1s all ease-in";
});

back.addEventListener("click", () => {
  msg.style.right = `${-100}%`;
  msg.style.transition = "1s all ease-in";
});
