# Technical Architecture Document (TAD)

## Summary


## Technologies

Nous avons crée un site web avec React, Vite et Typescript.

Les consignes demandaient seulement un site qui permet à l'utilisateur d'élargir ses connaissances sur le sujet du réchauffement climatique. Nous avons donc décidé de créer une application web interactive: l'utilisateur seras donnés des cartes concernant le climat et il auras deux choix de réponses. Une fois répondu, on lui indiqueras si ca réponse était vraie ou fausse et une carte expliquant plus en détail lui seras montré.
Etant un concept assez simple, nous avons choisie de stoquer les questions et réponses dans des fichiers json directement dans l'application web. Il n'y auras donc pas besoin de créer une API ou une base de données. Cela permettras aussi à l'application de gagner en performance sur des réseaux à connexion lente.

## Ecoresponsibility


Pour réduire l'intensité et la luminosité de l'écran et ainsi diminuer les ressources demandés par l'application, nous avons ajouté le mode sombre. L'utilisateur est libre de choisir entre cette sobriété et le mode clair, avec la première configuration se basant sur son système.

Que les fonctionnalités demandés ont été développé. Pour éviter de surcharger les utilisateurs ainsi que de développer des fonctionnalités peu utilisés, nous nous sommes concentrés sur les consignes minimales. L'utilisateur à l'opportunité d'élargir ses connaissances à travers notre jeu interactif.

Nôtre site est accès autour d'un jeu addictif. Les cartes se suivent sans pause et l'utilisateur est constamment stimulé et doit agir lui-même sur notre site. Etant donné que ce sont les premières conditions pour créer des jeux addictifs, nous avons décidé d'arrêter notre jeu après 6 cartes. Cela forceras l'utilisateur à prendre des pauses et en conséquence ne resterait pas plus longtemps sur notre site que ce qu'il souhaite.

Comme il n'y a pas de API ou de base de données avec laquelle notre application web devras communiquer, elle fonctionneras aussi avec une connexion Internet faible.

Il n'y a pas beaucoup de polices et ils sont prédéfinis. De plus, nous utilisont la même police pour toute l'application. Cela réduit les chargements de polices inutiles.

## Accessibility

- taille du texte

Pour aider aux utilisateurs de lire le texte sur notre site web, nous avons ajouté la possibilité de changer la taille de la police dans les paramètres. Cela permettras à tous le monde d'adapter le texte pour leur vision. Nous avons aussi choisi les polices `Arial, Helvetica, sans-serif` comme ce sont des polices plus accessible.


