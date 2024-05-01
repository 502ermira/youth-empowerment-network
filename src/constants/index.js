import { peace, youth, mentorship, scholarship, mentalhealth, stem, internship, internship_offer, mentor, scholarship_icon, scholarship_offer, mentorship_offer, mentalsupport, support, bootcamp, webinar, hostwebinar, host, partner1, partner2, partner3, partner4, partner5, diversity,bghome, bghome2, bghome4, bghome5, bghome6  } from "../assets";

export const navLinks = [
  { text: 'Home', path: '#home' },
  { text: 'Missions', path: '#mission' },
  { text: 'Programs', path: '#programs' },
  { text: 'Events', path: '#events' },
  { text: 'Contacts', path: '#contact' },
];

export const missions = [
    {
    title: "Empowering Youth",
    description : "Our main mission is to empower youth with the skills, resources, and opportunities they need to thrive and succeed.",
    icon: youth,
    },
    {
    title: "Peace On The Planet",
    description:"Building peaceful communities through youth engagement.",
    icon:peace,
    },
    {
    title: "Support & Mentorship",
    description: "Providing support and mentorship for youth success.",
    icon: mentorship,    
    },
    {
    title: "Promoting Diversity & Inclusion",
    description: "We want communities where everyone is welcomed and understood, no matter our differences.",
    icon: diversity,
    },

];
export const wallpapers = [
  {
    image: bghome,
    title: "Youth Empowerment Network",
    description: "We're dedicated to empowering youth to thrive and shape a brighter future. Every young person deserves the opportunity to make a positive impact and contribute to building a better world.",
  },
  {
    image: bghome5,
    title: "Youth Leadership Development",
    description: "Foster the next generation of leaders through our youth leadership development programs. We provide tools, resources, and mentorship to help young leaders develop their skills, confidence, and vision for a better future.",
  },
  {
    image: bghome6,
    title: "Educational Empowerment",
    description: "Education is the key to unlocking opportunities and realizing dreams. Our educational empowerment initiatives aim to provide access to quality education, promote lifelong learning, and equip young people with the knowledge and skills they need to succeed.",
  },
  {
    image: bghome2,
    title: "Youth Advocacy and Activism",
    description: "Raise your voice, drive change, and make a difference! Our youth advocacy and activism programs empower young people to become agents of positive social change. Join us in advocating for equality, justice, and a better world.",
  },

  {
    image: bghome4,
    title: "Youth Volunteerism and Service",
    description: "Make a difference by giving back to your community! Our youth volunteerism and service programs provide opportunities for young people to engage in meaningful service projects, create positive change, and build stronger communities.",
  },

];

export const causes = [
    {
      image: scholarship,
      title: "Scholarships",
      raisedAmount: "$92,160",
      totalAmount: "$100,000",
    },
    {
      image: mentalhealth,
      title: "Mental Health Education",
      raisedAmount: "$52,380",
      totalAmount: "$55,000",
    },
    {
      image: stem,
      title: "STEM Education",
      raisedAmount: "$42,280",
      totalAmount: "$45,000",
    },
  ];

  export const statistics = [
    {
    title: "Youth Participants Annually" ,
    number: 650,
    },
    {
    title: "Mentorship Programs" ,
    number: 50,
    },
    {
     title:"Scholarships Awarded",
     number: 1000,
    },
    {
      title: "Years Serving the Community",
      number: 10,    
      },
];

