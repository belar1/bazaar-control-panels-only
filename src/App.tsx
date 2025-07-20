
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSellers from "./pages/admin/AdminSellers";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminDelivery from "./pages/admin/AdminDelivery";
import AdminSettings from "./pages/admin/AdminSettings";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProducts from "./pages/seller/SellerProducts";
import SellerOrders from "./pages/seller/SellerOrders";
import AddProduct from "./pages/seller/AddProduct";
import SellerDelivery from "./pages/seller/SellerDelivery";
import SellerSettings from "./pages/seller/SellerSettings";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerOrders from "./pages/customer/CustomerOrders";
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerSettings from "./pages/customer/CustomerSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/sellers" element={<AdminSellers />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/products" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminDashboard />} />
          <Route path="/admin/delivery" element={<AdminDelivery />} />
          <Route path="/admin/reports" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Seller Routes */}
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/orders" element={<SellerOrders />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/delivery" element={<SellerDelivery />} />
          <Route path="/seller/reports" element={<SellerDashboard />} />
          <Route path="/seller/settings" element={<SellerSettings />} />
          
          {/* Customer Routes */}
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/customer/orders" element={<CustomerOrders />} />
          <Route path="/customer/favorites" element={<CustomerDashboard />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
          <Route path="/customer/addresses" element={<CustomerDashboard />} />
          <Route path="/customer/notifications" element={<CustomerDashboard />} />
          <Route path="/customer/settings" element={<CustomerSettings />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
