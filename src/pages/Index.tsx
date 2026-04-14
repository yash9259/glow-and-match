import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/screens/SplashScreen";
import OnboardingScreen from "@/screens/OnboardingScreen";
import LoginScreen from "@/screens/LoginScreen";
import ProfileSetupScreen from "@/screens/ProfileSetupScreen";
import SwipeScreen from "@/screens/SwipeScreen";
import MatchScreen from "@/screens/MatchScreen";
import ChatListScreen from "@/screens/ChatListScreen";
import ChatScreen from "@/screens/ChatScreen";
import ProfileViewScreen from "@/screens/ProfileViewScreen";
import EditProfileScreen from "@/screens/EditProfileScreen";
import NotificationsScreen from "@/screens/NotificationsScreen";
import PremiumScreen from "@/screens/PremiumScreen";
import BoostScreen from "@/screens/BoostScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import ReportScreen from "@/screens/ReportScreen";
import LikesScreen from "@/screens/LikesScreen";
import AIMatchScreen from "@/screens/AIMatchScreen";
import AISupportScreen from "@/screens/AISupportScreen";
import BottomNav from "@/components/BottomNav";

type Screen =
  | "splash" | "onboarding" | "login" | "profile-setup"
  | "home" | "likes" | "chat-list" | "chat" | "profile-view"
  | "edit-profile" | "notifications" | "premium" | "boost"
  | "settings" | "report" | "ai-matches" | "ai-support";

const mainScreens = ["home", "likes", "chat-list", "notifications", "profile-view", "ai-matches"];

const Index = () => {
  const [screen, setScreen] = useState<Screen>("splash");
  const [chatId, setChatId] = useState(1);
  const [showMatch, setShowMatch] = useState(false);

  const openChat = (id: number) => {
    setChatId(id);
    setScreen("chat");
  };

  const renderScreen = () => {
    switch (screen) {
      case "splash":
        return <SplashScreen onComplete={() => setScreen("onboarding")} />;
      case "onboarding":
        return <OnboardingScreen onComplete={() => setScreen("login")} />;
      case "login":
        return <LoginScreen onComplete={() => setScreen("profile-setup")} />;
      case "profile-setup":
        return <ProfileSetupScreen onComplete={() => setScreen("home")} />;
      case "home":
        return <SwipeScreen onMatch={() => setShowMatch(true)} />;
      case "likes":
        return <LikesScreen onNavigate={(s) => setScreen(s as Screen)} />;
      case "chat-list":
        return <ChatListScreen onOpenChat={openChat} />;
      case "chat":
        return <ChatScreen onBack={() => setScreen("chat-list")} chatId={chatId} />;
      case "profile-view":
        return (
          <ProfileViewScreen
            onBack={() => setScreen("home")}
            onChat={() => openChat(1)}
            onNavigate={(s) => setScreen(s as Screen)}
          />
        );
      case "edit-profile":
        return <EditProfileScreen onBack={() => setScreen("settings")} />;
      case "notifications":
        return <NotificationsScreen />;
      case "premium":
        return <PremiumScreen onBack={() => setScreen("home")} />;
      case "boost":
        return <BoostScreen onBack={() => setScreen("home")} />;
      case "settings":
        return <SettingsScreen onBack={() => setScreen("profile-view")} onNavigate={(s) => setScreen(s as Screen)} />;
      case "report":
        return <ReportScreen onBack={() => setScreen("profile-view")} />;
      case "ai-matches":
        return <AIMatchScreen onBack={() => setScreen("home")} onChat={openChat} />;
      case "ai-support":
        return <AISupportScreen onBack={() => setScreen("settings")} />;
      default:
        return null;
    }
  };

  const showNav = mainScreens.includes(screen);

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="w-full max-w-md relative">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>

        {showMatch && (
          <MatchScreen
            onMessage={() => { setShowMatch(false); openChat(1); }}
            onKeepSwiping={() => { setShowMatch(false); }}
          />
        )}

        {showNav && (
          <BottomNav active={screen} onNavigate={(s) => setScreen(s as Screen)} />
        )}
      </div>
    </div>
  );
};

export default Index;