export const programs = [
  {
    title: 'Internship Program',
    options: [
      {
        description: 'Gain practical experience in your field of interest and apply valuable skills in real-world projects with our Internship Program.',
        btnText: 'Apply for an Internship',
        icon: internship,
      },
      {
        description: 'Offer internships at your organization to provide learning opportunities to aspiring professionals with our Internship Program.',
        btnText: 'Offer an Internship',
        icon: internship_offer,
      },
    ],
  },
  {
    title: 'Scholarship Program',
    options: [
      {
        description: 'Apply for financial assistance and grants to support your education and academic pursuits with our Scholarship Program.',
        btnText: 'Apply for a Scholarship',
        icon: scholarship_icon,
      },
      {
        description: 'Support deserving students by sponsoring scholarships and investing in their education with our Scholarship Program.',
        btnText: 'Sponsor a Scholarship',
        icon: scholarship_offer,
      },
    ],
  },
  {
    title: 'Mentorship Program',
    options: [
      {
        description: 'Connect with experienced mentors who provide guidance and support to help you achieve your goals with our Mentorship Program.',
        btnText: 'Apply for a Mentor',
        icon: mentor,
      },
      {
        description: 'Share your knowledge and experience by becoming a mentor and empowering young individuals with our Mentorship Program.',
        btnText: 'Apply as a Mentor',
        icon: mentorship_offer,
      }
    ]
  },
  {
    title: 'Mental Health Support Program',
    options: [
      {
        description: 'Access resources, counseling, and support groups to improve your mental well-being with our Mental Health Program.',
        btnText: 'Get Support',
        icon: mentalsupport,
      },
      {
        description: 'Volunteer as a mental health advocate and provide assistance to those in need with our Mental Health Support Program.',
        btnText: 'Volunteer now',
        icon: support,
      },
    ],
  },
  {
    title: 'Bootcamp Programs',
    options: [
      {
        description: 'Join our intensive skills bootcamp and accelerate your learning in essential areas of your choice with expert guidance.',
        btnText: 'Enroll Now',
        icon: bootcamp,
      },
      {
        description: 'Organize a bootcamp tailored to the needs of the youth community and help them develop the skills they need to succeed.',
        btnText: 'Host a Bootcamp',
        icon: host,
      },
    ],
  },
  {
    title: 'Seminar & Webinar Programs',
    options: [
      {
        description: 'Boost your professional skills and stay ahead in your career journey with our impactful Seminar & Webinar Series Program.',
        btnText: 'Explore Seminars',
        icon: webinar,
      },
      {
        description: 'Host a seminar or webinar and contribute to youth empowerment by sharing expertise with our Seminar & Webinar Programs.',
        btnText: 'Host a Seminar',
        icon: hostwebinar,
      },
    ],
  }
];

export const fundingPartners = [
  partner1, partner2, partner3, partner4, partner5
];

export const events = [
  {
    title: 'Leadership Workshop',
    categories: ['Workshops', 'Leadership'],
    date: '2024-04-30',
    location: 'Online',
    description: 'Join us for an engaging workshop on leadership skills development for young leaders. Gain valuable insights and practical strategies to lead effectively in various settings.',
    name: "John Doe",
    designation: "COO",
    company: "A Company",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    title: 'Career Workshop',
    categories: ['Workshops', 'Career Development'],
    date: '2024-05-03',
    location: 'Community Center',
    description: 'Explore various career paths and gain insights from industry professionals in this informative workshop. Discover new opportunities and plan your career path with confidence.',
    name: "David Brown",
    designation: "COO",
    company: "X Company",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    title: 'Mental Health Seminar',
    categories: ['Seminars', 'Health'],
    date: '2024-05-20',
    location: 'City Hall',
    description: 'Learn about mental health issues and effective strategies for promoting well-being in your daily life. Join us for an insightful seminar that will empower you to prioritize your mental health.',
    name: "Emily Johnson",
    designation: "COO",
    company: "123 Company",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    title: 'Investment Seminar',
    categories: ['Seminars', 'Finance'],
    date: '2024-06-05',
    location: 'Online',
    description: 'Discover key concepts of financial management and smart budgeting tips in this comprehensive seminar. Enhance your financial literacy and make informed decisions about your money.',
    name: "Mia Davis",
    designation: "CEO",
    company: "XYZ Company",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    title: 'Empowerment Conference',
    categories: ['Conferences'],
    date: '2024-7-1',
    location: 'Convention Center',
    description: 'Join us for an inspiring conference focused on empowering young individuals to succeed. Connect with like-minded peers, engage in meaningful discussions, and unlock your full potential.',
    name: "Liam Davis",
    designation: "COO",
    company: "ABC Company",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];
