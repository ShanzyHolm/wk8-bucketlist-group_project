use bucketlist;
db.dropDatabase();

db.items.insertMany([
  {
    name: "Travel to Fiji",
    details: "Do by 60",
    completed: false
  },
  {
    name: "Meet the Queen",
    details: "On 10 November 2018 at the Royal British Legion Festival of Remembrance at the Royal Albert Hall, London",
    completed: false
  },
  {
    name: "Go White Water Rafting",
    details: "Splash White Water Rafting with pals",
    completed: true
  }
])
