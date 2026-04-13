export const dashboardStats = {
  totalUsers: 48250,
  activeToday: 12840,
  totalMatches: 156320,
  monthlyRevenue: 284500,
  premiumUsers: 8420,
  reportsPending: 47,
  verificationsPending: 124,
  dailySignups: 380,
};

export const revenueData = [
  { month: "Jan", revenue: 42000, subscriptions: 1200 },
  { month: "Feb", revenue: 48000, subscriptions: 1350 },
  { month: "Mar", revenue: 52000, subscriptions: 1480 },
  { month: "Apr", revenue: 58000, subscriptions: 1620 },
  { month: "May", revenue: 63000, subscriptions: 1780 },
  { month: "Jun", revenue: 71000, subscriptions: 1950 },
];

export const userGrowthData = [
  { month: "Jan", users: 32000, active: 18000 },
  { month: "Feb", users: 35000, active: 20000 },
  { month: "Mar", users: 38500, active: 22000 },
  { month: "Apr", users: 41000, active: 24000 },
  { month: "May", users: 44800, active: 26500 },
  { month: "Jun", users: 48250, active: 28000 },
];

export const adminUsers = [
  { id: 1, name: "Sophia Martinez", email: "sophia@email.com", age: 24, status: "active", verified: true, premium: true, joined: "2024-01-15", reports: 0, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 2, name: "Emma Johnson", email: "emma@email.com", age: 26, status: "active", verified: true, premium: false, joined: "2024-02-03", reports: 1, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop" },
  { id: 3, name: "Ava Chen", email: "ava@email.com", age: 23, status: "active", verified: false, premium: false, joined: "2024-03-10", reports: 0, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: 4, name: "Jake Williams", email: "jake@email.com", age: 28, status: "suspended", verified: true, premium: true, joined: "2024-01-20", reports: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: 5, name: "Luna Park", email: "luna@email.com", age: 22, status: "active", verified: false, premium: false, joined: "2024-04-01", reports: 0, image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop" },
  { id: 6, name: "Marcus Brown", email: "marcus@email.com", age: 30, status: "banned", verified: true, premium: false, joined: "2023-12-05", reports: 12, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { id: 7, name: "Chloe Davis", email: "chloe@email.com", age: 25, status: "active", verified: true, premium: true, joined: "2024-02-14", reports: 0, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { id: 8, name: "Ryan Cooper", email: "ryan@email.com", age: 27, status: "active", verified: false, premium: false, joined: "2024-05-01", reports: 2, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
];

export const verificationRequests = [
  { id: 1, userId: 3, name: "Ava Chen", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", selfie: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop", submitted: "2024-06-10", status: "pending" },
  { id: 2, userId: 5, name: "Luna Park", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop", selfie: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop", submitted: "2024-06-11", status: "pending" },
  { id: 3, userId: 8, name: "Ryan Cooper", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", selfie: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", submitted: "2024-06-12", status: "pending" },
];

export const reportsList = [
  { id: 1, reportedUser: "Jake Williams", reportedBy: "Sophia Martinez", reason: "Inappropriate messages", description: "Sent explicit content without consent", date: "2024-06-10", status: "pending", severity: "high" },
  { id: 2, reportedUser: "Marcus Brown", reportedBy: "Emma Johnson", reason: "Fake profile", description: "Using someone else's photos", date: "2024-06-09", status: "pending", severity: "critical" },
  { id: 3, reportedUser: "Ryan Cooper", reportedBy: "Ava Chen", reason: "Harassment", description: "Continued messaging after being asked to stop", date: "2024-06-11", status: "reviewing", severity: "high" },
  { id: 4, reportedUser: "Jake Williams", reportedBy: "Luna Park", reason: "Scam/Spam", description: "Trying to sell products in chat", date: "2024-06-08", status: "resolved", severity: "medium" },
  { id: 5, reportedUser: "Marcus Brown", reportedBy: "Chloe Davis", reason: "Inappropriate photos", description: "Profile contains explicit content", date: "2024-06-07", status: "resolved", severity: "high" },
];

export const subscriptionPlans = [
  { id: 1, name: "Free", price: 0, interval: "month", features: ["5 swipes/day", "Basic matching", "1 photo"], users: 39830, active: true },
  { id: 2, name: "Premium", price: 9.99, interval: "month", features: ["Unlimited swipes", "See who likes you", "5 photos", "1 boost/month"], users: 6200, active: true },
  { id: 3, name: "Premium+", price: 19.99, interval: "month", features: ["Everything in Premium", "AI match suggestions", "Priority support", "10 photos", "5 boosts/month"], users: 2220, active: true },
];

export const paymentTransactions = [
  { id: "TXN-001", user: "Sophia Martinez", plan: "Premium+", amount: 19.99, date: "2024-06-12", status: "completed", method: "Visa ****4242" },
  { id: "TXN-002", user: "Chloe Davis", plan: "Premium", amount: 9.99, date: "2024-06-12", status: "completed", method: "Mastercard ****8888" },
  { id: "TXN-003", user: "Jake Williams", plan: "Premium", amount: 9.99, date: "2024-06-11", status: "refunded", method: "Visa ****1234" },
  { id: "TXN-004", user: "Emma Johnson", plan: "Premium+", amount: 19.99, date: "2024-06-11", status: "completed", method: "Apple Pay" },
  { id: "TXN-005", user: "Ryan Cooper", plan: "Boost x5", amount: 4.99, date: "2024-06-10", status: "completed", method: "Google Pay" },
];

export const chatCredits = [
  { userId: 1, name: "Sophia Martinez", balance: 150, purchased: 500, used: 350, lastPurchase: "2024-06-10" },
  { userId: 2, name: "Emma Johnson", balance: 25, purchased: 100, used: 75, lastPurchase: "2024-06-05" },
  { userId: 4, name: "Jake Williams", balance: 0, purchased: 200, used: 200, lastPurchase: "2024-06-01" },
  { userId: 7, name: "Chloe Davis", balance: 300, purchased: 300, used: 0, lastPurchase: "2024-06-12" },
];

export const boostProfiles = [
  { id: 1, user: "Sophia Martinez", type: "Super Boost", startTime: "2024-06-12 14:00", endTime: "2024-06-12 15:00", views: 342, matches: 12, status: "active" },
  { id: 2, user: "Chloe Davis", type: "Boost", startTime: "2024-06-12 10:00", endTime: "2024-06-12 10:30", views: 89, matches: 3, status: "completed" },
  { id: 3, user: "Emma Johnson", type: "Featured", startTime: "2024-06-11 00:00", endTime: "2024-06-12 00:00", views: 1240, matches: 28, status: "completed" },
];

export const notificationHistory = [
  { id: 1, title: "Weekend Special! 🎉", message: "Get 50% off Premium this weekend only!", sentAt: "2024-06-10", recipients: 48250, opened: 18420, type: "promotion" },
  { id: 2, title: "New Feature: Video Calls", message: "You can now video call your matches!", sentAt: "2024-06-08", recipients: 48250, opened: 22100, type: "feature" },
  { id: 3, title: "Safety Update", message: "We've enhanced our safety features. Read more.", sentAt: "2024-06-05", recipients: 48250, opened: 15300, type: "system" },
];

export const aiMetrics = {
  matchAccuracy: 87.4,
  chatbotSatisfaction: 92.1,
  falsePositiveRate: 3.2,
  suggestionsAccepted: 68.5,
  avgResponseTime: 120,
  modelsActive: 4,
};

export const engagementData = [
  { day: "Mon", swipes: 45000, messages: 12000, matches: 3200 },
  { day: "Tue", swipes: 42000, messages: 11500, matches: 2900 },
  { day: "Wed", swipes: 48000, messages: 13000, matches: 3500 },
  { day: "Thu", swipes: 46000, messages: 12800, matches: 3300 },
  { day: "Fri", swipes: 55000, messages: 16000, matches: 4200 },
  { day: "Sat", swipes: 68000, messages: 21000, matches: 5800 },
  { day: "Sun", swipes: 62000, messages: 19000, matches: 5200 },
];

export const moderationQueue = [
  { id: 1, user: "Jake Williams", type: "photo", content: "Profile photo #3", reason: "AI flagged: potentially explicit", confidence: 92, date: "2024-06-12" },
  { id: 2, user: "Marcus Brown", type: "bio", content: "Looking for sugar...", reason: "AI flagged: solicitation language", confidence: 85, date: "2024-06-11" },
  { id: 3, user: "Ryan Cooper", type: "photo", content: "Profile photo #1", reason: "AI flagged: possible fake/stock photo", confidence: 78, date: "2024-06-11" },
];

export const securityLogs = [
  { id: 1, event: "Multiple failed logins", user: "unknown", ip: "192.168.1.45", device: "Android 14", date: "2024-06-12 14:32", severity: "warning" },
  { id: 2, event: "Account accessed from new device", user: "Sophia Martinez", ip: "10.0.0.12", device: "iPhone 15", date: "2024-06-12 13:15", severity: "info" },
  { id: 3, event: "Suspicious rapid swiping", user: "Jake Williams", ip: "172.16.0.88", device: "Android 13", date: "2024-06-12 12:00", severity: "warning" },
  { id: 4, event: "Possible bot behavior detected", user: "Marcus Brown", ip: "203.0.113.5", device: "Windows Chrome", date: "2024-06-11 22:45", severity: "critical" },
  { id: 5, event: "VPN/Proxy detected", user: "Ryan Cooper", ip: "198.51.100.1", device: "macOS Safari", date: "2024-06-11 18:00", severity: "warning" },
];
