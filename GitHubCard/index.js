import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios
// .get('https://api.github.com/users/jryan3328')
// .then( (res) => {
  
// })

// .catch((err) => {
  
//   console.log(err)
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
let cards = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/jryan3328")
  .then((res) => {
    console.log(res.data);
    let user = res.data;
    cards.appendChild(gitCardMaker(user));
  })
  .catch((err) => {
    console.log(err);
  })
  .then();




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

  const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell",
];

  followersArray.forEach((e) => {
    axios
      .get(`https://api.github.com/users/${e}`)
      .then((res) => {
        console.log(res.data);
        let user = res.data;
        cards.appendChild(gitCardMaker(user));
    })
      .catch((err) => {
      console.log(err);
    })
      .then();
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardMaker(data) {
  
  
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')


  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

    card.appendChild(image)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(username)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    profile.appendChild(link)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)

    image.setAttribute('src', data['avatar_url'])
    name.textContent = data.name
    username.textContent = data.login
    location.textContent = `Location: ${data.location}`
    followers.textContent = `Followers: ${data.followers}`
    following.textContent = `Following: ${data.following}`
    bio.textContent = `Bio: ${data.bio}`


    return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
