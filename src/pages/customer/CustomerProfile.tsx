
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "@/components/CustomerSidebar";
import { User, Edit, Camera, Phone, Mail, MapPin, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CustomerProfile = () => {
  const { toast } = useToast();
  
  const [profile, setProfile] = useState({
    firstName: "أحمد",
    lastName: "محمد علي",
    email: "ahmed.mohamed@email.com",
    phone: "0555123456",
    dateOfBirth: "1990-05-15",
    gender: "ذكر",
    bio: "أحب التسوق الإلكتروني والمنتجات عالية الجودة",
    city: "الجزائر العاصمة",
    state: "الجزائر",
    joinDate: "2023-03-15"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "تم الحفظ",
      description: "تم تحديث ملفك الشخصي بنجاح"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const customerStats = {
    totalOrders: 12,
    totalSpent: 3850,
    loyaltyPoints: 285,
    membershipLevel: "عضو مميز"
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" dir="rtl">
        <CustomerSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-orange-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    الملف الشخصي
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة معلوماتك الشخصية</p>
                </div>
              </div>
              <Button 
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {isEditing ? 'حفظ التغييرات' : 'تعديل الملف'}
                <Edit className="h-4 w-4 mr-2" />
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* Profile Header */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profile.firstName[0]}{profile.lastName[0]}
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-center md:text-right flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {profile.firstName} {profile.lastName}
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                      <Badge className="bg-orange-100 text-orange-800">
                        {customerStats.membershipLevel}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800">
                        {customerStats.loyaltyPoints} نقطة ولاء
                      </Badge>
                    </div>
                    <p className="text-gray-600">{profile.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">إجمالي الطلبات</p>
                      <p className="text-2xl md:text-3xl font-bold">{customerStats.totalOrders}</p>
                    </div>
                    <User className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">إجمالي المشتريات</p>
                      <p className="text-xl md:text-2xl font-bold">{customerStats.totalSpent.toLocaleString()} دج</p>
                    </div>
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-red-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-100 text-sm">نقاط الولاء</p>
                      <p className="text-2xl md:text-3xl font-bold">{customerStats.loyaltyPoints}</p>
                    </div>
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-pink-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personal Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-gray-800">المعلومات الشخصية</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      readOnly={!isEditing}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      readOnly={!isEditing}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        readOnly={!isEditing}
                        className="text-right pr-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        readOnly={!isEditing}
                        className="text-right pr-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">تاريخ الميلاد</Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={profile.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        readOnly={!isEditing}
                        className="text-right pr-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="gender">الجنس</Label>
                    <Input
                      id="gender"
                      value={profile.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      readOnly={!isEditing}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="joinDate">تاريخ الانضمام</Label>
                    <Input
                      id="joinDate"
                      value={new Date(profile.joinDate).toLocaleDateString('ar-DZ')}
                      readOnly
                      className="text-right mt-2 bg-gray-50"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="bio">نبذة شخصية</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    readOnly={!isEditing}
                    className="text-right mt-2"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl text-gray-800">معلومات الموقع</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">المدينة</Label>
                    <Input
                      id="city"
                      value={profile.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      readOnly={!isEditing}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">الولاية</Label>
                    <Input
                      id="state"
                      value={profile.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      readOnly={!isEditing}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CustomerProfile;
