# NTT Redux App

The primary aim of this project is to duplicate the provided website as accurately as possible using React and Material UI. I'm harnessing the power and flexibility of these libraries to faithfully reproduce the design, layout, and functionality of the original website.

In addition to the design, this project delves into more complex functionalities through the use of Redux. For instance, I've implemented a feature to 'like' the cards in the slider, and keep track of the total number of liked cards. Upon clicking the 'like' icon, the status of the respective product switches to 'liked', changing the heart icon to red. Conversely, if a product is 'unliked', the heart icon appears grey.

The total count of 'liked' products is dynamically displayed and is updated as and when the 'like' status of a product changes. There's a 'Begenilenler' section where you can filter to see only the products with a 'liked' status. Clicking on this section again will remove the filter, displaying all products irrespective of their 'like' status.

Moreover, when a product card is clicked, you're redirected to my portfolio website. The product titles are restricted to a maximum of two lines. If a title extends beyond this limit, it gets truncated and ends with an ellipsis ('...').

The API call is made using Axios, ensuring efficient and easy-to-manage asynchronous operations, adding another layer of reliability to this project.

In essence, this project combines the visual aspects of Material UI and React with the state management capabilities of Redux, all working together seamlessly to create a robust and engaging user experience.

Original Figma Page: https://www.figma.com/file/STzY429FfaHd51OsBVn0iE/NTT-FE?type=design&node-id=12-65&t=F9dQoc7RqOAXGWEh-0

Api Page: https://honey-badgers-ecommerce.glitch.me/products

## View

### Web Page

<p>
 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1686045430/ntt%20data/web1_yxgbaa.png" width="400" title="Web1">
 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1686045426/ntt%20data/web2_uzhkfe.png" width="400" title="Web2">
</p>

### Tablet

<p>
 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1686045600/ntt%20data/tablet1_sgl91n.png" width="400" title="Tablet">
</p>

### Mobil

<p>
 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1686045493/ntt%20data/mobil1_su3hjo.png" width="400" title="Mobil1">
 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1686045492/ntt%20data/mobil2_dbxku1.png" width="250" title="Mobil2">
</p>

## Installation

To install and run this application on your local machine, follow these steps:

-Clone this repository to your local machine.

-Navigate to the root directory of the cloned repository in your terminal.

-Run `npm install` to install the necessary dependencies.

-Run `npm start` to start the application. (It will work on http://localhost:3000/)

## Technologies Used

This application was built using the following technologies:

-React.js

-Redux

-Materil UI

-Axios

## Deployment

You can see the web page: https://ntt-redux-app.netlify.app/
