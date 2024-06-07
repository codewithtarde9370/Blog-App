import Server from "./components/1.jpg";
import Svelte from "./components/2.jpg";
import Flexbox from "./components/3.jpg";
import Google from "./components/4.jpg";
import Accessibility from "./components/5.jpg";
import Webassembly from "./components/6.jpg";
import Sophia from "./components/Sophia.jpg";
import David from "./components/David.jpg";
import Daniel from "./components/Daniel.jpg";
import Emily from "./components/Emily.jpg";
import Michael from "./components/Michael.jpg";
import Olivia from "./components/Olivia.jpg";

const BlogData = [
  {
    id:"The Science of Nutrition",
    blogImg: Server,
    title: "The Science of Nutrition",
    about: "Explore the latest research findings on nutrition, covering topics such as macronutrients (carbohydrates, proteins, fats), micronutrients (vitamins, minerals), dietary guidelines, and the role of nutrition in preventing chronic diseases like obesity, diabetes, and heart disease. Provide evidence-based recommendations on healthy eating habits, meal planning, and navigating nutrition controversies.",
    author: {
      name: "Emily Smith",
      authorImg: Emily,
      date: "July 20, 2024",
    },
  },
  {
    id:"Fitness and Exercise Tips",
    blogImg: Svelte,
    title: "Fitness and Exercise Tips",
    about: "Offer a variety of workout routines and exercise plans tailored to different fitness levels and goals, including strength training, cardio, flexibility, and functional training. Provide tips for staying motivated, overcoming plateaus, and preventing injuries. Discuss the benefits of regular physical activity for overall health, weight management, and mental well-being.",
    author: {
      name: "David Johnson",
      authorImg: David,
      date: "August 5, 2024",
    },
  },
  {
    id:"Mental Health and Well-being",
    blogImg: Flexbox,
    title: "Mental Health and Well-being",
    about: "Address common mental health issues such as stress, anxiety, depression, and burnout, and provide practical strategies for coping and resilience-building. Discuss the importance of self-care practices, setting boundaries, seeking professional help when needed, and promoting mental wellness through activities like journaling, mindfulness, and relaxation techniques.    ",
    author: {
      name: "Sophia Lee",
      authorImg: Sophia,
      date: "September 10, 2024",
    },
  },
  {
    id:"Sleep and Sleep Hygiene",
    blogImg: Google,
    title: "Sleep and Sleep Hygiene",
    about: "Educate readers about the importance of sleep for physical and mental health, cognitive function, and overall well-being. Offer tips for improving sleep hygiene, such as establishing a consistent sleep schedule, creating a relaxing bedtime routine, optimizing sleep environment, and managing factors that disrupt sleep like technology use and caffeine intake.",
    author: {
      name: "Michael Chen",
      authorImg: Michael,
      date: "October 15, 2024",
    },
  },
  {
    id:"Mind-Body Practices",
    blogImg: Accessibility,
    title: "Mind-Body Practices",
    about: "Explore mind-body practices that promote holistic well-being, including yoga, tai chi, qigong, meditation, and mindfulness. Discuss the physical, mental, and emotional benefits of these practices, their role in stress reduction, pain management, and improving overall quality of life, and provide guidance on incorporating them into daily routines.",
    author: {
      name: "Olivia Williams",
      authorImg: Olivia,
      date: "November 1, 2024",
    },
  },
  {
    id:"Healthy Lifestyle Habits",
    blogImg: Webassembly,
    title: "Healthy Lifestyle Habits",
    about: "Provide practical tips and advice for adopting and maintaining healthy lifestyle habits that promote overall well-being. Cover topics such as stress management techniques, time management strategies, building supportive social networks, cultivating positive relationships, setting realistic goals, and prioritizing self-care activities that nourish the body, mind, and spirit.",
    author: {
      name: "Daniel Rodriguez",
      authorImg: Daniel,
      date: "December 10, 2024",
    },
  },
];

export default BlogData;
