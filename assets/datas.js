const jsonDatas = {
    P1CH1: {
        h: "Découvrez le projet fil rouge : le site Façadia."
        , p: ``
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/main"
        , sol_vid: "https://player.vimeo.com/video/566588735?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Découvrez les sources de bug potentielles`
                , `Découvrez l'origine des bugs Front-End`
                , `Découvrez le projet fil rouge : le site Façadia`
            ]
        }
    },
    P1CH2_SC: {
        h: "Suivez étape par étape l’évolution de votre code avec le débogueur (2 PARTIES)."
        , p: ``
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-1/chapitre-2%2Fscreencast-2"
        , sol_vid: {step1:"https://player.vimeo.com/video/566588785?color=7451eb", step2:"https://player.vimeo.com/video/566588834?color=7451eb"}
        , tasks: {
            p: ``
            , ol: [
                `Utilisez un environnement interactif grâce à la console`
                , `Visualisez et éditez vos règles CSS avec l’inspecteur`
                , `Suivez étape par étape l’évolution de votre code avec le débogueur (2 PARTIES)`
                , `Analysez vos appels réseaux avec l’onglet Network de votre navigateur`
            ]
        }
    },
    P1CH2: {
        h: "Analysez vos appels réseaux avec l’onglet Network de votre navigateur."
        , p: ``
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/main"
        , sol_vid: "https://player.vimeo.com/video/566588893?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Utilisez un environnement interactif grâce à la console`
                , `Visualisez et éditez vos règles CSS avec l’inspecteur`
                , `Suivez étape par étape l’évolution de votre code avec le débogueur (2 PARTIES)`
                , `Analysez vos appels réseaux avec l’onglet Network de votre navigateur`
            ]
        }
    },
    P1CH3_SC: {
        h: "Découvrez la méthodologie de débogage"
        , p: ``
        , imgs: [true]
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-1/chapitre-3%2Fscreencast-1-solution"
        , sol_vid: {"Observez le bug": "https://player.vimeo.com/video/566588944?color=7451eb", "Écrivez un test répétable": "https://player.vimeo.com/video/566588985?color=7451eb", "Élaborez une théorie concernant le bug et testez-la": "https://player.vimeo.com/video/566589038?color=7451eb"}
        , tasks: {
            p: ``
            , ol: [
                `Observez le bug`,
                , `Écrivez un test répétable`,
                , `Élaborez une théorie concernant le bug et testez-la`,
            ]
        }
    },
    P1CH3: {
        h: "Adoptez la logique de débogage. À vous de jouer !"
        , p: `La résolution du bug va souvent être la seule étape où vous allez devoir écrire du code. Une fois le code écrit, il est très important :
        d’essayer de reproduire à nouveau le bug pour voir si ce dernier survient. Essayez de changer de navigateur, de taille d’écran, etc.
        de tester les autres fonctionnalités de votre site et plus particulièrement celles qui auraient pu être impactées par votre solution.
        J'insiste particulièrement sur le deuxième point : il est très fréquent que les développeurs manquent de rigueur à cette étape. Le plus souvent, ils voient que leur code fonctionne, que le bug est résolu, mais ils ne prennent pas le temps d’aller regarder si autre chose a cassé.
        Si votre projet est important et comprend de nombreuses fonctionnalités et pages, le point ci-dessus peut être difficile à mettre en place. C’est pour cette raison que nous recourrons le plus souvent possible aux tests automatisés. Ces derniers vous aident à savoir que le code que vous venez de rédiger n’a pas cassé une autre fonctionnalité.
        Dans la vidéo ci-dessous, vous allez voir comment le bug de notre projet Façadia est résolu. Avant de vous lancer dans la vidéo, essayez de résoudre le bug de votre côté et de tester tous les cas de figure. :)`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-1/chapitre-3%2Fscreencast-1-solution"
        , sol_vid: "https://player.vimeo.com/video/566589081?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Observez le bug`,
                , `Écrivez un test répétable`,
                , `Élaborez une théorie concernant le bug et testez-la`,
                , `À vous de jouer !`,
            ]
        }
    },
    P2: {
        h: "Détectez des bugs HTML et CSS. À vous de jouer !"
        , p: `C’est l’heure de l’exercice et de mettre en application tout ce que vous avez vu dans ce chapitre ! Vous allez détecter un bug d'affichage.
        Changez la branche de votre projet pour vous mettre sur la partie-2/chapitre-1/section-3/exercice. Il semblerait que notre tableau contenant les données d’un capteur soit cassé et ne s’affiche pas comme il faut. Utilisez les outils que nous avons vu durant cette partie pour analyser le problème. 
        Dans la vidéo ci-dessous, je vais vous montrer comment je l’analyse.`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-2/chapitre-1/section-3/exercice-solution"
        , sol_vid: {"Détectez des bugs HTML et CSS": "https://player.vimeo.com/video/566589127?color=7451eb", "Tirez parti de l’inspecteur pour résoudre vos bugs": "https://player.vimeo.com/video/566588684?color=7451eb"}
        , tasks: {
            p: ``
            , ol: [
                `Détectez des bugs HTML et CSS`
                , `Identifiez les bugs d’intégration Analysez votre bug`
                , `À vous de jouer !`
            ]
        }
    },
    P3CH1: {
        h: "Découvrez les différents bugs du DOM. À vous de jouer ... :-S"
        , p: `Mieux vaut lire le cours P3CH1, car la vidéo "À vous de jouer" ne vous apprend strictement rien...`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-3/chapitre-1/section-5"
        , sol_vid: "https://player.vimeo.com/video/566589365?color=7451eb"
        , tasks: {
            p: `Il a créé une issue par bug sur le repository Github. On s'intéresse dans le prochain chapitre à la résolution de ces bugs.`
            , ol: [
                `Découvrez les bugs liés à la SÉLECTION de noeuds`
                , `Découvrez les bugs liés à la CRÉATION de noeuds`
                , `Découvrez les bugs liés à la MODIFICATION de noeuds existants`
                , `Découvrez les bugs liés à la SUPPRESSION de noeuds`
                , `Issue(problème) 1: L’issue de création : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/2`
                , `Issue(problème) 2: L’issue de modification : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/3 `
            ]
        }
    },
    P3CH2_SC_1: {
        h: "Utilisez la console pour déboguer votre DOM"
        , p: `Vous vous souvenez de notre bug du projet fil rouge, Façadia, dans le chapitre précédent ? Celui sur le bouton “Voir les détails” ? Nous allons utiliser le débogueur pour le résoudre. :)`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-3/chapitre-1/section-5"
        , sol_vid: "https://player.vimeo.com/video/566589420?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Voici le bug sur lequel on va travailler : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/3`
            ]
        }
    },
    P3CH2_SC_2: {
        h: "Tirez parti du débogueur PARTIE1"
        , p: `Nous allons ici nous concentrer sur cette issue : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/2.`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-3/chapitre-1/section-5"
        , sol_vid: "https://player.vimeo.com/video/566589492?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Prenez en main le débogueur (SANS l’extension VsCode)`
            ]
        }
    },
    P3CH2_SC_3: {
        h: "Tirez parti du débogueur PARTIE2"
        , p: `Petit bonus avant de passer à la prochaine partie : vous allez découvrir comment déboguer avec l’extension VsCode que je vous ai présentée en début de chapitre. :) Après cette vidéo, vous n’aurez plus aucune excuse pour mal vous servir du débogueur !`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-3/chapitre-1/section-5-extension"
        , sol_vid: "https://player.vimeo.com/video/566589554?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Prenez en main le débogueur (AVEC l’extension VsCode)`
            ]
        }
    },
    P3CH2_SC_4: {
        h: "Servez-vous des outils dédiés au débogage. À vous de jouer !"
        , p: `Voici le bug sur lequel on va travailler : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/3`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-3/chapitre-1/section-5"
        , sol_vid: "https://player.vimeo.com/video/566589617?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `À vous de jouer !`
            ]
        }
    },
    P4CH1_SC_1_2: {
        h: "Récupérez des données météo PARTIE 1 & 2"
        , p: `On va voir ensemble comment prendre en main l’API et notamment: 1/ créer un compte ; 2/ parcourir la documentation ; 3/ faire une requête via Postman et découvrir le format de réponse. <br>On va aussi découvrir où sont réalisées ces deux requêtes et mieux comprendre leur fonctionnement. `
        , sol_git: false
        , sol_vid: {"Découvrez l’API WeatherStack": "https://player.vimeo.com/video/566589667?color=7451eb", "Découvrez l’intégration de l’API WeatherStack sur notre projet fil rouge": ""}
        , tasks: {
            p: ``
            , ol: [
                `Récupérez des données sur une API externe`
                , `Récupérez des données météo`
            ]
        }
    },
    P4CH1_SC_3_4: {
        h: "Comprenez les messages d’erreur d’une API externe. À vous de jouer ! PARTIE1"
        , p: `....Préambule de l'exercice....`
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-4/chapitre-1-section-3/exercise"
        , sol_vid: {"Utilisez l’onglet réseau du navigateur": "https://player.vimeo.com/video/566589776?color=7451eb", "Attrapez vos erreurs": "https://player.vimeo.com/video/566589825?color=7451eb"}
        , tasks: {
            p: ``
            , ol: [
                `Récupérez des données sur une API externe`
                , `Récupérez des données météo`
                , `Comprenez les messages d’erreur d’une API externe`
                , `À vous de jouer !`
            ]
        }
    },
    P4CH2_SC_1_2: {
        h: "Récupérez des données sur une API interne."
        , p: [`Il n'y a pas de pratique sur cette page, juste de l'observaiton.`
            , `Je vais vous montrer comment utiliser l’API. Voici la branche relative à cette partie : partie-4/chapitre-2/section-1. La page de test se trouve dans le dossier pages/geolocation.html `
            , `Je vais vous montrer comment l’API est intégrée sur notre projet. J’utiliserai le code source de la branche main.`
        ]
        , sol_git: ["https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-4/chapitre-2/section-1", "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site"]
        , sol_vid: {"Découvrez l’API de géolocalisation": "https://player.vimeo.com/video/566589933?color=7451eb", "Intégrez l’API de géolocalisation dans le projet fil rouge": "https://player.vimeo.com/video/566589988?color=7451eb"}
        , tasks: {
            p: ``
            , ol: [
                `Récupérez des données sur une API interne`
                , `Récupérez des données de géolocalisation`
            ]
        }
    },
    P4CH2_SC_3: {
        h: "Comprenez les messages d’erreur d’une API interne. À vous de jouer !"
        , p: [`Avant de passer à la dernière partie de ce cours, c’est l’heure du cas pratique !`
                , `Il semblerait que la géolocalisation soit cassée et ne fonctionne plus correctement comme semble l’indiquer cette issue Github (https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/4).` 
                , `Prenez le temps de la regarder et d’essayer de trouver le bug par vous-même avant de regarder la vidéo ci-dessous. `
            ]
        , sol_git: ["https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-4/chapitre-2%2Fexercise-solution", "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-4/chapitre-2%2Fexercise"]
        , sol_vid: "https://player.vimeo.com/video/566590024?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Récupérez des données sur une API interne`
                , `Récupérez des données de géolocalisation`
                , `Comprenez les messages d’erreur d’une API interne`
                , `Découvrez comment les erreurs sont gérées sur l’API de géolocalisation`
                , `À vous de jouer !`
            ]
        }
    },
    P5CH1: {
        h: "Découvrez un bug complexe. Donnez du contexte à un bug. Analysez la situation. À vous de jouer !"
        , p: [
            `Bon, c’est l’heure pour vous d’affronter le boss final ! Le projet Façadia semble avoir un bug bien gênant et vous allez devoir l’analyser grâce à la méthodologie de débogage.`
            , `Comme pour les exemples précédents, voici :`
            , `l’issue du bug : https://github.com/tdimnet/debuggez-l-interface-de-votre-site/issues/5 `
            , `la branche contenant le bug : partie-5/chapitre-1/bug-complexe`
            , `Comme je le disais un peu plus haut, n'hésitez pas à prendre une feuille de papier et un crayon et notez vos idées. Essayez d’observer et de créer un test répétable pour le bug.`
            , `Une fois que vous pensez avoir identifié le bug, vous pouvez me rejoindre dans la vidéo ci-dessous. :)`
        ]
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-5/chapitre-1%2Fbug-complexe"
        , sol_vid: "https://player.vimeo.com/video/566590081?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                `Découvrez un bug complexe`
                , `Donnez du contexte à un bug`
                , `Analysez la situation`
                , `Apprenez à isoler un bug majeur`
                , `À vous de jouer !`
            ]
        }
    },
    P5CH2: {
        h: "Résolvez un bug complexe."
        , p: [`C’est l’heure de résoudre le bug. Revenez sur la branche du chapitre précédente avec la commande :git checkout nomDeLaBranche`
            , `Utilisez les outils à votre disposition pour corriger le bug et faites une proposition de solution. Une fois votre proposition écrite, regardez si le reste de l’application continue de fonctionner correctement.`
        ]
        , sol_git: "https://github.com/OpenClassrooms-Student-Center/debuggez-l-interface-de-votre-site/tree/partie-5/chapitre-1/bug-complexe"
        , sol_vid: "https://player.vimeo.com/video/566590220?color=7451eb"
        , tasks: {
            p: ``
            , ol: [
                "Résolvez un bug complexe."
                , `Utilisez les outils à votre disposition`
                , `Réfléchissez à l’implémentation de la solution`
                , `À vous de jouer !`
            ]
        }
    },
}