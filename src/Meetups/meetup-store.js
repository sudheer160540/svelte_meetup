import { writable } from "svelte/store";

const meetup = writable([
  {
    id: "m1",
    title: "Coding Bootcamp asdas",
    subtitle: "Learn to code in 2 hours",
    description:
      "In this meetup, we will have some experts that teach you how to code!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "code@test.com",
    isFav: false,
  },
  {
    id: "m2",
    title: "Swim Together",
    subtitle: "Let's go for some swimming",
    description: "We will simply swim some rounds!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "swim@test.com",
    isFav: false,
  },
]);

const customMeetupStore = {
  subscribe: meetup.subscribe,
  addMeetup: (meetUpdata) => {
    const newMeetup = {
      ...meetUpdata,
      id: Math.random().toString(),
      isFav: false,
    };
    meetup.update((items) => {
      return [newMeetup, ...items];
    });
  },
  toggleFavorite: (id) => {
    meetup.update((items) => {
      const updatedMeetup = { ...items.find((m) => m.id === id) };
      updatedMeetup.isFav = !updatedMeetup.isFav;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  updateMeetup:(id,updateMeetup)=>{
    meetup.update((items)=>{ 
        const meetUpIndex = items.findIndex(i=>i.id === id);
        const update = {...items[meetUpIndex], ...updateMeetup}; 
        const updateMeetups = [...items];
        updateMeetups[meetUpIndex] = update;
        return updateMeetups;
    })
  },
  removeMeetup:(id)=>{
    meetup.update(items=>{
        return items.filter(i=> i.id !== id)
      })
  }
};
export default customMeetupStore;
