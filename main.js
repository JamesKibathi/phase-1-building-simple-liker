// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcons={
  '♡':'♥',
  '♥': '♡'

};

const colorChange={
  "red":"",
  "":"red"
};

const likeHeart=document.querySelectorAll(".like-glyph");

function handleLike(e){

  const likeIcon=e.target;

  mimicServerCall("url")

  .then(()=>{
    likeIcon.innerText=heartIcons[likeIcon.innerText];
    likeIcon.style.color=colorChange[likeIcon.style.color];

  })
  .catch((error)=>{
    const modalElement=document.getElementById("modal");
    modalElement.className="",
    modalElement.innerText=error;
    setTimeout(()=>modalElement.className="hidden",300);
  });
}
for (const icon of likeHeart){
  icon.addEventListener("click",handleLike);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
