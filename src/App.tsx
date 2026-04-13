import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLayout from "./admin/AdminLayout.tsx";
import DashboardPage from "./admin/pages/DashboardPage.tsx";
import UsersPage from "./admin/pages/UsersPage.tsx";
import VerificationPage from "./admin/pages/VerificationPage.tsx";
import ReportsPage from "./admin/pages/ReportsPage.tsx";
import SubscriptionsPage from "./admin/pages/SubscriptionsPage.tsx";
import PaymentsPage from "./admin/pages/PaymentsPage.tsx";
import CreditsPage from "./admin/pages/CreditsPage.tsx";
import BoostsPage from "./admin/pages/BoostsPage.tsx";
import NotificationsPage from "./admin/pages/NotificationsPage.tsx";
import AIMonitorPage from "./admin/pages/AIMonitorPage.tsx";
import AnalyticsPage from "./admin/pages/AnalyticsPage.tsx";
import ModerationPage from "./admin/pages/ModerationPage.tsx";
import SecurityPage from "./admin/pages/SecurityPage.tsx";
import AdminSettingsPage from "./admin/pages/AdminSettingsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="verification" element={<VerificationPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="subscriptions" element={<SubscriptionsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="credits" element={<CreditsPage />} />
            <Route path="boosts" element={<BoostsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="ai" element={<AIMonitorPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="moderation" element={<ModerationPage />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
