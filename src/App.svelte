<script>
import meetup from './Meetups/meetup-store.js';
  import Header from "./UI/Header.svelte";
  import MeetUp from "./Meetups/MeetupItems.svelte";
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';
  import Editmeetup from './Meetups/EditMeetup.svelte';
  import MeetUpDetails from './Meetups/MeetupDetails.svelte';
  let editMode;
  let page= 'overview';
  let editId;
  let pageDetails = {};
  // let meetups = [
  //   { 
  //     id: "m1",
  //     title: "Coding Bootcamp asdas",
  //     subtitle: "Learn to code in 2 hours",
  //     description:
  //       "In this meetup, we will have some experts that teach you how to code!",
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
  //     address: "27th Nerd Road, 32523 New York",
	//   contactEmail: "code@test.com",
	//   isFav:false
  //   },
  //   {
  //     id: "m2",
  //     title: "Swim Together",
  //     subtitle: "Let's go for some swimming",
  //     description: "We will simply swim some rounds!",
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
  //     address: "27th Nerd Road, 32523 New York",
	//   contactEmail: "swim@test.com",
	//    isFav:false
  //   }
  // ];
  function saveMeetup(event){
     //id: Math.random().toString(),
  //  const addData={
  //     title: event.detail.title,
  //     subtitle: event.detail.subtitle,
  //     description: event.detail.description,
  //     imageUrl: event.detail.imageUrl,
  //     contactEmail: event.detail.email,
  //     address: event.detail.address
  //  };
  //   meetup.addMeetup(addData);
    editMode = null;
  }
  function showDetails(event){
    
   page = 'details';
   pageDetails.id = event.detail;
  }
  function overview(){
     page = 'overview';
  }
  function startEdit(event){
    editMode = 'edit';
    editId = event.detail;
  }
  // function itemFav(event){
	
  //       const id = event.detail;
  //         meetup.toggleFavorite(id);
 
  //   // const updatedMeetup = { ...meetups.find(m => m.id === id) };
  //   // updatedMeetup.isFav = !updatedMeetup.isFav;
  //   // const meetupIndex = meetups.findIndex(m => m.id === id);
  //   // const updatedMeetups = [...meetups];
  //   // updatedMeetups[meetupIndex] = updatedMeetup;
  //   // meetups = updatedMeetups;
  // }
   function cancelEdit() {
    editMode = null;
    editId = null;
  }
</script>

<style>

  main {
    margin-top: 5rem;
  }

  
   .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />
<main>
{#if page === 'overview'}
<div class="meetup-controls">

    <Button  on:click={() => (editMode = 'edit')} >New Meetup</Button>
</div>

{#if editMode === 'edit'}
<Editmeetup id={editId} on:save={saveMeetup} on:cancel={cancelEdit}/>
{/if}
<MeetupGrid meetups ={$meetup} on:showdetails={showDetails} on:edit={startEdit}
/>
{:else}
<MeetUpDetails id={pageDetails.id} on:close={overview}/>
<!-- <MeetupGrid meetups ={$meetup}
on:tooglefavorite={itemFav}
/> -->
{/if}
</main>

