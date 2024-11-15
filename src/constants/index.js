export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Experience',
      href: '#experience',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'HooBank - Next-Gen Payment Platform',
      desc: 'HooBank redefines online transactions with a modern UI/UX experience that merges style and functionality, making digital payments effortless and intuitive. With organized sections and sleek navigation, HooBank delivers an engaging and reliable payment journey.',
      subdesc:
        'Developed using React.js and Tailwind CSS, HooBank is built for seamless performance, featuring vibrant gradients, intuitive user flow, and lightning-fast load times to enhance the transaction process. This next-gen payment platform sets a high bar for usability and design, making payments more accessible and visually compelling.',
      href: 'https://aquamarine-raccoon-713980.hostingersite.com/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'XORA - Modern UI/UX SaaS Platform',
      desc: 'XORA is a next-generation Software-as-a-Service platform setting a new standard in user experience and design. Featuring an elegant layout and flawless interactivity, XORA is crafted to captivate and engage users across every section.',
      subdesc:
        'Built with the power of React.js and Tailwind CSS, InnovaFlow combines fluid animations, beautiful gradients, and seamless navigation for a streamlined experience. Optimized for performance and responsiveness, this application ensures fast load times and a smooth, user-centric journey.',
      href: 'https://sass-landingpage-by-saikumar.com/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Headstarter',
      pos: 'Software Engineer',
      duration: 'Jul 2024 - Sep 2024',
      title: "Built five AI projects, including a Discord chatbot that grew the community to 1,000+ users and launched a project with 1,000+ sign-ups. Created an engaging portfolio with 3D elements, boosting user retention.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Fourstep Solutions',
      pos: 'Web Developer',
      duration: 'Feb 2023 - Jun 2023',
      title: "Specialized in responsive design using Figma for collaborative, user-centered solutions optimized for desktop and mobile experiences.",
      icon: '/assets/framer.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'ENut Technologies',
      pos: 'Junior Web Developer',
      duration: 'Jun 2022 - Jan 2023',
      title: "Built complex full-stack applications from scratch using Angular, React, MongoDB, and MySQL, delivering user-focused, high-quality solutions.",
      icon: '/assets/framer.svg',
      animation: 'salute',
    },
  ];