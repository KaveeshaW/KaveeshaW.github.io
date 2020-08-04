let profile = {
  firstName: "Kaveesha",
  lastName: "Weerasiri",
  experience: [
    {
      title: "Software Development Apprentice at Code Differently",
      location: "Wilmington, DE",
      date: "May 2020 –  Present",
      details: 
          '<ul>' 
          + '<li>Improving my skills through hands on software projects and team collaboration</li>' 
          + '<li>Developing in Java, creating UMLs, and adhering to test-driven development protocols</li>' 
          + '<li>Designed a terminal based casino application in Java using agile methodology </li>'
        	+ '<li>Implemented the Go Fish game and assisted with creating the Card, Die, Deck, Guess the Card, and Suit classes </li>'
          + '<li>Continuously updated an UML as the project developed to keep team members informed </li>'
          + '<li>Performed unit testing using JUnit4 and the @Before and @Test annotations to set up and test functionality </li>'
          +'</ul>'
    },
    {
      title: "Teaching Assistant for Program Design 1",
      location: "Chicago, IL",
      date: "January 2018 – December 2019",
      details: 
          '<ul>' 
          + '<li>Worked closely with professor to help students identify issues and develop appropriate solutions</li>'
          + '<li>Assisted students with incorporating lists, dictionaries, strings, and loops in Python</li>' 
          + '<li>Emphasized use of functions, concise variable names, and descriptive comments</li>'
          + '<li>Instructed students on how to use documentation from Python libraries and print statements to debug code</li>'
          +'</ul>'
    },
    {
      title: "Front-End Developer Intern",
      location: "UIC, Professor Tanya Berger-Wolf",
      date: "June 2018 – August 2018",
      details: 
          '<ul>' 
          + '<li>Helped create an endangered animals app using React Native to provide citizen scientists with vital information</li>' 
          + '<li>Built different aspects of the app UI including the “follow and following pages” using JavaScript</li>'
          + '<li>Utilized a HashMap to store the user data and update the pages based on who was signed in</li>'
          +'</ul>'
    }
  ],
  education: [
    {
      school_name: "University of Illinois at Chicago",
      degree: "Bachelor of Science in Computer Science",
      expectedGraduation: "May 2021",
      gpa: 3.80
    }
  ],
  //add projects by adding more objects
  projects: [
    {
     name: "Covid-19 PWA",
     technologies: "HTML, CSS, JS",
     course_name: "IT 202",
     description: 
      '<ul>' 
      + '<li>Visualizes up to date data about the corona virus and displays the weather at your current location</li>'
      +	'<li>Utilizes Dexie.js, geolocation, Google Charts, Material Components for the Web, and API calls</li>'
      + '</ul>',
     projectURL: "https://kaveeshaw.github.io/it202-big-project/",
     repoURL: "https://github.com/KaveeshaW/it202-big-project",
     date: "April 2020"
    },
    {
     name: "Invaders Of The Void",
     technologies: "C#, Unity",
     course_name: "CS 440",
     description: 
     '<ul>' 
      + '<li>Created a two-phase boss battle for a game that a previous group prototyped using Unity and C#</li>' 
      + '<li>Implemented bullet hit detection, health bars, enemy bats using the A* pathfinding library, moving platforms, and more</li>'
      + '<li>Incorporated reusable scripts and game objects that other team members developed into my scene</li>'
      + '<li>Collaborated with a team using agile development, Git, and iceScrum to communicate and execute the project</li>'
      + '</ul>',
     projectURL: "https://kaveeshaw.github.io/InvadersOfTheVoid/",
     repoURL: "https://github.com/KaveeshaW/InvadersOfTheVoid",
     date: "Feburary 2020 - April 2020"
    },
    {
      name: "Mobile Radio Protocols React",
      technologies: "React, HTML, JavaScript, CSS",
      course_name: "N/A",
      description: 
      '<ul>' 
      + '<li>Modernized personal project that was formerly hosted by Weebly using React, HTML, CSS, and JavaScript</li>' 
      + '<li>Utilized functional components, states, react-router-dom, fragments, and hooks from React</li>'
      + '<li>Focused on high level abstraction about how radios transmit messages through the air</li>'
      + '</ul>',
      projectURL: "https://kaveeshaw.github.io/mobileRadioProtocolsReact/",
      repoURL: "https://github.com/KaveeshaW/mobileRadioProtocolsReact",
      date: "May 2020"
    },
    {
      name: "The Unbreakable Safe",
      technologies: "Arduino, C",
      course_name: "CS 362",
      description: 
      '<ul>' 
      + '<li>Collaborated with a team to create a two factor authentication safe </li>' 
      + '<li>Tracked hand movement using an ultrasonic sensor that lights up LEDs if hand is close</li>'
      + '<li>Set up a buzzing sound that turns off when the user finds the hidden button</li>'
      + '<li>Built the project using Arduinos, breadboards, wires, and an external device</li>'
      + '</ul>',
      projectURL: "https://youtu.be/fXRv_W06U_0",
      repoURL: "https://github.com/KaveeshaW/CS362Project",
      date: "Feburary 2019 - April 2019"
    },
    {
     name: "Side Scrolling Game",
     technologies: "HTML, CSS, JS, Canvas",
     course_name: "IT 202",
     description: 
     '<ul>' 
      + '<li>Developed a side scrolling game that involves benefit and harm characters</li>' 
      + '</ul>',
     projectURL: "https://kaveeshaw.github.io/it202-project3/",
     repoURL: "https://github.com/KaveeshaW/it202-project3",
     date: "March 2020"
    },
  ]
}