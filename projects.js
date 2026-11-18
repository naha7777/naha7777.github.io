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
    title: "The_Answer_Protocol (not finished yet)",
    language: "GoLang",
    description: {
      en: `Purpose: Build a small multiplayer text adventure with a TCP server and two clients:
one  command-line (CLI), one graphical interface (GUI) as a team of 3.

My role: server and CLI developer.

I was responsible for:
- designing and maintaining the server,
- handling client connections to it,
- implementing the commands and actions available to players:
      - logging in and logging out,
      - picking up and dropping items,
      - quest system,
      - communicating with other players,
      - creating a group,
      - combat system,
      - talking to non-player characters (NPCs),
      - moving around the map,
- the messages sent by the server to players.

Technologies: Goroutines (concurrency), Git, GitHub.`,

      fr: `Objectif : créer, en équipe de 3, un petit jeu d'aventure multijoueur en mode texte, avec un serveur TCP et deux clients : l'un en ligne de commande (CLI) et l'autre avec une interface graphique (GUI).

Mon rôle : développer le serveur et le client en ligne de commande.

J'étais responsable de :
- la conception et la maintenabilité du serveur,
- la gestion des connexions des clients à celui-ci,
- l'implémentation des commandes et actions que les joueurs peuvent effectuer :
      - se connecter et se déconnecter,
      - ramasser et lâcher des objets,
      - système de quêtes,
      - communiquer avec les autres joueurs,
      - créer un groupe,
      - système de combat,
      - dialoguer avec les personnages non joueurs (PNJ),
      - se déplacer dans la carte,
- les messages envoyés par le serveur aux joueurs.

Technologies : goroutines (concurrence), Git, GitHub.`
    },
    images: [
      "screen/TAP/cli.png",
    ]
  },
  {
    title: "Inception",
language: "Docker / Shell / Virtual Machine",
description: {
  en: `Purpose: Build, on my own, a small web infrastructure with Docker: three services (NGINX, WordPress with php-fpm, and MariaDB) running in separate containers and connected together.

In this project, I had to:
- write my own Dockerfiles for each service, based on Debian, without using ready-made images,
- configure NGINX to serve the website over HTTPS only (TLS 1.2 and 1.3, self-signed certificate) and to forward PHP requests to php-fpm,
- automate the installation of WordPress and the creation of the database and users with shell scripts,
- orchestrate the whole infrastructure with Docker Compose: a dedicated bridge network, restart policies and startup order,
- make the data persistent (website files and database) with volumes,
- manage the configuration and credentials through an environment file,
- write the user and developer documentation, and a Makefile to build, start, stop and clean everything.

Technologies: Docker Compose, NGINX, MariaDB, WordPress, php-fpm, Debian, Shell, Makefile, Git, GitHub.`,

  fr: `Objectif : construire, en solo, une petite infrastructure web avec Docker : trois services (NGINX, WordPress avec php-fpm et MariaDB) qui tournent dans des conteneurs séparés et communiquent entre eux.

Dans ce projet, j'ai dû réaliser :
- l'écriture de mes propres Dockerfiles pour chaque service, à partir de Debian, sans utiliser d'images toutes faites,
- la configuration de NGINX pour servir le site uniquement en HTTPS (TLS 1.2 et 1.3, certificat auto-signé) et transmettre les requêtes PHP à php-fpm,
- l'automatisation de l'installation de WordPress et de la création de la base de données et des utilisateurs avec des scripts shell,
- l'orchestration de l'ensemble avec Docker Compose : réseau bridge dédié, politique de redémarrage et ordre de démarrage,
- la persistance des données (fichiers du site et base de données) grâce aux volumes,
- la gestion de la configuration et des identifiants via un fichier d'environnement,
- la rédaction de la documentation utilisateur et développeur, et d'un Makefile pour construire, lancer, arrêter et nettoyer le tout.

Technologies : Docker Compose, NGINX, MariaDB, WordPress, php-fpm, Debian, Shell, Makefile, Git, GitHub.`
}
  },
  {
    title: "RAG_against_the_machine (AI project)",
    language: "Python",
    description: {
      en: `Purpose: Build a Retrieval-Augmented Generation (RAG) system that answers questions about a real codebase (vLLM 0.10.1), as a solo project.

    Instead of retraining a model, the system gives it access to an external knowledge base: it finds the passages related to a question, then asks a small language model to write the answer from them.

    In this project, I had to:
    - indexing: extracting the archive and chunking the files (code-aware chunking for Python files, heading-aware chunking for Markdown and text files) while keeping the exact character positions of each chunk,
    - retrieval: building a BM25 index and returning the k most relevant chunks for a question,
    - answer generation: building the prompt within a token budget and generating the answer with Qwen3-0.6B,
    - evaluation: computing Recall@k with an IoU criterion against reference datasets,
    - a command-line interface with strict argument validation and structured JSON outputs,
    - write the user and developer documentation, and a Makefile to build and clean everything.

    Results: Recall@5 of 0.83 on documentation questions and 0.51 on code questions; indexing of the whole vLLM archive in about 54 seconds.

    Technologies: BM25 (bm25s), Chonkie, Hugging Face Transformers, PyTorch, Pydantic, Python Fire, uv, Git, GitHub.`,

      fr: `Objectif : créer, en projet individuel, un système RAG (Retrieval-Augmented Generation) capable de répondre à des questions sur une vraie base de code (vLLM 0.10.1).

    Au lieu de réentraîner un modèle, le système lui donne accès à une base de connaissances externe : il retrouve les passages liés à la question, puis demande à un petit modèle de langage de rédiger la réponse à partir de ceux-ci.

    Dans ce projet, j'ai dû réaliser :
    - l'indexation : extraction de l'archive et découpage des fichiers en chunks (découpage selon la structure du code pour les fichiers Python, selon les titres pour les fichiers Markdown et texte), en conservant les positions exactes de chaque chunk,
    - la recherche : construction d'un index BM25 et renvoi des k chunks les plus pertinents pour une question,
    - la génération des réponses : construction du prompt dans la limite de tokens et génération de la réponse avec Qwen3-0.6B,
    - l'évaluation : calcul du Recall@k avec un critère d'IoU par rapport à des jeux de données de référence,
    - une interface en ligne de commande avec validation stricte des arguments et sorties JSON structurées,
    - la rédaction de la documentation, et d'un Makefile pour construire et nettoyer le tout.

    Résultats : Recall@5 de 0,83 sur les questions de documentation et de 0,51 sur les questions de code ; indexation de toute l'archive vLLM en environ 54 secondes.

    Technologies : BM25 (bm25s), Chonkie, Hugging Face Transformers, PyTorch, Pydantic, Python Fire, uv, Git, GitHub.`
  }
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

Technologies: Python Arcade library, LibreSprite, BeepBox, uv, mypy, flake8, Git, GitHub.`,

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

Technologies : bibliothèque Python Arcade, LibreSprite, BeepBox, uv, mypy, flake8, Git, GitHub.`
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
    title: "Call_Me_Maybe",
language: "Python",
description: {
  en: `Purpose: Build, on my own, a local function-calling system: a small language model turns a natural-language request (for example "What is the sum of 2 and 3?") into a structured function call in JSON.

In this project, I had to:
- implement constrained decoding with a finite state machine: at each step, only the tokens that keep the JSON valid are allowed, by masking the model's logits,
- guarantee 100% syntactically valid JSON output, without any retry loop,
- design the prompts so that the model picks the right function and stays focused on the request,
- extract and convert the arguments to the types expected by the function definitions (numbers, strings),
- parse and validate the input files and command-line arguments,
- test the project with static typing (mypy), linting (flake8) and the provided grading tool,
- write the user and developer documentation, and a Makefile to build and clean everything.

Technologies: Python, Qwen/Qwen3-0.6B (Hugging Face), NumPy, Pydantic, uv, mypy, flake8, Git, GitHub.`,

  fr: `Objectif : construire, en solo, un système local d'appel de fonctions : un petit modèle de langage transforme une demande en langage naturel (par exemple « What is the sum of 2 and 3? ») en un appel de fonction structuré au format JSON.

Dans ce projet, j'ai dû réaliser :
- l'implémentation d'un décodage contraint avec une machine à états finis : à chaque étape, seuls les tokens qui gardent le JSON valide sont autorisés, en masquant les logits du modèle,
- la garantie d'une sortie JSON 100 % valide syntaxiquement, sans boucle de nouvelles tentatives,
- la conception des prompts pour que le modèle choisisse la bonne fonction et reste concentré sur la demande,
- l'extraction et la conversion des arguments vers les types attendus par les définitions de fonctions (nombres, chaînes),
- l'analyse et la validation des fichiers d'entrée et des arguments en ligne de commande,
- le test du projet avec du typage statique (mypy), du linting (flake8) et l'outil de correction fourni,
- la rédaction de la documentation, et d'un Makefile pour construire et nettoyer le tout.

Technologies : Python, Qwen/Qwen3-0.6B (Hugging Face), NumPy, Pydantic, uv, mypy, flake8, Git, GitHub.`
}
  },
  {
    title: "Codexion",
language: "C",
description: {
  en: `Purpose: Build, on my own, a concurrent simulation of a high-pressure development environment where coders share a limited number of resources and must avoid burnout.

Each coder is a thread and needs two dongles at the same time to compile. The challenge is to share these resources without deadlocks, starvation or race conditions.

In this project, I had to:
- create and synchronize one thread per coder with mutexes and condition variables,
- prevent deadlocks by always locking the dongles in a consistent order,
- implement two scheduling strategies: FIFO (First In First Out) and EDF (Earliest Deadline First), the latter with a custom min-heap used as a priority queue,
- handle the cooldown period that makes a dongle unavailable after it is released,
- write a monitor thread that detects a burnout with a margin of 1 ms and stops the simulation cleanly,
- serialize the log output so that messages never interleave or appear after the end of the simulation,
- parse and validate the arguments, and free all resources properly,
- write the user and developer documentation, and a Makefile to build and clean everything.

Technologies: C, POSIX threads (pthread), mutex, condition variables, Makefile, Git.`,

  fr: `Objectif : construire, en solo, une simulation concurrente d'un environnement de développement sous pression, où des codeurs se partagent un nombre limité de ressources et doivent éviter le burnout.

Chaque codeur est un thread et a besoin de deux dongles en même temps pour compiler. Le défi est de partager ces ressources sans interblocage, sans famine et sans race condition.

Dans ce projet, j'ai dû réaliser :
- la création et la synchronisation d'un thread par codeur avec des mutex et des variables de condition,
- la prévention des interblocages (deadlocks) en verrouillant toujours les dongles dans un ordre cohérent,
- l'implémentation de deux stratégies d'ordonnancement : FIFO (First In First Out) et EDF (Earliest Deadline First), cette dernière avec une file de priorité écrite à la main,
- la gestion du temps de recharge (cooldown) qui rend un dongle indisponible après sa libération,
- l'écriture d'un thread moniteur qui détecte un burnout avec une marge de 1 ms et arrête proprement la simulation,
- la sérialisation de l'affichage pour que les messages ne s'entremêlent jamais et n'apparaissent pas après la fin de la simulation,
- l'analyse et la validation des arguments, ainsi que la libération correcte de toutes les ressources,
- la rédaction de la documentation, et d'un Makefile pour construire et nettoyer le tout.

Technologies : C, threads POSIX (pthread), mutex, variables de condition, Makefile, Git.`
}
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
- build a graphical interface,
- write the user and developer documentation, and a Makefile to build and clean everything.

Technologies: Python Arcade library, mypy, flake8, uv, Git.`,

      fr: `Objectif : guider des drones en toute sécurité d’une zone de départ à une zone d’arrivée, en un minimum de tours de simulation.

Dans ce projet, j’ai dû :
- vérifier que le fichier de configuration décrit un chemin valide entre les zones de départ et d’arrivée,
- implémenter un algorithme de recherche de chemin (Edmonds-Karp),
- respecter les règles de déplacement propres à chaque type de zone,
- créer une interface graphique,
- la rédaction de la documentation, et d'un Makefile pour construire et nettoyer le tout.

Technologies : bibliothèque Python Arcade, mypy, flake8, uv, Git.`
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
- generating mazes in the terminal (standard output),
- generating mazes within a graphical user interface,
- creating a menu to allow the user to manage the display,
- displaying the path through the maze and toggling its visibility,
- changing the color of the maze,
- creating a game in which the player navigates a maze to find the exit,
- implementing "Easter eggs",
- write the user and developer documentation, and a Makefile to build and clean everything.

The user can:
- regenerate the maze,
- change the colors,
- show or hide the shortest path to the exit,
- reproduce the same maze by putting its seed in the configuration file,
- modify maze settings (such as dimensions).

Technologies: Python Arcade library, mypy, flake8, uv, Git, GitHub.`,

fr: `Objectif : créer en équipe de 2 un programme qui génère et visualise des labyrinthes.

Mon rôle : génération des labyrinthes.

J’étais chargée de :
- générer des labyrinthes dans le terminal (sortie standard),
- générer des labyrinthes dans une interface graphique,
- créer un menu pour que l'utilisateur puisse gérer l'affichage,
- afficher le chemin du labyrinthe et retirer l'affichage,
- changer la couleur du labyrinthe,
- créer un jeu où le joueur parcourt un labyrinthe pour trouver la sortie,
- mettre en place des "Easter eggs",
- la rédaction de la documentation, et d'un Makefile pour construire et nettoyer le tout.

L’utilisateur peut :
- régénérer le labyrinthe,
- changer les couleurs,
- afficher ou masquer le chemin le plus court vers la sortie,
- reproduire le même labyrinthe en indiquant sa seed (graine) dans le fichier de configuration,
- changer les configurations du labyrinthe (dimensions par exemple).

Technologies : bibliothèque Python Arcade, mypy, flake8, uv, Git, GitHub.`
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
    title: "NetPractice",
    language: "Computer Networking",
    description: {
      en: `Purpose: an introduction to the fundamentals of computer networking.

    In this project, I had to:
    - configure IP addresses,
    - connect devices through a router,
    - understand the role of a gateway within a network.

    To do this, I configured small-scale networks simulated through a training interface, completing 10 levels.`,

      fr: `Objectif : introduction aux fondamentaux des réseaux informatiques.

    Dans ce projet, j'ai dû :
    - configurer des adresses IP,
    - connecter des appareils via un routeur,
    - comprendre le rôle d'une passerelle au sein d'un réseau.

    Pour cela, j'ai configuré des réseaux à petite échelle simulés dans une interface d'entraînement, en complétant 10 niveaux.`
    },
    images: [
      "screen/netpractice/level1.png",
      "screen/netpractice/level2.png",
      "screen/netpractice/level3.png",
      "screen/netpractice/level4.png",
      "screen/netpractice/level5.png",
      "screen/netpractice/level6.png",
      "screen/netpractice/level7.png",
      "screen/netpractice/level8.png",
      "screen/netpractice/level9.png",
      "screen/netpractice/level10.png",
    ]
  }
];
