export const profiles = [
  {
    id: 1,
    name: "Sophia",
    age: 24,
    distance: "2 km away",
    bio: "Coffee addict ☕ | Sunset chaser 🌅 | Dog mom 🐕",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
    ],
    interests: ["Photography", "Yoga", "Travel", "Coffee"],
    verified: true,
    online: true,
  },
  {
    id: 2,
    name: "Emma",
    age: 26,
    distance: "5 km away",
    bio: "Adventure seeker 🏔️ | Bookworm 📚 | Foodie 🍕",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop",
    ],
    interests: ["Hiking", "Reading", "Cooking", "Music"],
    verified: true,
    online: false,
  },
  {
    id: 3,
    name: "Ava",
    age: 23,
    distance: "1 km away",
    bio: "Dance like nobody's watching 💃 | Night owl 🦉",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop",
    ],
    interests: ["Dancing", "Art", "Nightlife", "Fashion"],
    verified: false,
    online: true,
  },
  {
    id: 4,
    name: "Mia",
    age: 25,
    distance: "3 km away",
    bio: "Fitness junkie 💪 | Plant mom 🌿 | Smile collector 😊",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=800&fit=crop",
    ],
    interests: ["Fitness", "Nature", "Meditation", "Smoothies"],
    verified: true,
    online: true,
  },
];

export const matches = [
  {
    id: 1,
    name: "Sophia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    lastMessage: "Hey! How are you? 😊",
    time: "2m ago",
    online: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Emma",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
    lastMessage: "That sounds amazing!",
    time: "15m ago",
    online: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Ava",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    lastMessage: "Let's meet up this weekend 🎉",
    time: "1h ago",
    online: true,
    unread: 1,
  },
  {
    id: 4,
    name: "Mia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    lastMessage: "Haha that's so funny 😂",
    time: "3h ago",
    online: false,
    unread: 0,
  },
  {
    id: 5,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop",
    lastMessage: "Thanks for the recommendation!",
    time: "5h ago",
    online: false,
    unread: 0,
  },
];

export const chatMessages = [
  { id: 1, sender: "them", text: "Hey there! 👋", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Hi Sophia! How's your day going?", time: "10:31 AM" },
  { id: 3, sender: "them", text: "Pretty good! Just got back from a yoga class 🧘‍♀️", time: "10:33 AM" },
  { id: 4, sender: "me", text: "Oh nice! I've been meaning to try yoga", time: "10:34 AM" },
  { id: 5, sender: "them", text: "You should! It's so relaxing. I go every morning", time: "10:35 AM" },
  { id: 6, sender: "me", text: "Maybe you could show me some time? 😄", time: "10:36 AM" },
  { id: 7, sender: "them", text: "I'd love that! There's a great studio near the park", time: "10:37 AM" },
  { id: 8, sender: "them", text: "How about this Saturday morning?", time: "10:37 AM" },
];

export const notifications = [
  { id: 1, type: "match" as const, text: "You matched with Sophia!", time: "2m ago", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 2, type: "like" as const, text: "Someone liked your profile", time: "1h ago", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: 3, type: "message" as const, text: "Emma sent you a message", time: "2h ago", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop" },
  { id: 4, type: "boost" as const, text: "Your boost has ended. 12 people saw your profile!", time: "5h ago", image: "" },
  { id: 5, type: "like" as const, text: "3 new people liked your profile", time: "1d ago", image: "" },
];

export const onboardingSlides = [
  {
    title: "Discover",
    subtitle: "Find people near you",
    description: "Browse through profiles of people in your area and discover your perfect match.",
    icon: "🔍",
  },
  {
    title: "Match",
    subtitle: "Connect instantly",
    description: "When you both like each other, it's a match! Start your conversation right away.",
    icon: "💕",
  },
  {
    title: "Chat",
    subtitle: "Break the ice",
    description: "Send messages, share moments, and get to know each other better.",
    icon: "💬",
  },
  {
    title: "Stay Safe",
    subtitle: "Your safety matters",
    description: "Verified profiles, report features, and privacy controls to keep you safe.",
    icon: "🛡️",
  },
];

export const interestOptions = [
  "Photography", "Travel", "Music", "Fitness", "Cooking", "Art",
  "Reading", "Gaming", "Dancing", "Yoga", "Hiking", "Coffee",
  "Movies", "Fashion", "Nightlife", "Nature", "Foodie", "Sports",
  "Tech", "Meditation", "Pets", "Wine", "Beach", "Shopping",
];

export const aiReplies = [
  "That sounds great! 😊",
  "I'd love to hear more about that!",
  "When are you free to meet up?",
  "Haha, you're so funny! 😂",
  "What's your favorite spot in the city?",
  "Tell me more about yourself 💬",
  "I love that! We should try it together",
  "Any plans for the weekend? 🎉",
  "You seem really cool! 😄",
  "What kind of music are you into? 🎵",
];

export const aiContextualReplies: Record<string, string[]> = {
  greeting: [
    "Hey! Great to match with you! 👋",
    "Hi there! Your profile caught my eye 😊",
    "Hello! How's your day going?",
  ],
  compliment: [
    "Aw thank you! That's so sweet 🥰",
    "You're too kind! Right back at you 😊",
    "That really made my day! 💕",
  ],
  plans: [
    "I'm free this Saturday! How about brunch? 🥐",
    "Let's grab coffee sometime this week! ☕",
    "There's a great new restaurant downtown, wanna try it?",
  ],
  interests: [
    "I'm really into hiking and photography 📸",
    "I love trying new restaurants and cooking 🍳",
    "I'm a huge music festival fan! 🎶",
  ],
  flirty: [
    "You're making me blush over here 😊",
    "Is it just me or do we have great chemistry? ✨",
    "I think we'd have an amazing time together 💫",
  ],
  funny: [
    "Haha okay that was actually hilarious 😂",
    "Stop, you're gonna make me laugh in public 🤣",
    "10/10 humor, I'm impressed 😆",
  ],
  general: [
    "That's really interesting! Tell me more 🤔",
    "I totally agree with you on that!",
    "Wow, I didn't know that! Thanks for sharing 😊",
    "That's awesome! I feel like we have a lot in common",
    "You have great taste! 👌",
  ],
};

export const aiBotResponses = [
  "I've been thinking about that too! What do you think?",
  "That's such a great point. I really admire how you think about things 😊",
  "Honestly, I was hoping you'd say that! 💕",
  "You always know the right thing to say 😄",
  "I love how easy it is to talk to you!",
  "Same here! We really are on the same wavelength ✨",
  "Haha you're hilarious! I can't stop smiling 😂",
  "That's so cool! We should definitely do that together sometime",
  "I'm really enjoying getting to know you 💬",
  "You're making my day so much better right now 🥰",
  "Oh wow, I didn't expect that! Tell me more 🤔",
  "I feel like we could talk for hours and never get bored",
  "That reminds me of something funny that happened to me...",
  "You have such great energy! I love it 🌟",
  "Okay but seriously, when are we finally meeting up? 😏",
];
