const projects = [
  {
    title: "PacMan",
    language: "Python",
    description: {
      en: `Purpose: recreate Pac-Man as a team of 2.

My role: renderer lead.

I was responsible for :
- validating the configuration file, 
- creating the graphics and sounds,
- managing the menu navigation, 
- displaying the appropriate overlays,
- developing the algorithm for one of the ghosts,
- managing norme,
- managing project documentation.

Technologies : Arcade Library`,

      fr: `Objectif : recréer Pac-Man en équipe de 2.

Mon rôle : référente du rendu graphique.

J’étais chargée de :
- valider le fichier de configuration,
- créer les graphismes et les sons,
- gérer la navigation dans les menus, 
- afficher les overlays appropriés,
- développer l’algorithme d’un des fantômes,
- gérer la norme,
- gérer le suivi du projet et sa documentation.

Technologies : Bibliothèque Arcade`
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
    title: "A-Maze-Ing",
    language: "Python",
    description: {
      en: `Purpose: create a program that generates and visualizes mazes, as a team of 2.

My role: maze generation.

I was responsible for :
- generating mazes both in the terminal (standard output) and in Python Arcade,
- creating a game in which the player wanders through a maze to find the exit.

The user can :
- regenerate the maze, 
- change the colors,
- show or hide the shortest path to the exit. 
- reproduce the same maze by putting its seed in the configuration file.

Technologies : Arcade Library`,

    fr: `Objectif : créer en équipe de 2 un programme qui génère et visualise des labyrinthes.

Mon rôle : génération des labyrinthes.

J’étais chargée de :
- générer des labyrinthes dans le terminal (sortie standard) et dans Python Arcade,
- créer un jeu où le joueur parcourt un labyrinthe pour trouver la sortie.

L’utilisateur peut :
- regénérer le labyrinthe, 
- changer les couleurs, 
- afficher ou masquer le chemin le plus court vers la sortie,
- reproduire le meme labyrinthe en indiquant sa seed dans le fichier de configuration.

Technologies : Bibliothèque Arcade`
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
  },
  {
    title: "Transcendence",
    language: "HTML5, CSS, JavaScript, Vue.js",
    description: {
      en: `Purpose: create a full-stack web application as a team of 4.

My role: front-end developer.

I was responsible for :
- designing and integrating the user interface, 
- managing the application’s global state, 
- managing real-time communication via WebSockets, 
- managing interaction with the back-end API (Fetch API),
- managing multi-language.

The user can :
- create/delete an account,
- sign in,
- play in local, against an IA, or online,
- add a friend or accept/refuse him, chat with him, delete him, and see if he is online or not.

Technologies : Pinia`,

      fr: `Objectif : créer en équipe de 4 une application web full-stack.

Mon rôle : développement front-end.

J’étais responsable de :
- la conception et de l’intégration de l’interface utilisateur, 
- la gestion de l’état global de l’application, 
- la communication en temps réel via WebSockets,
- l’interaction avec l’API back-end (Fetch API),
- la gestion du multi language.

L'utilisateur peut :
- créer/supprimer un compte,
- se connecter,
- jouer en local, contre une IA ou en ligne,
- ajouter un ami ou l'accepter/le refuser, parler avec lui, le supprimer, et voir si il est connecté ou non.

Technologies : Pinia`
    },
    images: [
      "screen/transcendence/add_friend.png",
      "screen/transcendence/avatar.png",
      "screen/transcendence/credits.png",
      "screen/transcendence/french.png",
      "screen/transcendence/friend_menu.png",
      "screen/transcendence/friend.png",
      "screen/transcendence/game.png",
      "screen/transcendence/iphone.png",
      "screen/transcendence/menu_co.png",
      "screen/transcendence/menu.png",
      "screen/transcendence/pause.png",
      "screen/transcendence/request.png",
      "screen/transcendence/sign_in.png",
      "screen/transcendence/sign_up.png",
      "screen/transcendence/spanish.png"
    ]
  },
  {
    title: "Fly-In",
    language: "Python",
    description: {
      en: `Purpose: safely guide drones from a start zone to an end zone in as few simulation turns as possible.

In this project, I had to check that a valid path exists, implement a pathfinding algorithm (Edmonds-Karp), respect the specific movement rules of each zone type, and build a graphical interface.`,
      fr: `Objectif : guider des drones en toute sécurité d’une zone de départ à une zone d’arrivée, en un minimum de tours de simulation.

Dans ce projet, j’ai dû vérifier qu’un chemin valide existe, implémenter un algorithme de recherche de chemin (Edmonds-Karp), respecter les règles de déplacement propres à chaque type de zone et créer une interface graphique.`
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
  }
];