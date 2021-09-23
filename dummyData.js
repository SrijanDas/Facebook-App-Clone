export const posts = [
  {
    id: 1,
    user: "Linus",
    profilePic: require("./assets/linus.jpg"),
    text: "loving life ❤❤❤",
    image: require("./assets/post.jpg"),
    time: "2h ago",
  },
  {
    id: 2,
    user: "John",
    profilePic: require("./assets/john.jpg"),
    text: "Hey, its John 😃",
    time: "19h ago",
  },
  {
    id: 3,
    user: "Elon Musk",
    profilePic: require("./assets/elon-musk.jpg"),
    text: "I love beaches 😉",
    image: require("./assets/post2.jpg"),
    time: "yesterday",
  },
];

export const users = [
  {
    username: "@linus",
    displayName: "Linus",
    profilePic: require("./assets/linus.jpg"),
  },
  {
    username: "@john_cena",
    displayName: "John",
    profilePic: require("./assets/john.jpg"),
  },
  {
    username: "@elon_musk",
    displayName: "Elon Musk",
    profilePic: require("./assets/elon-musk.jpg"),
  },
];

export const notifications = [
  { id: 1, user: users[1], text: "Liked your post.", time: "Wed at 12:41 am" },
  {
    id: 2,
    user: users[1],
    text: "Mentioned you in a comment.",
    time: "Sun at 05:12 pm",
  },
  {
    id: 3,
    user: users[2],
    text: "Commented on your post.",
    time: "Wed at 12:41 am",
  },
];
