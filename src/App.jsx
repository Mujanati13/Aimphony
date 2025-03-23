import React, { useState, useEffect, useRef } from "react";
import {
  IoHeadsetOutline,
  IoDownloadOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoMicOutline,
  IoSearchOutline,
  IoPlayOutline,
  IoTimeOutline,
  IoStarOutline,
  IoChevronForwardOutline,
  IoSpeedometerOutline,
  IoLogoApple,
  IoLogoGooglePlaystore,
  IoLogoWindows,
  IoMenuOutline,
  IoCloseOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const PodcastAILanding = () => {
  // Language state with default set to English
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Translations for English, French, and Arabic
  const translations = {
    en: {
      appName: "Aimphony",
      tagline: "Your Intelligent Podcast Companion",
      navLinks: {
        features: "Features",
        discover: "Discover",
        categories: "Categories",
        testimonials: "Testimonials",
        download: "Download",
      },
      hero: {
        beta: "BETA",
        comingSoon: "Coming Soon",
      },
      featuresSection: {
        title: "Why Choose Aimphony?",
        subtitle:
          "Experience podcast listening like never before with our innovative features",
      },
      podcastTabs: {
        trending: "Trending",
        popular: "Popular",
        new: "New Releases",
      },
      podcastsSection: {
        title: "Discover Amazing Podcasts",
        subtitle:
          "Browse our extensive library of high-quality podcasts across all genres",
      },
      categoriesSection: {
        title: "Browse by Category",
        subtitle: "Find podcasts organized by topics you care about",
      },
      testimonialsSection: {
        title: "What Our Users Say",
        subtitle: "Join thousands of satisfied podcast enthusiasts",
      },
      downloadSection: {
        title: "Download Aimphony Today",
        text: "Join our community of podcast lovers and discover your next favorite show. Available on all major platforms.",
        note: "Free download. Premium features available with subscription.",
      },
      cta: {
        learnMore: "Learn More",
        browseAll: "Browse All Podcasts",
      },
    },
    fr: {
      appName: "Aimphony",
      tagline: "Votre compagnon intelligent de podcasts",
      navLinks: {
        features: "Fonctionnalités",
        discover: "Découvrir",
        categories: "Catégories",
        testimonials: "Témoignages",
        download: "Télécharger",
      },
      hero: {
        beta: "BÊTA",
        comingSoon: "Bientôt Disponible",
      },
      featuresSection: {
        title: "Pourquoi choisir Aimphony ?",
        subtitle:
          "Découvrez l'écoute de podcasts comme jamais auparavant avec nos fonctionnalités innovantes",
      },
      podcastTabs: {
        trending: "Tendance",
        popular: "Populaires",
        new: "Nouvelles Sorties",
      },
      podcastsSection: {
        title: "Découvrez des Podcasts Incroyables",
        subtitle:
          "Parcourez notre vaste bibliothèque de podcasts de haute qualité dans tous les genres",
      },
      categoriesSection: {
        title: "Parcourir par Catégorie",
        subtitle:
          "Trouvez des podcasts organisés par les sujets qui vous intéressent",
      },
      testimonialsSection: {
        title: "Ce que disent nos utilisateurs",
        subtitle: "Rejoignez des milliers d'amateurs de podcasts satisfaits",
      },
      downloadSection: {
        title: "Téléchargez Aimphony Aujourd'hui",
        text: "Rejoignez notre communauté d'amateurs de podcasts et découvrez votre prochain podcast préféré. Disponible sur toutes les principales plateformes.",
        note: "Téléchargement gratuit. Fonctionnalités premium disponibles via abonnement.",
      },
      cta: {
        learnMore: "En savoir plus",
        browseAll: "Parcourir tous les Podcasts",
      },
    },
    ar: {
      appName: "Aimphony",
      tagline: "رفيق البودكاست الذكي الخاص بك",
      navLinks: {
        features: "الميزات",
        discover: "اكتشف",
        categories: "الفئات",
        testimonials: "الشهادات",
        download: "تحميل",
      },
      hero: {
        beta: "بيتا",
        comingSoon: "قريباً",
      },
      featuresSection: {
        title: "لماذا تختار Aimphony؟",
        subtitle:
          "استمتع بتجربة استماع للبودكاست لم تعهدها من قبل مع ميزاتنا المبتكرة",
      },
      podcastTabs: {
        trending: "رائج",
        popular: "شعبي",
        new: "إصدارات جديدة",
      },
      podcastsSection: {
        title: "اكتشف بودكاست رائع",
        subtitle:
          "تصفح مكتبتنا الواسعة من البودكاست عالية الجودة عبر جميع الأنواع",
      },
      categoriesSection: {
        title: "تصفح حسب الفئة",
        subtitle: "اعثر على البودكاست المصنفة حسب المواضيع التي تهمك",
      },
      testimonialsSection: {
        title: "ما يقوله مستخدمونا",
        subtitle: "انضم إلى الآلاف من عشاق البودكاست الراضين",
      },
      downloadSection: {
        title: "حمل Aimphony اليوم",
        text: "انضم إلى مجتمعنا من عشاق البودكاست واكتشف برنامجك المفضل التالي. متاح على جميع المنصات الرئيسية.",
        note: "تحميل مجاني. الميزات المميزة متوفرة مع الاشتراك.",
      },
      cta: {
        learnMore: "اعرف المزيد",
        browseAll: "تصفح جميع البودكاست",
      },
    },
  };

  // State for modal visibility (Coming Soon)
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Updated download link handler to show a modal
  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  // Other state management
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState("trending");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleSections, setVisibleSections] = useState({});
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [githubStars, setGithubStars] = useState(10);

  // Refs for animations and scroll detection
  const progressBarRef = useRef(null);
  const logoRef = useRef(null);
  const sectionRefs = {
    features: useRef(null),
    podcasts: useRef(null),
    categories: useRef(null),
    testimonials: useRef(null),
    download: useRef(null),
  };

  // Sample data with updated online images
  const trendingPodcasts = [
    {
      id: 1,
      title: "Tech Today",
      creator: "Alex Green",
      image: "https://picsum.photos/seed/tech/300/300",
      rating: 4.8,
      duration: "45 min",
      categories: ["Technology", "News"],
    },
    {
      id: 2,
      title: "Crime Stories",
      creator: "Sarah Johnson",
      image: "https://picsum.photos/seed/crime/300/300",
      rating: 4.9,
      duration: "60 min",
      categories: ["Crime", "Documentary"],
    },
    {
      id: 3,
      title: "Daily News",
      creator: "Mike Anderson",
      image: "https://picsum.photos/seed/news/300/300",
      rating: 4.5,
      duration: "30 min",
      categories: ["News", "Politics"],
    },
    {
      id: 4,
      title: "Science Weekly",
      creator: "Emily Parker",
      image: "https://picsum.photos/seed/science/300/300",
      rating: 4.7,
      duration: "50 min",
      categories: ["Science", "Education"],
    },
    {
      id: 5,
      title: "Comedy Hour",
      creator: "Dave Wilson",
      image: "https://picsum.photos/seed/comedy/300/300",
      rating: 4.6,
      duration: "55 min",
      categories: ["Comedy", "Entertainment"],
    },
    {
      id: 6,
      title: "Healthy Living",
      creator: "Lisa Brown",
      image: "https://picsum.photos/seed/health/300/300",
      rating: 4.4,
      duration: "40 min",
      categories: ["Health", "Lifestyle"],
    },
  ];

  const categories = [
    { id: 1, name: "Technology", icon: "🖥️", color: "#2196F3" },
    { id: 2, name: "Crime", icon: "🔍", color: "#673AB7" },
    { id: 3, name: "Comedy", icon: "😂", color: "#FF9800" },
    { id: 4, name: "News", icon: "📰", color: "#4CAF50" },
    { id: 5, name: "Science", icon: "🔬", color: "#E91E63" },
    { id: 6, name: "Health", icon: "❤️", color: "#009688" },
    { id: 7, name: "Business", icon: "💼", color: "#795548" },
    { id: 8, name: "Sports", icon: "⚽", color: "#FF5722" },
  ];

  const features = [
    {
      icon: <IoHeadsetOutline />,
      title: "Discover Podcasts",
      description: "Explore thousands of podcasts across every genre and topic",
    },
    {
      icon: <IoDownloadOutline />,
      title: "Listen Offline",
      description: "Download episodes to enjoy without using data",
    },
    {
      icon: <IoHeartOutline />,
      title: "Follow Favorites",
      description:
        "Keep track of shows you love and get notified about new episodes",
    },
    {
      icon: <IoPersonOutline />,
      title: "Personalized For You",
      description: "Get recommendations based on your listening history",
    },
    {
      icon: <IoSpeedometerOutline />,
      title: "Playback Control",
      description:
        "Adjust speed, skip silences, and boost voices for the perfect listening experience",
    },
  ];

  // Updated testimonials with online avatar images
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Podcast Enthusiast",
      content:
        "Aimphony has completely transformed how I discover and enjoy podcasts. The recommendations are spot on!",
    },
    {
      id: 2,
      name: "Jessica Williams",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Daily Commuter",
      content:
        "I listen during my commute every day. The offline mode is a lifesaver in areas with poor reception.",
    },
    {
      id: 3,
      name: "Robert Chen",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      role: "Content Creator",
      content:
        "As a podcast creator, I love the analytics and engagement features. It helps me understand my audience better.",
    },
  ];

  // Define theme variables (light mode)
  const theme = {
    background: "#FFFFFF",
    text: "#333333",
    primary: "#2196F3",
    cardBg: "#FFFFFF",
    navBg: "#FFFFFF",
    borderColor: "#F0F0F0",
    progressBg: "#E0E0E0",
    progressBar: "#2196F3",
  };

  // Modal styles for the Coming Soon overlay
  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      maxWidth: "400px",
      width: "80%",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    closeButton: {
      marginTop: "20px",
      padding: "8px 16px",
      backgroundColor: theme.primary,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  // Additional style for mobile menu buttons inside slide menu
  const mobileMenuButtonsStyle = {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  // Initialize animations, simulated loading, and responsive behaviors
  useEffect(() => {
    simulateLoading();

    if (logoRef.current) {
      logoRef.current.classList.add("animate-logo");
    }

    setTimeout(() => {
      setShowContent(true);
    }, 2000);

    const featureInterval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections((prev) => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearInterval(featureInterval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const simulateLoading = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 0.1;
      if (progress > 1) {
        progress = 1;
        clearInterval(interval);
        setLoadingComplete(true);
      }
      setLoadingProgress(progress);
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    }, 300);
  };

  const getGridColumns = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  };

  const getResponsiveCardCount = () => {
    if (windowWidth < 640) return 2;
    if (windowWidth < 1024) return 4;
    return 6;
  };

  // Dynamic styles based on light mode and responsive variables
  const styles = {
    appContainer: {
      fontFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
      backgroundColor: theme.background,
      color: theme.text,
      overflowX: "hidden",
    },
    sectionContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    // Navigation
    navbar: {
      position: "sticky",
      top: 0,
      backgroundColor: theme.navBg,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      zIndex: 1000,
      padding: "12px 0",
      position: "relative",
    },
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    navLogo: {
      display: "flex",
      alignItems: "center",
    },
    logoCircleSmall: {
      width: "32px",
      height: "32px",
      backgroundColor: "#F5F9FF",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "8px",
    },
    navLogoText: {
      fontSize: "18px",
      fontWeight: 700,
      color: theme.primary,
    },
    // Desktop navigation links and buttons (only visible on wider screens)
    navLinks: {
      display: windowWidth >= 768 ? "flex" : "none",
    },
    navLink: {
      color: theme.text,
      textDecoration: "none",
      margin: "0 16px",
      fontSize: "14px",
      fontWeight: 500,
      transition: "color 0.3s ease",
    },
    navButtons: {
      display: windowWidth >= 768 ? "flex" : "none",
      alignItems: "center",
    },
    downloadButton: {
      backgroundColor: theme.primary,
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      textDecoration: "none",
      marginRight: "16px",
      display: "flex",
      alignItems: "center",
    },
    languageSelector: {
      marginRight: "16px",
      padding: "4px 8px",
      borderRadius: "4px",
      border: `1px solid ${theme.borderColor}`,
      backgroundColor: theme.cardBg,
      color: theme.text,
    },
    themeToggle: {
      cursor: "not-allowed",
      display: "flex",
      alignItems: "center",
      opacity: 0.5,
      fontSize: "12px",
    },
    mobileMenuIcon: {
      display: windowWidth < 768 ? "flex" : "none",
      cursor: "pointer",
    },
    mobileMenu: {
      position: "absolute",
      top: "60px",
      right: "24px",
      backgroundColor: theme.cardBg,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: "10px 20px",
      borderRadius: "4px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
    },
    mobileNavLink: {
      display: "block",
      padding: "8px 0",
      color: theme.text,
      textDecoration: "none",
      fontSize: "16px",
    },
    // Hero section
    heroSection: {
      background: "linear-gradient(180deg, #F5F9FF 0%, #FFFFFF 100%)",
      padding: "60px 0",
      position: "relative",
    },
    heroSplash: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 24px",
      position: "relative",
    },
    betaBadge: {
      position: "absolute",
      top: 20,
      right: 20,
      backgroundColor: "red",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      zIndex: 2000,
    },
    titleBadge: {
      marginLeft: "8px",
      backgroundColor: "red",
      color: "white",
      fontSize: "12px",
      padding: "2px 6px",
      borderRadius: "4px",
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: 0,
      transform: "scale(0.8)",
    },
    logoCircleLarge: {
      width: "100px",
      height: "100px",
      backgroundColor: "#F5F9FF",
      border: "2px solid #E3F2FD",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      boxShadow: "0 10px 25px rgba(33, 150, 243, 0.15)",
    },
    appName: {
      fontSize: "42px",
      fontWeight: 800,
      color: theme.primary,
      margin: "0",
    },
    tagline: {
      fontSize: "18px",
      color: theme.text,
      margin: "8px 0 0 0",
    },
    featureShowcase: {
      marginTop: "50px",
      height: "200px",
      width: "100%",
      maxWidth: "600px",
      position: "relative",
    },
    featureItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      left: 0,
      top: 0,
      transition: "opacity 0.5s ease, transform 0.5s ease",
    },
    featureIcon: {
      marginBottom: "16px",
    },
    featureTitle: {
      fontSize: "24px",
      fontWeight: 700,
      color: theme.text,
      margin: "0 0 8px 0",
    },
    featureDescription: {
      fontSize: "16px",
      color: theme.text,
      margin: 0,
      maxWidth: "500px",
    },
    featureIndicators: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    indicator: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      margin: "0 5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    ctaButtons: {
      display: "flex",
      justifyContent: "center",
      marginTop: "60px",
      flexWrap: "wrap",
    },
    downloadBtn: {
      backgroundColor: theme.primary,
      color: "white",
      textDecoration: "none",
      padding: "14px 32px",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      boxShadow: "0 5px 15px rgba(33, 150, 243, 0.2)",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      margin: "0 10px 10px 0",
    },
    learnMoreBtn: {
      backgroundColor: "rgba(33, 150, 243, 0.05)",
      color: theme.primary,
      textDecoration: "none",
      padding: "14px 32px",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: 600,
      transition: "background-color 0.3s ease",
      margin: "0 0 10px 10px",
    },
    progressContainer: {
      width: "80%",
      maxWidth: "300px",
      marginTop: "30px",
      textAlign: "center",
    },
    progressBarContainer: {
      height: "4px",
      backgroundColor: theme.progressBg,
      borderRadius: "2px",
      overflow: "hidden",
      marginBottom: "8px",
    },
    progressBar: {
      height: "100%",
      backgroundColor: theme.progressBar,
      width: "0%",
      borderRadius: "2px",
      transition: "width 0.3s ease",
    },
    progressText: {
      fontSize: "14px",
      color: theme.text,
    },
    // Feature section styles
    featureSection: {
      padding: "80px 0",
      backgroundColor: theme.background,
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: 700,
      color: theme.primary,
      textAlign: "center",
      margin: "0 0 12px 0",
    },
    sectionSubtitle: {
      fontSize: "16px",
      color: theme.text,
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto 40px",
    },
    featureGrid: {
      display: "grid",
      gap: "24px",
    },
    featureCard: {
      backgroundColor: theme.cardBg,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      border: `1px solid ${theme.borderColor}`,
    },
    featureCardIcon: {
      width: "60px",
      height: "60px",
      backgroundColor: "#F5F9FF",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    },
    featureCardTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: theme.text,
      margin: "0 0 12px 0",
    },
    featureCardDescription: {
      fontSize: "14px",
      color: theme.text,
      lineHeight: 1.5,
      margin: 0,
    },
    // Podcasts section
    podcastsSection: {
      padding: "80px 0",
      backgroundColor: windowWidth < 768 ? theme.background : "#F5F9FF",
    },
    podcastTabs: {
      display: "flex",
      justifyContent: "center",
      borderBottom: "1px solid #E0E0E0",
      marginBottom: "24px",
    },
    podcastTab: {
      padding: "12px 24px",
      cursor: "pointer",
      transition: "color 0.3s ease, border-color 0.3s ease",
      fontSize: "16px",
      fontWeight: 500,
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "32px",
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "500px",
      height: "50px",
      backgroundColor: theme.cardBg,
      borderRadius: "25px",
      padding: "0 20px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    },
    searchInput: {
      backgroundColor: "transparent",
      border: "none",
      color: theme.text,
      fontSize: "16px",
      width: "100%",
      padding: "0 12px",
      outline: "none",
    },
    podcastGrid: {
      display: "grid",
      gap: "24px",
    },
    podcastCard: {
      backgroundColor: theme.cardBg,
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease",
    },
    podcastImageContainer: {
      position: "relative",
      width: "100%",
      aspectRatio: "1",
      overflow: "hidden",
    },
    podcastImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    podcastPlayOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    playButton: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: theme.cardBg,
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.primary,
      cursor: "pointer",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    podcastMetaOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "8px 12px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "space-between",
    },
    podcastMeta: {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontSize: "12px",
    },
    podcastInfo: {
      padding: "16px",
    },
    podcastTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: theme.text,
      margin: "0 0 4px 0",
    },
    podcastCreator: {
      fontSize: "14px",
      color: theme.text,
      margin: "0 0 8px 0",
    },
    podcastCategories: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
    },
    podcastCategory: {
      fontSize: "12px",
      backgroundColor: "#F0F7FF",
      color: theme.primary,
      padding: "4px 8px",
      borderRadius: "4px",
      fontWeight: 500,
    },
    browseMoreContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
    },
    browseMoreButton: {
      backgroundColor: "transparent",
      border: `2px solid ${theme.primary}`,
      color: theme.primary,
      padding: "12px 24px",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    // Categories section
    categoriesSection: {
      padding: "80px 0",
      backgroundColor: theme.background,
    },
    categoriesGrid: {
      display: "grid",
      gap: "20px",
    },
    categoryCard: {
      padding: "24px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
    },
    categoryIcon: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    },
    categoryEmoji: {
      fontSize: "28px",
    },
    categoryName: {
      fontSize: "16px",
      fontWeight: 600,
      color: theme.text,
      margin: 0,
      textAlign: "center",
    },
    // Testimonials section
    testimonialsSection: {
      padding: "80px 0",
      backgroundColor: windowWidth < 768 ? theme.background : "#F5F9FF",
    },
    testimonialsGrid: {
      display: "grid",
      gap: "24px",
    },
    testimonialCard: {
      backgroundColor: theme.cardBg,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    },
    testimonialContent: {
      marginBottom: "24px",
    },
    testimonialText: {
      fontSize: "16px",
      lineHeight: 1.6,
      fontStyle: "italic",
      color: theme.text,
    },
    testimonialUser: {
      display: "flex",
      alignItems: "center",
    },
    testimonialAvatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      marginRight: "12px",
    },
    testimonialUserInfo: {
      flex: 1,
    },
    testimonialName: {
      fontSize: "16px",
      fontWeight: 600,
      color: theme.text,
      margin: 0,
    },
    testimonialRole: {
      fontSize: "14px",
      color: theme.text,
      margin: "4px 0 0 0",
    },
    // Download section
    downloadSection: {
      padding: "80px 0",
      backgroundColor: theme.background,
    },
    downloadCard: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px",
      backgroundColor: theme.cardBg,
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 5px 20px rgba(33, 150, 243, 0.1)",
    },
    downloadTitle: {
      fontSize: "32px",
      fontWeight: 700,
      color: theme.primary,
      margin: "0 0 16px 0",
    },
    downloadText: {
      fontSize: "16px",
      color: theme.text,
      lineHeight: 1.6,
      maxWidth: "600px",
      margin: "0 auto 32px",
    },
    downloadOptions: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "24px",
    },
    downloadOption: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.cardBg,
      padding: "16px 24px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textDecoration: "none",
      color: theme.text,
    },
    downloadOptionText: {
      marginLeft: "12px",
      textAlign: "left",
    },
    downloadOptionSubtext: {
      display: "block",
      fontSize: "12px",
      color: theme.text,
    },
    downloadOptionName: {
      display: "block",
      fontSize: "16px",
      fontWeight: 600,
      color: theme.text,
    },
    downloadNote: {
      fontSize: "14px",
      color: theme.text,
      margin: "8px 0 0 0",
    },
    // Footer
    footer: {
      backgroundColor: "#F5F9FF",
      padding: "60px 0 30px",
      borderTop: "1px solid #E0E0E0",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    footerGrid: {
      display: "grid",
      gap: "40px",
    },
    footerColumn: {},
    footerLogo: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    },
    footerLogoText: {
      fontSize: "18px",
      fontWeight: 700,
      color: theme.primary,
    },
    footerTagline: {
      fontSize: "14px",
      color: theme.text,
      margin: "0 0 16px 0",
    },
    footerSocial: {
      display: "flex",
      gap: "16px",
    },
    socialLink: {
      color: theme.text,
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
    footerHeading: {
      fontSize: "16px",
      fontWeight: 600,
      color: theme.text,
      marginBottom: "16px",
    },
    footerLinks: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    footerLink: {
      color: theme.text,
      textDecoration: "none",
      fontSize: "14px",
      lineHeight: 2,
      transition: "color 0.3s ease",
    },
    footerBottom: {
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "1px solid #E0E0E0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    copyright: {
      fontSize: "14px",
      color: theme.text,
      margin: "8px 0",
    },
    footerBottomLinks: {
      display: "flex",
      gap: "16px",
      margin: "8px 0",
    },
    footerBottomLink: {
      color: theme.text,
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.appContainer}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          {/* Always show the app name */}
          <div style={styles.navLogo}>
            <div style={styles.logoCircleSmall}>
              <IoMicOutline color={theme.primary} />
            </div>
            <span style={styles.navLogoText}>
              {translations[language].appName}
            </span>
          </div>
          {/* Desktop Navigation Links & Buttons */}
          {windowWidth >= 768 && (
            <>
              <div style={styles.navLinks} className="navLinks">
                <a href="#features" style={styles.navLink}>
                  {translations[language].navLinks.features}
                </a>
                <a href="#podcasts" style={styles.navLink}>
                  {translations[language].navLinks.discover}
                </a>
                <a href="#categories" style={styles.navLink}>
                  {translations[language].navLinks.categories}
                </a>
                <a href="#testimonials" style={styles.navLink}>
                  {translations[language].navLinks.testimonials}
                </a>
              </div>
              <div style={styles.navButtons}>
                <a
                  href="#download"
                  style={styles.downloadButton}
                  onClick={handleDownloadClick}
                >
                  <IoLogoApple size={16} style={{ marginRight: 4 }} />
                  <IoLogoGooglePlaystore size={16} style={{ marginRight: 4 }} />
                  <IoLogoWindows size={16} />
                </a>
                <a
                  href="https://github.com/Mujanati13/Aimphony"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.text,
                    textDecoration: "none",
                    fontSize: "14px",
                    marginLeft: "12px",
                    marginRight: "12px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: `1px solid ${theme.borderColor}`,
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <IoLogoGithub size={16} style={{ marginRight: "6px" }} />
                  <span>Star</span>
                  <span
                    style={{
                      marginLeft: "6px",
                      backgroundColor: "#f0f0f0",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {githubStars.toLocaleString()}
                  </span>
                </a>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  style={styles.languageSelector}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
                <div style={styles.themeToggle}>
                  <IoMoonOutline size={24} color={theme.primary} />
                  <span style={{ marginLeft: 4 }}>
                    {translations[language].hero.comingSoon}
                  </span>
                </div>
              </div>
            </>
          )}
          {/* Mobile Navigation Toggle */}
          {windowWidth < 768 && (
            <div
              style={styles.mobileMenuIcon}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <IoCloseOutline size={24} color={theme.primary} />
              ) : (
                <IoMenuOutline size={24} color={theme.primary} />
              )}
            </div>
          )}
        </div>
        {/* Mobile Slide Menu */}
        {isMobileMenuOpen && windowWidth < 768 && (
          <div style={styles.mobileMenu}>
            <a
              href="#features"
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].navLinks.features}
            </a>
            <a
              href="#podcasts"
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].navLinks.discover}
            </a>
            <a
              href="#categories"
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].navLinks.categories}
            </a>
            <a
              href="#testimonials"
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].navLinks.testimonials}
            </a>
            <a
              href="#download"
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].navLinks.download}
            </a>
            <div style={mobileMenuButtonsStyle}>
              <a
                href="#download"
                style={styles.downloadButton}
                onClick={handleDownloadClick}
              >
                <IoLogoApple size={16} style={{ marginRight: 4 }} />
                <IoLogoGooglePlaystore size={16} style={{ marginRight: 4 }} />
                <IoLogoWindows size={16} />
              </a>
              <select
                value={language}
                onChange={handleLanguageChange}
                style={styles.languageSelector}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
              <div style={styles.themeToggle}>
                <IoMoonOutline size={24} color={theme.primary} />
                <span style={{ marginLeft: 4 }}>
                  {translations[language].hero.comingSoon}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroSplash}>
          {!loadingComplete && <div style={styles.betaBadge}>BETA</div>}
          <div style={styles.logoContainer} ref={logoRef}>
            <div style={styles.logoCircleLarge}>
              <IoMicOutline size={50} color={theme.primary} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={styles.appName}>{translations[language].appName}</h1>
              <span style={styles.titleBadge}>
                {translations[language].hero.beta}
              </span>
            </div>
            <p style={styles.tagline}>{translations[language].tagline}</p>
          </div>
          {showContent && (
            <div style={styles.featureShowcase}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.featureItem,
                    opacity: currentFeatureIndex === index ? 1 : 0,
                    transform:
                      currentFeatureIndex === index
                        ? "translateY(0)"
                        : "translateY(20px)",
                  }}
                >
                  <div style={styles.featureIcon}>
                    {React.cloneElement(feature.icon, {
                      size: 40,
                      color: theme.primary,
                    })}
                  </div>
                  <h2 style={styles.featureTitle}>{feature.title}</h2>
                  <p style={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
              <div style={styles.featureIndicators}>
                {features.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.indicator,
                      backgroundColor:
                        currentFeatureIndex === index
                          ? theme.primary
                          : "#DDDDDD",
                    }}
                    onClick={() => setCurrentFeatureIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
          )}
          {!loadingComplete && (
            <div style={styles.progressContainer}>
              <div style={styles.progressBarContainer}>
                <div style={styles.progressBar} ref={progressBarRef}></div>
              </div>
              <div style={styles.progressText}>
                Loading... {Math.floor(loadingProgress * 100)}%
              </div>
            </div>
          )}
          {showContent && (
            <div style={styles.ctaButtons}>
              <a
                href="#download"
                style={styles.downloadBtn}
                onClick={handleDownloadClick}
              >
                <IoLogoApple size={20} style={{ marginRight: 8 }} />
                <IoLogoGooglePlaystore size={20} style={{ marginRight: 8 }} />
                <IoLogoWindows size={20} />
              </a>
              <a href="#features" style={styles.learnMoreBtn}>
                {translations[language].cta.learnMore}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={sectionRefs.features}
        style={styles.featureSection}
        className={visibleSections.features ? "animated fadeInUp" : ""}
      >
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>
            {translations[language].featuresSection.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {translations[language].featuresSection.subtitle}
          </p>
          <div
            style={{
              ...styles.featureGrid,
              gridTemplateColumns: `repeat(${
                getGridColumns() < 3 ? getGridColumns() : 3
              }, 1fr)`,
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                className={`animated fadeIn delay-${index * 100}`}
              >
                <div style={styles.featureCardIcon}>
                  {React.cloneElement(feature.icon, {
                    size: 30,
                    color: theme.primary,
                  })}
                </div>
                <h3 style={styles.featureCardTitle}>{feature.title}</h3>
                <p style={styles.featureCardDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Browser Section */}
      <section
        id="podcasts"
        ref={sectionRefs.podcasts}
        style={styles.podcastsSection}
        className={visibleSections.podcasts ? "animated fadeInUp" : ""}
      >
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>
            {translations[language].podcastsSection.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {translations[language].podcastsSection.subtitle}
          </p>
          <div style={styles.podcastTabs}>
            <div
              style={{
                ...styles.podcastTab,
                borderBottom:
                  activeTab === "trending"
                    ? `2px solid ${theme.primary}`
                    : "none",
                color: activeTab === "trending" ? theme.primary : theme.text,
              }}
              onClick={() => setActiveTab("trending")}
            >
              {translations[language].podcastTabs.trending}
            </div>
            <div
              style={{
                ...styles.podcastTab,
                borderBottom:
                  activeTab === "popular"
                    ? `2px solid ${theme.primary}`
                    : "none",
                color: activeTab === "popular" ? theme.primary : theme.text,
              }}
              onClick={() => setActiveTab("popular")}
            >
              {translations[language].podcastTabs.popular}
            </div>
            <div
              style={{
                ...styles.podcastTab,
                borderBottom:
                  activeTab === "new" ? `2px solid ${theme.primary}` : "none",
                color: activeTab === "new" ? theme.primary : theme.text,
              }}
              onClick={() => setActiveTab("new")}
            >
              {translations[language].podcastTabs.new}
            </div>
          </div>
          <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
              <IoSearchOutline size={20} color={theme.text} />
              <input
                type="text"
                placeholder="Search for podcasts..."
                style={styles.searchInput}
              />
            </div>
          </div>
          <div
            style={{
              ...styles.podcastGrid,
              gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
            }}
          >
            {trendingPodcasts
              .slice(0, getResponsiveCardCount())
              .map((podcast, index) => (
                <div
                  key={podcast.id}
                  style={styles.podcastCard}
                  className={`animated fadeIn delay-${index * 100}`}
                >
                  <div style={styles.podcastImageContainer}>
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      style={styles.podcastImage}
                    />
                    <div style={styles.podcastPlayOverlay}>
                      <button style={styles.playButton}>
                        <IoPlayOutline size={24} />
                      </button>
                    </div>
                    <div style={styles.podcastMetaOverlay}>
                      <div style={styles.podcastMeta}>
                        <IoTimeOutline
                          size={14}
                          style={{ marginRight: "4px" }}
                        />
                        <span>{podcast.duration}</span>
                      </div>
                      <div style={styles.podcastMeta}>
                        <IoStarOutline
                          size={14}
                          style={{ marginRight: "4px" }}
                        />
                        <span>{podcast.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div style={styles.podcastInfo}>
                    <h3 style={styles.podcastTitle}>{podcast.title}</h3>
                    <p style={styles.podcastCreator}>{podcast.creator}</p>
                    <div style={styles.podcastCategories}>
                      {podcast.categories.map((cat, idx) => (
                        <span key={idx} style={styles.podcastCategory}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div style={styles.browseMoreContainer}>
            <button style={styles.browseMoreButton}>
              {translations[language].cta.browseAll}{" "}
              <IoChevronForwardOutline style={{ marginLeft: "4px" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        ref={sectionRefs.categories}
        style={styles.categoriesSection}
        className={visibleSections.categories ? "animated fadeInUp" : ""}
      >
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>
            {translations[language].categoriesSection.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {translations[language].categoriesSection.subtitle}
          </p>
          <div
            style={{
              ...styles.categoriesGrid,
              gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                style={{
                  ...styles.categoryCard,
                  backgroundColor: `${category.color}10`,
                }}
                className={`animated fadeIn delay-${index * 100}`}
              >
                <div
                  style={{
                    ...styles.categoryIcon,
                    backgroundColor: `${category.color}20`,
                  }}
                >
                  <span style={styles.categoryEmoji}>{category.icon}</span>
                </div>
                <h3 style={styles.categoryName}>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        style={styles.testimonialsSection}
        className={visibleSections.testimonials ? "animated fadeInUp" : ""}
      >
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>
            {translations[language].testimonialsSection.title}
          </h2>
          <p style={styles.sectionSubtitle}>
            {translations[language].testimonialsSection.subtitle}
          </p>
          <div
            style={{
              ...styles.testimonialsGrid,
              gridTemplateColumns: `repeat(${windowWidth < 768 ? 1 : 3}, 1fr)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={styles.testimonialCard}
                className={`animated fadeIn delay-${index * 200}`}
              >
                <div style={styles.testimonialContent}>
                  <p style={styles.testimonialText}>"{testimonial.content}"</p>
                </div>
                <div style={styles.testimonialUser}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={styles.testimonialAvatar}
                  />
                  <div style={styles.testimonialUserInfo}>
                    <h4 style={styles.testimonialName}>{testimonial.name}</h4>
                    <p style={styles.testimonialRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        ref={sectionRefs.download}
        style={styles.downloadSection}
        className={visibleSections.download ? "animated fadeInUp" : ""}
      >
        <div style={styles.sectionContainer}>
          <div style={styles.downloadCard}>
            <h2 style={styles.downloadTitle}>
              {translations[language].downloadSection.title}
            </h2>
            <p style={styles.downloadText}>
              {translations[language].downloadSection.text}
            </p>
            <div style={styles.downloadOptions}>
              <a
                href="#"
                style={styles.downloadOption}
                onClick={handleDownloadClick}
              >
                <IoLogoApple size={24} />
                <div style={styles.downloadOptionText}>
                  <span style={styles.downloadOptionSubtext}>
                    Download on the
                  </span>
                  <span style={styles.downloadOptionName}>App Store</span>
                </div>
              </a>
              <a
                href="#"
                style={styles.downloadOption}
                onClick={handleDownloadClick}
              >
                <IoLogoGooglePlaystore size={24} />
                <div style={styles.downloadOptionText}>
                  <span style={styles.downloadOptionSubtext}>Get it on</span>
                  <span style={styles.downloadOptionName}>Google Play</span>
                </div>
              </a>
              <a
                href="#"
                style={styles.downloadOption}
                onClick={handleDownloadClick}
              >
                <IoLogoWindows size={24} />
                <div style={styles.downloadOptionText}>
                  <span style={styles.downloadOptionSubtext}>Download for</span>
                  <span style={styles.downloadOptionName}>Windows</span>
                </div>
              </a>
            </div>
            <p style={styles.downloadNote}>
              {translations[language].downloadSection.note}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div
            style={{
              ...styles.footerGrid,
              gridTemplateColumns:
                windowWidth < 768
                  ? "1fr"
                  : windowWidth < 1024
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
            }}
          >
            <div style={styles.footerColumn}>
              <div style={styles.footerLogo}>
                <div style={styles.logoCircleSmall}>
                  <IoMicOutline size={20} color={theme.primary} />
                </div>
                <span style={styles.footerLogoText}>
                  {translations[language].appName}
                </span>
              </div>
              <p style={styles.footerTagline}>
                {translations[language].tagline}
              </p>
              <div style={styles.footerSocial}>
                <a href="#" style={styles.socialLink}>
                  Facebook
                </a>
                <a href="#" style={styles.socialLink}>
                  Twitter
                </a>
                <a href="#" style={styles.socialLink}>
                  Instagram
                </a>
              </div>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Explore</h3>
              <ul style={styles.footerLinks}>
                <li>
                  <a href="#podcasts" style={styles.footerLink}>
                    Browse Podcasts
                  </a>
                </li>
                <li>
                  <a href="#categories" style={styles.footerLink}>
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Trending
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Featured
                  </a>
                </li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Resources</h3>
              <ul style={styles.footerLinks}>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    For Podcasters
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    API
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerHeading}>Company</h3>
              <ul style={styles.footerLinks}>
                <li>
                  <a href="#" style={styles.footerLink}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" style={styles.footerLink}>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.copyright}>
              Created by <a href="https://x.com/Mujanati13">Mohammed Janati</a>.
            </p>
            <div style={styles.footerBottomLinks}>
              <a href="#" style={styles.footerBottomLink}>
                Privacy
              </a>
              <a href="#" style={styles.footerBottomLink}>
                Terms
              </a>
              <a href="#" style={styles.footerBottomLink}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div
          style={modalStyles.overlay}
          onClick={() => setShowComingSoon(false)}
        >
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{translations[language].hero.comingSoon}</h2>
            <p>
              This download feature is under development. Please check back
              soon!
            </p>
            <button
              style={modalStyles.closeButton}
              onClick={() => setShowComingSoon(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation Keyframes and Responsive Media Queries */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-logo {
            opacity: 1 !important;
            transform: scale(1) !important;
            transition: opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .animated {
            animation-duration: 1s;
            animation-fill-mode: both;
          }
          
          .fadeIn {
            animation-name: fadeIn;
          }
          
          .fadeInUp {
            animation-name: fadeInUp;
          }
          
          .delay-100 {
            animation-delay: 0.1s;
          }
          
          .delay-200 {
            animation-delay: 0.2s;
          }
          
          .delay-300 {
            animation-delay: 0.3s;
          }
          
          /* Hover effects for desktop */
          @media (hover: hover) {
            .navLink:hover {
              color: ${theme.primary} !important;
            }
            
            .downloadButton:hover {
              background-color: ${theme.primary} !important;
            }
            
            .downloadBtn:hover {
              background-color: ${theme.primary} !important;
              transform: translateY(-2px) !important;
            }
            
            .learnMoreBtn:hover {
              background-color: rgba(33, 150, 243, 0.1) !important;
            }
          }
          
          /* Mobile adjustments */
          @media (max-width: 768px) {
            .navLinks {
              display: none !important;
            }
            
            .downloadOptions {
              flex-direction: column !important;
            }
            
            .downloadOption {
              width: 100% !important;
              margin: 8px 0 !important;
            }
            
            .sectionContainer {
              padding: 0 16px !important;
            }
            
            .sectionTitle {
              font-size: 28px !important;
            }
            
            .sectionSubtitle {
              font-size: 14px !important;
            }
          }
          
          /* Extra adjustments for smaller phones */
          @media (max-width: 480px) {
            .appName {
              font-size: 32px !important;
            }
            .tagline {
              font-size: 16px !important;
            }
            .navLogoText {
              font-size: 16px !important;
            }
            .navLink {
              margin: 0 8px !important;
              font-size: 12px !important;
            }
            .downloadButton {
              padding: 6px 12px !important;
              font-size: 12px !important;
            }
            .languageSelector {
              padding: 2px 4px !important;
              font-size: 12px !important;
            }
            .sectionTitle {
              font-size: 26px !important;
            }
            .sectionSubtitle {
              font-size: 13px !important;
            }
            .downloadCard {
              padding: 20px !important;
            }
          }
          
          @media (max-width: 1024px) and (min-width: 769px) {
            .sectionTitle {
              font-size: 30px !important;
            }
            .sectionSubtitle {
              font-size: 15px !important;
            }
            .downloadCard {
              padding: 30px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PodcastAILanding;
