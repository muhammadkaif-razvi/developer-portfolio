import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  // TikTok, // Assuming you have a TikTok icon in your Lucide setup, or replace with a generic icon
  // Pinterest,
  // Github,
  // Reddit,
} from 'lucide-react'; // Make sure to install lucide-react and lucide-icons

const socialMedia = [
  {
    name: "Facebook",
    icon: Facebook, // Directly use the imported Lucide component
    path: "https://www.facebook.com/yourprofile", // Replace with the actual path
  },
  {
    name: "Instagram",
    icon: Instagram, // Directly use the imported Lucide component
    path: "https://www.instagram.com/yourprofile", // Replace with the actual path
  },
  {
    name: "X (Twitter)",
    icon: Twitter, // Directly use the imported Lucide component
    path: "https://twitter.com/yourprofile", // Replace with the actual path
  },
  {
    name: "LinkedIn",
    icon: Linkedin, // Directly use the imported Lucide component
    path: "https://www.linkedin.com/in/muhammad-kaif-razvi-143-webdev/", // Replace with the actual path
  },
  {
    name: "YouTube",
    icon: Youtube, // Directly use the imported Lucide component
    path: "https://www.youtube.com/yourprofile", // Corrected YouTube path
  },
  // {
  //   name: "TikTok",
  //   icon: TikTok, // Directly use the imported Lucide component. If 'TikTok' isn't available in your Lucide package, you might need to find an alternative or use a custom SVG.
  //   path: "https://www.tiktok.com/@yourprofile", // Replace with the actual path
  // },
  // {
  //   name: "Pinterest",
  //   icon: Pinterest, // Directly use the imported Lucide component
  //   path: "https://www.pinterest.com/yourprofile", // Replace with the actual path
  // },
  // {
  //   name: "GitHub",
  //   icon: Github, // Directly use the imported Lucide component
  //   path: "https://github.com/yourprofile", // Replace with the actual path
  // },
  // {
  //   name: "Reddit",
  //   icon: Reddit, // Directly use the imported Lucide component
  //   path: "https://www.reddit.com/user/yourprofile", // Replace with the actual path
  // },
];

interface SocialProps {
  containerst?: string; // Optional CSS classes for the container div
  iconst?: string;     // Optional CSS classes for the icons
}

const Social = ({ containerst, iconst }: SocialProps) => {
  return (
    <div className={containerst}>
      {socialMedia.map((social) => (
        <a 
          key={social.name} 
          href={social.path} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={`Visit our ${social.name} page`}
        >
          <social.icon className={iconst} />
        </a>
      ))}
    </div>
  );
};

export default Social;