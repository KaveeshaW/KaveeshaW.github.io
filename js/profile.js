let profile = {
  firstName: "Kaveesha",
  lastName: "Weerasiri",
  teaching_experience: [
    {
      title: "Software Design Teaching Assistant",
      location: "UIC, Chicago, IL",
      date: "August 2020 - Present",
      details: 
          '<ul>' 
          + '<li>Instructing students in Java and object oriented programming</li>' 
          + '<li>Providing insights into test driven development and UML design</li>'
          + '<li>Debugging student programs and clarifying questions regarding multithreaded GUI applications</li>'
          +'</ul>'
    },
    {
      title: "Program Design 1 Teaching Assistant",
      location: "UIC, Chicago, IL",
      date: "January 2018 – December 2019",
      details: 
          '<ul>' 
          + '<li>Assisted students with incorporating lists, dictionaries, strings, and loops in Python</li>' 
          + '<li>Emphasized use of functions, concise variable names, and descriptive comments</li>'
          + '<li>Instructed students on how to use documentation from Python libraries and print statements to debug code</li>'
          +'</ul>'
    }
  ],
  internship_experience: [
    {
      title: "Software Development Apprentice",
      location: "Code Differently, Wilmington, DE",
      date: "June 2020 – August 2020",
      details: 
          '<ul>' 
          + '<li>Selected as one of 44 Code Differently Apprentice Program participants from over 500 applicants</li>' 
          + '<li>Improved skills through hands on software projects, team collaboration, and professional development</li>' 
          + '<li>Developed in Java, adhered to test driven development, and implemented object oriented design</li>'
          +'</ul>'
    },
    {
      title: "Front-End Developer Intern",
      location: "UIC, Chicago IL",
      date: "June 2018 – August 2018",
      details: 
          '<ul>' 
          + '<li>Helped create an endangered animal’s app using React Native to provide citizen scientists with vital information</li>' 
          + '<li>Built different aspects of the app UI including the “follow and following pages” using JavaScript</li>'
          + '<li>Applied a HashMap to store the user data and update the pages based on who was signed in</li>'
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
     name: "Coronavirus PWA",
     technologies: "HTML, CSS, JavaScript",
     course_name: "Web and Multimedia Technology",
     description: 
      '<ul>' 
      + '<li>Visualized up to date data about the coronavirus and displayed the weather at your current location</li>'
      + '<li>Utilized Dexie.js, geolocation, Google Charts, Material Components for the Web, and API calls</li>'
      + '</ul>',
     projectURL: "https://kaveeshaw.github.io/it202-big-project/",
     repoURL: "https://github.com/KaveeshaW/it202-big-project",
     date: "April 2020"
    },
    {
     name: "Invaders Of The Void",
     technologies: "C#, Unity",
     course_name: "Software Engineering",
     description: 
     '<ul>' 
      + '<li>Created a two-phase boss battle for a game that a previous group prototyped using Unity and C#</li>' 
      + '<li>Implemented bullet hit detection, health bars, enemy bats, moving platforms, and more</li>'
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
      + '<li>Utilized functional components, states, react-router-dom, and fragments from React</li>'
      + '<li>Focused on high level abstraction about how radios transmit messages through the air</li>'
      + '</ul>',
      projectURL: "https://kaveeshaw.github.io/mobileRadioProtocolsReact/",
      repoURL: "https://github.com/KaveeshaW/mobileRadioProtocolsReact",
      date: "May 2020"
    },
    {
      name: "The Unbreakable Safe",
      technologies: "Arduino, C",
      course_name: "Computer Design",
      description: 
      '<ul>' 
      + '<li>Collaborated with a team to create a two factor authentication safe</li>' 
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
     technologies: "HTML, CSS, JavaScript, Canvas",
     course_name: "Web and Multimedia Technology",
     description: 
     '<ul>' 
      + '<li>Developed a side scrolling game based off Tom and Jerry that involves benefit and harm characters</li>' 
      + '</ul>',
     projectURL: "https://kaveeshaw.github.io/it202-project3/",
     repoURL: "https://github.com/KaveeshaW/it202-project3",
     date: "March 2020"
    },
  ]
}