# Mélio-mélo

À l'aide d'HTML+CSS, tu va créer un [méli](https://www.little-crevette.fr/blog/printable-le-puzzle-meli-melo-des-animaux/)-[mélo](https://www.hugolescargot.com/activites-enfants/jeux-a-imprimer/36747-meli-melo-des-animaux/) interactif, soit une image composée de différentes parties ou de différents éléments qui changent quand on clique dessus.

Tu peux travailler avec une découpe en tranches (comme c'est le cas pour les livres méli-mélo classiques ou les cadavres exquis), mais tu peux également explorer des compositions plus complexes où les éléments ne sont pas alignés, voire se superposent en partie.

📂 Le dossier [`exemple01`](https://github.com/stluc-an/2223_an1_melimelo/tree/main/exemple01) contient, comme son nom l'indique, un premier exemple. Tu peux voir le résultat ici : [stluc-an.github.io/2223_an1_melimelo/exemple01](https://stluc-an.github.io/2223_an1_melimelo/exemple01/)

## Demande
### Pour réussir il faudra que
- ton site fonctionne techniquement
- tu donnes un titre à ton site
- ton méli-mélo contienne au moins 3 parties/zones qui peuvent changer
- chaque zone contienne au minimum 6 "variations"
- la taille de totale de ton site soit au maximum 1,44 Mo, la taille typique d'une disquette 💾
- ton site n'utilise pas des ressources en ligne sur le web ; tous les médias (fontes comprises) seront dans ton dossier de remise
- tu crédites correctement les médias récupérés ailleurs (images en Creative Commons, sons de Freesounds.org, etc), par exemple sur une page séparée
- tu respectes le délai de remise

### Tu auras des points en plus pour
- la grande qualité créative et technique de ton projet
- ta générosité dans la quantité de contenus proposés

### Remise
- après les examens de janvier
- dans un dossier nommé `Prénom-usuel_NomDeFamille` (sans espaces), qui contiendra l'entièreté de ton site. Nomme bien la page de départ `index.html`.
- le lieu de remise sera communiqué prochainement

## Technique
### Méli-mélo
La façon la plus simple de réaliser le projet en HTML+CSS pur est d'utiliser l'élément HTML [<`iframe>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe) qui crée un bloc dans lequel on peut charger une autre page. [Dans l'exemple01 disponible dans ce repository](https://stluc-an.github.io/2223_an1_melimelo/exemple01/), chaque partie du visage est une [<`iframe>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe). [Chaque page avec une partie de visage](https://stluc-an.github.io/2223_an1_melimelo/exemple01/frame2/b.html) contient un lien qui mène vers la partie de visage suivante. Un lien cliqué dans une [<`iframe>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe) s'ouvre par défaut dans cette [<`iframe>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe), donc on reste sur la même page principale.

Si tu es l'aise avec l'utilisation de Javascript dans une page HTML, tu es libre d'utiliser JS plutôt que des iframes. [Tu peux introduire des éléments p5.js dans ta page](https://github.com/stluc-an/exemplesHTML/tree/master/p5js%2Bhtml), mais pas en faire l'essentiel du projet.

### 1,44Mo
Tu devras accorder de l'attention à la taille des ressources utilisées par ton site. Puisqu'il s'agira avant tout d'images, tes armes principales seront :
- les dimensions en pixels de tes images
- le taux de compression de tes JPEG
- le nombre de couleur de tes PNG 8bits et de tes GIF
- le nombre d'images de tes GIF
- le format vectoriel SVG, par essence très léger

Cela ne t'empêche pas d'utiliser des webfonts (en nombre raisonnable, et idéalement au format WOFF/WOFF2), du son (court, en mono, mp3 max 48kbps), voire de la vidéo (en courtes boucles et pas trop haute résolution)

Deux approches sont possibles :

- Soit tu veux maîtriser l'optimisation, trouver pour chaque visuel le compromis idéal entre poids de fichier et qualité, pour qu'on se dise _"Waw, mais comment tout ça tient sur une disquette?"_. Tu joueras probablement beaucoup avec les limites de la compression JPEG, et plus généralement de notre perception (jusqu'où l’œil voit-il une différence de qualité?). Tu réutiliseras peut-être astucieusement certaines images pour ne pas gaspiller d'espace.
- Soit tu veux assumer avec radicalité les contraintes imposées par la limite de 1,44Mo. Non pas en ironisant sur une "mauvaise" qualité rigolote, mais plutôt en appréciant les qualités esthétiques qui résultent des algorithmes de compression et de la basse résolution. Cela aura un fort impact sur l'esthétique de ton site, ce qui ne te dispense pas de faire preuve de personnalité graphique.

## Références tous azimuts
- [http://www.teleportacia.org/war/war2.htm](http://www.teleportacia.org/war/war2.htm)
- [https://solar.lowtechmagazine.com/fr/2018/09/how-to-build-a-lowtech-website.html](https://solar.lowtechmagazine.com/fr/2018/09/how-to-build-a-lowtech-website.html)
- [https://itch.io/jam/merveilles-hyperjam/entries](https://itch.io/jam/merveilles-hyperjam/entries)
- [https://beyondresolution.info/RESOLUTION-STUDIES](https://beyondresolution.info/RESOLUTION-STUDIES)
- [https://thephotographersgallery.org.uk/whats-on/open-call-small-file-photo-festival](https://thephotographersgallery.org.uk/whats-on/open-call-small-file-photo-festival)
- [https://www.youtube.com/watch?v=cfrB4Gvpj8c](https://www.youtube.com/watch?v=cfrB4Gvpj8c)
- [https://doodad.dev/dither-me-this/](https://doodad.dev/dither-me-this/)
- [https://www.cameronsworld.net/](https://www.cameronsworld.net/)
- [https://saint-fiona-bianco-xena.fantasia-malware.net/](https://saint-fiona-bianco-xena.fantasia-malware.net/)
- [http://www.cassiemcquater.com/angelasFlood.html](http://www.cassiemcquater.com/angelasFlood.html)
- [https://happysnakegames.itch.io/](https://happysnakegames.itch.io/)
- [https://www.adelfaure.net/](https://www.adelfaure.net/)
- [https://crawlspace.cool/](https://crawlspace.cool/)
- [https://www.are.na/st-luc-an/la-collection-outils](https://www.are.na/st-luc-an/la-collection-outils)
- [https://www.are.na/yannick-st-luc/esthetiques-low-tech](https://www.are.na/yannick-st-luc/esthetiques-low-tech)

