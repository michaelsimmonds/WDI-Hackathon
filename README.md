# WDI-Project-02-Hackathon
React Hackathon

## Comedy Nights in London

### Timeframe
2 days

### Technologies Used
* React
* Bulma
* Axios
* JavaScript (ES6)
* HTML
* CSS
* GitHub

### Visit the site [here](https://react-comedynight-hackathon.herokuapp.com/)

### Overview
In this two day pair project, we were given the task of finding an external API to gather and display information on a subject of our choosing.

We decided to use Skiddle, an events guide and ticket outlet, to find comedy nights in London. We used Axios to make the request for information and then displayed the response using React. The user can browse upcoming comedy nights and can click on a particular event for further details. We also added a map component that would display the location of the night, as well as a link so the user could purchase tickets if they wanted to go.

### User Journey

1. The home page for the site is simple. It contains a very brief description of the site and a link to the EventsIndex page.

![Screenshot 2019-03-25 at 14 27 23](https://user-images.githubusercontent.com/43914382/54927500-2fb26b00-4f0a-11e9-9307-57858ad54d72.png)

2. The EventsIndex page is where the various upcoming nights are displayed. Here you can see basic information, such as the name and date of the event, an accompanying image and the venue. The user also has the ability to search for a particular event.

![Screenshot 2019-03-25 at 14 28 46](https://user-images.githubusercontent.com/43914382/54927606-61c3cd00-4f0a-11e9-81e8-4dfd7997e0c6.png)

3. If the user clicks on an event they will be taken to the EventsShow page. Here they can see extra information about the event, such as pricing and a short description. They can also see where it is on a map. There are links at the bottom of the page to the ticket office or to go back to the EventsIndex page.

![Screenshot 2019-03-25 at 14 29 07](https://user-images.githubusercontent.com/43914382/54927612-66888100-4f0a-11e9-882b-53afb5392908.png)

### Process

The starting point in this project was to find an API that we could start using straight away. Since it was only a two day project, we had no time to be waiting around for verification. Once we found Skiddle, we started to test it out on Insomnia to see how the response data was structured and what bits of information we could use in our site. Once we had a good idea of what the response data looked like, we drew up some wireframes so we could visualise how this data would be displayed on the page.

The next day we started to work on the code. The first thing we did was set up to webpack and index.js file so we could test the file was up and running correctly. We then started to build out the React part of the app which include a mixture of functional and classical components.

Using componentDidMount, we made an Axios request to the Skiddle API and set the response data on our state. We did this in our EventIndex component and passed the data through to our EventCard component. To enable a user to search for a specific event, we incorporated the search term into a second axios request which would then set state afresh on submit.

The EventShow component made a fresh axios request incorporating the props passed to it. This enabled us to display specific information about the event and pass that infomation into a map component, which would be displaed on this page. The map component was made using Mapbox. At the bottom of the page we included a link that directed the user towards the skiddle site, where they could purchase tickets if they wanted to attend.

### Challenges

The hardest thing about this project was findind an API that wasn't excesively complicated and provided information that we could readily use. We had to change our project idea a few times to achieve this. 

### Wins

It was great seeing how much can be achieved in only a day and a half of coding. It was also the first time we had used React in an independent project and I was glad that we were able to incorporate a search bar into the site.


### Future features

It would be nice to be able to find comedy nights in any city. At the moment, London is hard coded into the Axios get request. If I had more time I would like to incorporate a drop down menu where the user could select a city which would then be refered to in the get request, so the users could find comedy nights all over the world.
