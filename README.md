 # IRONTRUCK
This is the frontend repository of the Irontruck Project. Please find the link for the backend repository here: https://github.com/frankgimeno3/irontruck 

Irontruck is a web app that connects truck drivers with companies who need to send cargos. Whenever a company needs to send a cargo, they can post a solicitude in Irontruck's cargo exchange. There, truck drivers can make them an offer and start chatting with the sender company to initiate a negotiaton.

Irontruck enables truck drivers to fill the empty spaces on their trucks by finding companies who need to send their pallets to similar destinations. Senders can benefit from Irontruck by saving the extra cost added by intermediaries, being able to check by themselves the real costs of the transport through the direct feedback from truck drivers.  

This web app is a green non-profit initiative with the main goal of saving fuel, and helping the local economy to become more productive through cutting unnecessary costs and offering a better access to information for both drivers and senders. 

## About
Hi! We are Ivan, Edu and Frank, we are full-stack website developers currently studying in Ironhack Coding School. This is our final project, wich we called IronTRUCK.

![Project Image](https://i.imgur.com/6k3J5gW.png "Project Image")

## Deployment
You can check the app fully deployed [here](https://afabregasm.herokuapp.com/). If you wish to view the API deployment instead, check [here](https://afabregasm-back.herokuapp.com/api/).

## Work structure
We developed this project together, using [Trello](https://trello.com/b/OfHdU6hA/irontruck) to our my workflow.
The project was initially designed by Ivan and Frank, who created the main structure. They created the internal folder structure of the client project (this repository), and created internal routes.
Edu was our backend specialist, who assesed Ivan and Frank for a better routing and deployment structure, also the interaction of the project with MongoDB. Edu was latter in charge of the functioning of the models and schemas, and Cloudinary. 

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd portfolio-front
$ npm install
$ npm start
```

## Routes
Users will end up in the landing page when entering into out website.
It's an informative page, containing calls to action for signup and log in.
This routes are public, whenever an unauthorised user tries to find a non-public website will be redirected to one of these pages.
We have an additional error page, in case the user manually introduces a route in the URL and commits come mistake

| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | LandingPage              |
| /signup              | public          | SignupPage               |
| /login               | public          | LoginPage                |
| /about               | public          | ResumePage               |
| /not-found           | public          | Error Page               |

Once logged in, when accessing the deffault route,  "/" , the user will end up in the dashboard.
From the dashboard, the user will be able to post solicitudes if he/she is a "Driver" user, and will be able to see a list with all the cargo solicitudes if he/she is a "Sender" User.

Once the user is authenticated, he/she will also be able to access their profile, and a view from which the cargos can be managed.

| Route                  | Privacy         | Renders                               |
| ---------------------  | :-------------: | ------------------------------------- |
| /profile/:id           | private (user)  | Profile page                          |
| /shipments             | private (user)  | DesignProjectDetailsPage              |
| /shipments/:id         | private (user)  | Shows the details of a specific cargo |


## Components
FOR ALL ROUTES
- Navbar
- Footer
- Loading
FOR PRIVATE ROUTES
(Forms)
- Cargo Filter Form
- Create Offer Form
(Miniatures)
- Cargo Offer Card  
CHECKING COMPONENTS
- IsClient
- IsDriver
- IsPublic
- IsPrivate

---

TALK JS INFORMAtion here!

---
Any doubts? Contact us! 