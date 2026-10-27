const projects = [
  {
    title: "Transcendence",
    language: "HTML5, CSS, JavaScript, Vue.js",
    description: {
      en: `Purpose: create a full-stack web application as a team of 4.

My role: front-end developer.

I was responsible for:
- designing and integrating the user interface,
- managing the application’s global state,
- implementing real-time communication via WebSockets,
- interacting with the back-end API (Fetch API),
- implementing multilingual support (EN/FR/ES).

The user can:
- create or delete an account,
- sign in,
- play locally, against an AI, or online,
- send, accept or decline friend requests, chat with friends, remove them, and see whether they are online.

Technologies: Vite, Pinia, npm, Docker, WebSocket, Fetch API.`,

      fr: `Objectif : créer en équipe de 4 une application web full-stack.

Mon rôle : développement front-end.

J’étais responsable de :
- concevoir et intégrer l’interface utilisateur,
- gérer l’état global de l’application,
- mettre en place la communication en temps réel via WebSockets,
- interagir avec l’API back-end (Fetch API),
- mettre en place le support multilingue (EN/FR/ES).

L’utilisateur peut :
- créer ou supprimer un compte,
- se connecter,
- jouer en local, contre une IA ou en ligne,
- envoyer, accepter ou refuser des demandes d’ami, discuter avec ses amis, les supprimer, et voir s’ils sont connectés.

Technologies : Vite, Pinia, npm, Docker, WebSocket, Fetch API.`
    },
    images: [
      "screen/transcendence/menu.png",
      "screen/transcendence/sign_in.png",
      "screen/transcendence/sign_up.png",
      "screen/transcendence/menu_co.png",
      "screen/transcendence/avatar.png",
      "screen/transcendence/game.png",
      "screen/transcendence/pause.png",
      "screen/transcendence/spanish.png",
      "screen/transcendence/french.png",
      "screen/transcendence/add_friend.png",
      "screen/transcendence/request.png",
      "screen/transcendence/friend_menu.png",
      "screen/transcendence/friend.png",
      "screen/transcendence/iphone.png",
      "screen/transcendence/credits.png"
    ]
  },
  {
    title: "PacMan",
    language: "Python",
    description: {
      en: `Purpose: recreate Pac-Man as a team of 2.

My role: renderer lead.

I was responsible for:
- validating the configuration file,
- creating the graphics and sounds,
- managing the menu navigation,
- displaying the appropriate overlays,
- developing the algorithm for one of the ghosts,
- enforcing the coding standard,
- managing project tracking and documentation.

Technologies: Python Arcade library.`,

      fr: `Objectif : recréer Pac-Man en équipe de 2.

Mon rôle : référente du rendu graphique.

J’étais chargée de :
- valider le fichier de configuration,
- créer les graphismes et les sons,
- gérer la navigation dans les menus,
- afficher les overlays appropriés,
- développer l’algorithme d’un des fantômes,
- veiller au respect de la norme,
- gérer le suivi du projet et sa documentation.

Technologies : bibliothèque Python Arcade.`
    },
    images: [
      "screen/pacman/arco.png",
      "screen/pacman/menu.png",
      "screen/pacman/cheat.png",
      "screen/pacman/game.png",
      "screen/pacman/gullman.png",
      "screen/pacman/highscores.png",
      "screen/pacman/instructions.png",
      "screen/pacman/pause.png",
      "screen/pacman/scenar.png"
    ]
  },
  {
    title: "Fly-In",
    language: "Python",
    description: {
      en: `Purpose: safely guide drones from a start zone to an end zone in as few simulation turns as possible.

In this project, I had to:
- check that the configuration file describes a valid path between the start and end zones,
- implement a pathfinding algorithm (Edmonds-Karp),
- respect the specific movement rules of each zone type,
- build a graphical interface.

Technologies: Python Arcade library.`,

      fr: `Objectif : guider des drones en toute sécurité d’une zone de départ à une zone d’arrivée, en un minimum de tours de simulation.

Dans ce projet, j’ai dû :
- vérifier que le fichier de configuration décrit un chemin valide entre les zones de départ et d’arrivée,
- implémenter un algorithme de recherche de chemin (Edmonds-Karp),
- respecter les règles de déplacement propres à chaque type de zone,
- créer une interface graphique.

Technologies : bibliothèque Python Arcade.`
    },
    images: [
      "screen/flyin/easy.png",
      "screen/flyin/easy_end.png",
      "screen/flyin/easy_output.png",
      "screen/flyin/medium.png",
      "screen/flyin/medium_middle.png",
      "screen/flyin/hard.png",
      "screen/flyin/hard_end.png",
      "screen/flyin/hard_output.png"
    ]
  },
  {
    title: "A-Maze-Ing",
    language: "Python",
    description: {
      en: `Purpose: create a program that generates and visualizes mazes, as a team of 2.

My role: maze generation.

I was responsible for:
- generating mazes both in the terminal (standard output) and in Python Arcade,
- creating a game in which the player wanders through a maze to find the exit.

The user can:
- regenerate the maze,
- change the colors,
- show or hide the shortest path to the exit,
- reproduce the same maze by putting its seed in the configuration file.

Technologies: Python Arcade library.`,

      fr: `Objectif : créer en équipe de 2 un programme qui génère et visualise des labyrinthes.

Mon rôle : génération des labyrinthes.

J’étais chargée de :
- générer des labyrinthes dans le terminal (sortie standard) et dans Python Arcade,
- créer un jeu où le joueur parcourt un labyrinthe pour trouver la sortie.

L’utilisateur peut :
- régénérer le labyrinthe,
- changer les couleurs,
- afficher ou masquer le chemin le plus court vers la sortie,
- reproduire le même labyrinthe en indiquant sa seed (graine) dans le fichier de configuration.

Technologies : bibliothèque Python Arcade.`
    },
    images: [
      "screen/amazing/output.png",
      "screen/amazing/path.png",
      "screen/amazing/path_color.png",
      "screen/amazing/regen.png",
      "screen/amazing/arcade.png",
      "screen/amazing/arcade_color.png",
      "screen/amazing/game.png",
      "screen/amazing/end_game.png",
      "screen/amazing/other_maze.png",
      "screen/amazing/path_maze.png"
    ]
  }
];