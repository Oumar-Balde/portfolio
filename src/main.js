import "bootstrap-icons/font/bootstrap-icons.css"
import gsap from "gsap"; import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// // Animation immédiate pour la première section (Accueil) 
gsap.from("#accueil", { opacity: 0, y: 50, duration: 1.2, ease: "power2.out", });

gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    opacity: 0, y: 50, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none", },
  });
});