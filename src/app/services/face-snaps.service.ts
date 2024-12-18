import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps";
import { SnapType } from "../models/snap-type.type";


@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Print-It',
      'images/printit.png',
      `Le client avait un site web statique pour une imprimerie, et souhaitait le rendre dynamique en ajoutant un carrousel interactif. Le projet consistait à intégrer un carrousel en boucle infini avec des contrôles interactifs.`,
      new Date('2024-04-02'),
      100,  // Ajuste la valeur du compteur si nécessaire
      undefined, // Remplacer par la localisation si applicable
      ['HTML', 'CSS', 'JavaScript'],  // Langages utilisés
      ['VsCode (IDE)', 'Git / GitHub'], // Outils utilisés
      [
        'Mettre à jour le code HTML existant',
        'Ajouter un carrousel en boucle infini en JavaScript avec des écouteurs d’événement sur les bullets points et les flèches',
        'Mettre en place un contrôle de versionnement avec Git / GitHub'
      ],
      'https://nicolaschallut.github.io/N-_8_Print-it-JS-main_13052024/', // Lien GitHub du projet
      '', // Lien vers le site web (facultatif)
      'Intégration carrousel'
    ),
    

    new FaceSnap(
      'Chic Dressing',
      'images/chic-dressing.png',
      `La cliente souhaitait optimiser les performances, l'accessibilité, le référencement SEO, et la visibilité de son site de blog et boutique de vêtements et accessoires de luxe d'occasion. Le projet incluait des améliorations sur plusieurs fronts pour garantir un site rapide, accessible, et bien référencé.`,
      new Date('2024-03-24'),
      120,  // Ajuste la valeur du compteur si nécessaire
      undefined, // Remplacer par la localisation si applicable
      ['HTML', 'CSS', 'PHP'],  // Langages utilisés
      ['VsCode', 'Google Lighthouse', 'Feuille de calcul comparatif', 'Rapport et recommandations', 'All-in-one WP Migration', 'Bulk image resizer', 'Autoptimize', 'Flying Scripts', 'WP Super Cache', 'Yoast SEO', 'Wave Tools'], // Outils utilisés et extensions WordPress
      [
        'Optimisation des performances et de l\'accessibilité',
        'Amélioration du SEO avec Yoast SEO et optimisation des mots-clés',
        'Compression d’images et minification des scripts et styles',
        'Rapport détaillé et recommandations pour améliorer le site',
        'Utilisation de Google Lighthouse pour mesurer les performances',
        'Mise en cache du site avec WP Super Cache'
      ],
      'https://github.com/username/chicdressing', // Lien GitHub du projet
      undefined, // Pas de site web fourni
      'optimistion avec google Lighthouse'
    ),
    

    new FaceSnap(
      'Snapface',
      'images/snapface-logo.png',
      `Snapface est une application de partage de photos inspirée des réseaux sociaux modernes. Le projet a permis de créer une interface utilisateur dynamique et responsive, intégrant des fonctionnalités complexes comme la gestion des interactions des utilisateurs, le tri et l'affichage des photos, tout en exploitant des technologies modernes.`,
      new Date(),
      200,  // Ajuste le nombre de snaps si nécessaire
      undefined,  // Remplacer par la localisation si applicable
      ['HTML', 'CSS', 'PHP', 'SASS', 'TypeScript', 'Angular'],  // Langages et technologies utilisés
      ['VsCode','Git / GitHub', 'Node.js'],  // Outils et ressources utilisés
      [
        'Développement d’une interface dynamique avec Angular',
        'Gestion des interactions utilisateur avec TypeScript et JavaScript',
        'Création de composants Angular pour afficher les photos et les interactions',
        'Optimisation des performances avec Node.js et l’utilisation de bibliothèques comme jQuery',
        'Utilisation de SASS pour un CSS structuré et maintenable',
        'Application des principes de responsive design pour mobile et desktop',
        'Intégration des fonctionnalités de tri et de filtrage des photos'
      ],
      'https://github.com/username/snapface',  // Lien GitHub du projet
      'https://www.snapfaceapp.com',  // Lien du site web (facultatif)
      'découverte du framework Angular'
    )
    ,
    
    
      new FaceSnap(
        'MedIT',
        'images/medit.png',
        `Le client avait un site WordPress qui a été cassé après une mise à jour, ainsi qu'une mauvaise intégration d’une modale de popup. Ce projet a consisté à restaurer le site et corriger les bugs tout en apportant des améliorations techniques pour stabiliser l'ensemble du site.`,
        new Date('2024-06-12'),
        50,  // Vous pouvez ajuster la valeur du compteur si nécessaire
        undefined, // Remplacer par la localisation si applicable
        ['HTML', 'CSS', 'PHP', 'JS'],  // Langages utilisés
        ['Git / GitHub', 'Search-and-Replace DB Master', 'Console log', 'Debug log', 'Dev Inspector Tools', 'Cahier de recette'], // Outils utilisés
        [
          'Cloner un site en local pour travailler en toute sécurité et remettre un site en état de marche',
          'Identifier et réparer les bugs des extensions WordPress',
          'Corriger les erreurs de JavaScript, PHP, et HTML/CSS',
          'Préparer et rédiger un cahier de recette pour documenter les bugs identifiés, les corrections apportées, et les recommandations',
          'Expliquer le principe des tests fonctionnels et unitaires, et leur importance dans différents types de projets'
        ],
        'https://github.com/username', // Lien GitHub du projet
        'https://www.meditsite.com', // Lien vers le site web (facultatif)
        'débogage'
      ),
      
    new FaceSnap(
      'Mota galerie',
      'images/motaphoto.png',
      'Bienvenue sur le thème WordPress personnalisé "Mota Photo" ! Ce thème a été conçu spécifiquement pour Nathalie Mota, une photographe freelance, afin de présenter son travail de manière élégante et dynamique. Le thème inclut des types de contenu personnalisés et des champs personnalisés pour permettre à Nathalie de gérer facilement ses projets photographiques et de les présenter de façon attrayante sur son site web.',
      new Date(),
      8,
      undefined,
      ['HTML', 'CSS', 'PHP', 'JS'],
      ['CPT UI', 'ACF', 'Git / GitHub'],
      [
        'Mettre en place des structures de données personnalisées avec PHP',
        'Rendre les templates du contenu dynamiques en exploitant les données du back-office de WordPress',
        'Intégration des techniques d’affichage dynamique de données comme Ajax',
        'Utilisation de bibliothèques JavaScript telles que jQuery, de préprocesseurs comme SASS, et d\'environnements d\'exécution comme Node.js avec des modules Node, y compris Gulp',
        'Créer et intégrer un popup, un lightbox et les vignettes dynamiques au survol des flèches',
        'Appliquer les principes de GreenIT',
        'Exporter le site (sa base de données et les archives du site) pour l’envoyer au client'
      ],
      'https://github.com/username', // Ajoute l'URL GitHub ici
      'https://www.motaphotographer.com', // Ajoute le lien du site web ici (facultatif)
      'développement web'
    ),

    new FaceSnap(
      'Koukaki',
      'images/koukaki.png',
      `Un studio d'animation souhaitait améliorer son site en ajoutant des animations interactives et dynamiques, incluant des vidéos, des carrousels, et des effets visuels attrayants. Le projet a permis d'intégrer des fonctionnalités modernes tout en respectant les demandes spécifiques du studio.`,
      new Date('2024-05-23'),
      160,  // Ajuste la valeur du compteur si nécessaire
      undefined, // Remplacer par la localisation si applicable
      ['HTML', 'CSS', 'PHP', 'JS', 'Node.js', 'jQuery', 'SASS'],  // Langages utilisés
      ['Maquette', 'Prototype', 'Demandes du studio', 'Git / GitHub', 'Archive du site'], // Outils et ressources utilisés
      [
        'Manipulation du DOM avec JavaScript et jQuery',
        'Intégration de vidéos, carrousels et effets de parallaxe',
        'Création d\'animations simples avec SASS',
        'Utilisation de bibliothèques comme jQuery et SwiperJS',
        'Dynamisation du menu avec un bouton burger pour améliorer l’expérience utilisateur'
      ],
      'https://nicolaschallut.github.io/koukaki_gh-pages/',  // Lien GitHub du projet
      'https://www.koukakianimation.com',  // Lien du site web
      'animation css et javascript'
    )
    
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!')
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const FaceSnap = this.getFaceSnapById(faceSnapId)
    FaceSnap.snap(snapType);
  }
}


