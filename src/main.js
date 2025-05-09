import "bootstrap-icons/font/bootstrap-icons.css"
import gsap from "gsap"; import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// // Animation immédiate pour la première section (Accueil) 
gsap.from("#accueil", { opacity: 0, y: 50, duration: 1.2, ease: "power2.out", });
// Animation au scroll avec timeline pour les autres sections
// gsap.utils.toArray("section").forEach((section) => {
//   if (section.id !== "accueil") {
//     const cards = section.querySelectorAll(".card");
//     if (cards.length > 0) {
//       let tl = gsap.timeline({ scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none none", }, });
//       tl.from(cards, { opacity: 0, y: 50, duration: 0.6, stagger: 0.2, ease: "power2.out", });
//     } else {
//       // Fallback : animer la section elle-même si pas de .card à l'intérieur  
//       gsap.from(section, {
//         opacity: 0, y: 50, duration: 1, scrollTrigger: {
//           trigger: section, start: "top 80%", toggleActions: "play none none none",
//         },
//       });
//     }
//   }
// });


// Animation d'entrée pour #accueil 
// gsap.from("#accueil", { opacity: 0, y: 50, duration: 1.2, ease: "power2.out", });
// Chaque .card s'anime quand elle entre dans le viewport
gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    opacity: 0, y: 50, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none", },
  });
});