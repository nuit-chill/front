# Technical Architecture Document (TAD)

## Summary

## Quickstart

Pour lancer l'application localement en mode dev, exécutez la commande `npm run dev`.

## Technologies

Nous avons créé un site web avec React, Vite et Typescript.

Les consignes demandaient un site permettant à l'utilisateur d'élargir ses connaissances sur le thème du réchauffement climatique. Nous avons donc décidé de créer une application web interactive : l'utilisateur se verra remettre des cartes avec des questions concernant le climat et il aura deux choix de réponses. Une fois l'utilisateur a répondu, il lui sera indiqué si la réponse était vraie ou fausse, et une carte expliquant le sujet plus en détail lui sera présentée.
Notre concept étant assez simple, nous avons choisi de stocker les questions et les réponses dans des fichiers json directement dans l'application web. Il n’y aura donc pas besoin de créer une API ou une base de données. Cela permettra également à l'application de gagner en performance sur les réseaux aux connexions lentes.

## Eco-conception

- **Mode sombre**

Pour réduire l'intensité et la luminosité de l'écran et ainsi réduire les ressources demandées par l'application, nous avons ajouté le mode sombre. L'utilisateur est libre de choisir entre les modes sombre et clair, avec une configuration par défaut basée sur le mode configuré de son système.

- **Pas de fonctionnalités inutiles**

Seules les fonctionnalités demandées ont été développées. Pour éviter de surcharger les utilisateurs ainsi que de développer des fonctionnalités peu utilisées, nous nous sommes concentrés sur les besoins minimales. L'utilisateur a la possibilité d'élargir ses connaissances grâce à notre jeu interactif.

- **Éviter les Dark Patterns**

Notre site est axé autour d'un jeu addictif. Les cartes se succèdent sans pause et l'utilisateur est constamment incité à glisser les images. Puisque ce sont les premières conditions pour créer des jeux addictifs, nous avons décidé d'arrêter notre jeu après 6 cartes. Cela obligera l'utilisateur à faire des pauses et par conséquent il ne restera pas sur notre site plus longtemps qu'il ne le souhaite.

- **Connexions faibles envisagées**

Puisqu'il n'y a pas d'API ou de base de données avec laquelle notre application Web devra communiquer, elle fonctionnera bien avec une connexion Internet faible.

- **Variations de polices limitées**

Il n'y a pas beaucoup de polices et elles sont prédéfinies. De plus, nous utilisons la même police pour l’ensemble de l’application. Cela réduit le chargement inutile des polices.

- **Compression des images**

Toutes les images utilisées par l'application sont converties au format webp et compressées autant que possible sans perte de qualité.

- **Gestion des erreurs**

Une page est prévue pour afficher les erreurs (e.g. 404).

- **Traitements côté client**

Toutes nos opérations se font côté client, il n'y a aucune charge sur le serveur.

- **Utilisateur déclenche les animations**

L'application ne dispose pas d'animations qui s'exécuteraient par défaut au moment du chargement de la page. Une action de l'utilisateur est requise pour démarrer une animation (par exemple, un mouvement de swipe sur l'écran de l'appareil).

## Accessibilité

- **Taille du texte**

Pour aider les utilisateurs à lire le texte sur notre site Web, nous avons ajouté la possibilité de modifier la taille de la police dans les paramètres. Cela permettra à chacun d’adapter le texte à sa vision. Nous avons également choisi les polices `Arial, Helvetica, sans-serif` car ce sont des polices bien lisibles sur le web.

- **Traduction multi-lingue**

Pour être accessible à un public plus large, la langue de notre site Web peut être modifiée dans les paramètres (un utilisateur peut choisir entre l'anglais, le français et l'allemand).

- **Contraste**

Les éléments du site web sont clairement visibles grâce à leurs couleurs contrastées. Il est également possible de modifier la palette de couleurs pour mieux répondre aux préférences de l'utilisateur en basculant entre les modes sombre et clair.

- **En utilisant les balises HTML appropriées**

Nous nous sommes également assurés d'utiliser des balises html appropriées sur nos pages Web (par exemple en utilisant la balise nav pour la barre de navigation, en n'utilisant pas de balises h2 avant h1...).