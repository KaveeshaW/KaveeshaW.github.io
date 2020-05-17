let profile = {
  firstName: "Kaveesha",
  lastName: "Weerasiri",
  experience: [
    {
      title: "Teaching Assistant for Program Design 1",
      location: "Chicago, IL",
      date: "January 2018 – December 2019",
      details: 
          '<ul>' 
          + '<li>Helped students incorporate lists, dictionaries, strings, and loops in Python</li>' 
          + '<li>Emphasized use of functions, concise variable names, and descriptive comments</li>'
          + '<li>Showed how to use documentation from Python libraries and print statements to debug code</li>'
          +'</ul>'
    },
    {
      title: "Front-End Developer Intern",
      location: "UIC, Professor Tanya Berger-Wolf",
      date: "June 2018 – August 2018",
      details: 
          '<ul>' 
          + '<li>Helped create an app using React Native that provides citizen scientists with information about endangered animals</li>' 
          + '<li>Built different aspects of the app UI including the “follow and following pages” using JavaScript</li>'
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
     technologies: `HTML, CSS, JS, APIs from https://pomber.github.io/covid19/timeseries.json and
     https://api.openweathermap.org/data/2.5/weather`,
     course_name: "IT 202",
     description: "This project visualizes data for the coronavirus and displays the weather at your current location. It is a PWA using Dexie.js, your devices geolocation (if you allow it), Google Charts, and Material Components for the Web. API's are from https://pomber.github.io/covid19/timeseries.json and https://api.openweathermap.org/data/2.5/weather.",
     projectURL: "https://kaveeshaw.github.io/it202-big-project/",
     repoURL: "https://github.com/KaveeshaW/it202-big-project",
     date: "April 2020"
    },
    {
     name: "Invaders Of The Void",
     technologies: "C#, Unity",
     course_name: "CS 440",
     description: "A puzzle-platform game where a player traverses through space and then heads into a castle. Within the castle, the player faces different puzzle challenges and a boss at the end.",
     projectURL: "https://docs.google.com/presentation/d/1M7LEUq141K1vqccc_RIqIHXfv5nk3ExODWBRMv8kpWc/edit#slide=id.p",
     repoURL: "https://github.com/KaveeshaW/InvadersOfTheVoid",
     date: "Feburary 2020 - April 2020"
    },
    {
      name: "Mobile Radio Protocols",
      technologies: "React, HTML, JavaScript, CSS",
      course_name: "N/A",
      description: "This project is a PWA using Reactjs. It focuses on what I learned about high-level abstraction of how radios transmit messages through the air.  It utilizes functional components, states, the react-router-dom, fragments, and hooks.",
      projectURL: "https://kaveeshaw.github.io/mobileRadioProtocolsReact/",
      repoURL: "https://github.com/KaveeshaW/mobileRadioProtocolsReact",
      date: "May 2020"
    },
    {
      name: "The Unbreakable Safe",
      technologies: "Arduino, C",
      course_name: "CS 362",
      description: "This project utilizes 3 arduinos. One arduino controls the LCD, IR reciever, and an outside buzzer. The second arduino handles the servo motor and the RGB Light. The third arduino handles the ultrasonic sensor, LEDs, buzzer, and button.", 
      projectURL: "Not available at this time",
      repoURL: "https://github.com/KaveeshaW/CS362Project",
      date: "Feburary 2019 - April 2019"
    },
    {
     name: "Side Scrolling Game",
     technologies: "HTML, CSS, JS, Canvas",
     course_name: "IT 202",
     description: "A game where you move the character up and down to try and touch the benefit character while avoiding the harm character.",
     projectURL: "https://kaveeshaw.github.io/it202-project3/",
     repoURL: "https://github.com/KaveeshaW/it202-project3",
     date: "March 2020"
    },
  ]
}