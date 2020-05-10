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
      gpa: 3.77
    }
  ],
  //add projects by adding more objects
  projects: [
    {name: "Covid-19 PWA",
     technologies: `HTML, CSS, JS, api from https://pomber.github.io/covid19/timeseries.json and
     https://api.openweathermap.org/data/2.5/weather`,
     description: "A project that plots coronavirus data and gets weather from your current location",
     projectURL: "https://kaveeshaw.github.io/it202-big-project/",
     repoURL: "https://github.com/KaveeshaW/it202-big-project",
     date: "March 2020 - April 2020"},
    {name: "Side Scrolling Game",
     technologies: "HTML, CSS, JS, Canvas",
     description: "Tom and Jerry inspired",
     projectURL: "https://kaveeshaw.github.io/it202-project3/",
     repoURL: "https://github.com/KaveeshaW/it202-project3",
     date: "March 2020"},
    {name: "Invaders Of The Void",
     technologies: "C#, Unity",
     description: "Player traverses through space, then a castle and faces different puzzle challenges as well as a boss",
     projectURL: "not defined",
     repoURL: "https://github.com/KaveeshaW/InvadersOfTheVoid",
     date: "Feburary 2020 - April 2020"
    }
  ]
}