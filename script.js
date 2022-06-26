const tweetForm = document.querySelector('form');
const tweetBtn = document.querySelector('button');
const tweetContainer = document.querySelector('.tweet-container');

tweetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const usernameINP = document.querySelector('#username-input');
  const tweetINP = document.querySelector('#tweet-input');
  
  if (usernameINP.value != "" && tweetINP.value != "") {

    tweetContainer.style.display = "block";
    document.querySelector('.username').textContent = usernameINP.value;
    document.querySelector('.tweet-text').textContent = tweetINP.value;

    const profile = document.querySelector('.profile');
    profile.textContent = usernameINP.value[0];

    usernameINP.value = "";
    tweetINP.value = "";

    // Date Generation
    const date = new Date();
    const time = new Date();

    const formattedTime = time.toLocaleString("en-IN", {
      hour: "numeric",
      minute: "numeric",
    });

    const formattedDate = date.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    document.querySelector('.date').textContent = `${formattedTime} · ${formattedDate}`;
  }
})