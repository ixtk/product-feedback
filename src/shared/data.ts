export const currentUser = {
  image: "jesse.jpg",
  name: "Jesse Ronda",
  username: "jesse10930"
}

export const categories = ["UI", "UX", "enhancement", "bug", "feature"]
export const statusList = ["suggestion", "planned", "in-progress", "live"]

export const productRequests = [
  {
    id: "N4s0z1v9GB",
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        id: "26XJBk5L3I",
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        user: {
          image: "suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811"
        }
      },
      {
        id: "02HCV1Q3np",
        content:
          "Please use fun, color-coded labels to easily identify them at a glance",
        user: {
          image: "thomas.jpg",
          name: "Thomas Hood",
          username: "brawnybrave"
        }
      }
    ]
  },
  {
    id: "Cb4nI57T2q",
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 99,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: [
      {
        id: "AzXm1CW493",
        content:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.",
        user: {
          image: "elijah.jpg",
          name: "Elijah Moss",
          username: "hexagon.bestagon"
        }
      },
      {
        id: "08BF19EXsL",
        content:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It's also quite a trend with modern apps and  apparently saves battery life.",
        user: {
          image: "james.jpg",
          name: "James Skinner",
          username: "hummingbird1"
        },
        replies: [
          {
            content:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            replyingTo: "hummingbird1",
            user: {
              image: "anne.jpg",
              name: "Anne Valentine",
              username: "annev1990"
            },
            id: "h4fN3Xj2a5"
          },
          {
            content:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            replyingTo: "annev1990",
            user: {
              image: "ryan.jpg",
              name: "Ryan Welles",
              username: "voyager.344"
            },
            id: "PXd92k5TR7"
          }
        ]
      }
    ]
  },
  {
    id: "gk29yuq36f",
    title: "Q&A within the challenge hubs",
    category: "feature",
    upvotes: 65,
    status: "suggestion",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: [
      {
        id: "1f2Q39KBie",
        content:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        user: {
          image: "george.jpg",
          name: "George Partridge",
          username: "soccerviewer8"
        }
      }
    ]
  },
  {
    id: "7xg5lPck39",
    title: "Add image/video upload to feedback",
    category: "enhancement",
    upvotes: 51,
    status: "suggestion",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: [
      {
        id: "X5uSLE39w8",
        content:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        user: {
          image: "javier.jpg",
          name: "Javier Pollard",
          username: "warlikeduke"
        }
      },
      {
        id: "2r6Zyxv40p",
        content:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
        user: {
          image: "roxanne.jpg",
          name: "Roxanne Travis",
          username: "peppersprime32"
        }
      }
    ]
  },
  {
    id: "zFByV2713G",
    title: "Ability to follow others",
    category: "feature",
    upvotes: 42,
    status: "suggestion",
    description: "Stay updated on comments and solutions other people post.",
    comments: [
      {
        id: "04aONg3pX9",
        content:
          "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
        user: {
          image: "victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin"
        },
        replies: [
          {
            content:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they've done lately. I learn a lot by reading good developers' code.",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "zena.jpg",
              name: "Zena Kelley",
              username: "velvetround"
            },
            id: "AszU37j90g"
          }
        ]
      },
      {
        id: "NfarY2w637",
        content:
          "I've been saving the profile URLs of a few people and I check what they've been doing from time to time. Being able to follow them solves that",
        user: {
          image: "jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit"
        }
      }
    ]
  },
  {
    id: "EO6K350RXL",
    title: "Preview images not loading",
    category: "bug",
    upvotes: 3,
    status: "suggestion",
    description: "Challenge preview images are missing when you apply a filter."
  },
  {
    id: "29uo8L5EaY",
    title: "More comprehensive reports",
    category: "feature",
    upvotes: 123,
    status: "planned",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    comments: [
      {
        id: "A4530wFKor",
        content:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        user: {
          image: "victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin"
        }
      },
      {
        id: "jqI6T325mD",
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        user: {
          image: "jackson.jpg",
          name: "Jackson Barker",
          username: "countryspirit"
        }
      }
    ]
  },
  {
    id: "t0KZ3or84H",
    title: "Learning paths",
    category: "feature",
    upvotes: 28,
    status: "planned",
    description:
      "Sequenced projects for different goals to help people improve.",
    comments: [
      {
        id: "r4F6CKTa92",
        content:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        user: {
          image: "george.jpg",
          name: "George Partridge",
          username: "soccerviewer8"
        }
      }
    ]
  },
  {
    id: "7I5j16zORh",
    title: "One-click portfolio generation",
    category: "feature",
    upvotes: 62,
    status: "in-progress",
    description:
      "Add ability to create professional looking portfolio from profile.",
    comments: [
      {
        id: "T0Hc53nb8v",
        content:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        user: {
          image: "ryan.jpg",
          name: "Ryan Welles",
          username: "voyager.344"
        }
      }
    ]
  },
  {
    id: "3r42I6kMBo",
    title: "Bookmark challenges",
    category: "feature",
    upvotes: 31,
    status: "in-progress",
    description: "Be able to bookmark challenges to take later on.",
    comments: [
      {
        id: "lvO0m812fQ",
        content:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        user: {
          image: "suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811"
        }
      }
    ]
  },
  {
    id: "Itc7Ms35h6",
    title: "Animated solution screenshots",
    category: "bug",
    upvotes: 9,
    status: "in-progress",
    description:
      "Screenshots of solutions with animations don't display correctly."
  },
  {
    id: "PqT20k49bx",
    title: "Add micro-interactions",
    category: "enhancement",
    upvotes: 71,
    status: "live",
    description: "Small animations at specific points can add delight.",
    comments: [
      {
        id: "NOs52PK61e",
        content:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        user: {
          image: "victoria.jpg",
          name: "Victoria Mejia",
          username: "arlen_the_marlin"
        },
        replies: [
          {
            content:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
            replyingTo: "arlen_the_marlin",
            user: {
              image: "suzanne.jpg",
              name: "Suzanne Chang",
              username: "upbeat1811"
            },
            id: "47NTI30plY"
          }
        ]
      }
    ]
  }
]
