
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { Upload, Save, X } from "lucide-react";
import { useState } from "react";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    images: []
  });

  const handleInputChange = (field: string, value: string) => {
    setProductData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("حفظ المنتج:", productData);
    // هنا سيتم إضافة منطق حفظ المنتج
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-teal-50 to-blue-50" dir="rtl">
        <SellerSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    إضافة منتج جديد
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">أضف منتج جديد إلى متجرك</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="hover:bg-red-50">
                  <X className="h-4 w-4 ml-2" />
                  إلغاء
                </Button>
                <Button onClick={handleSave} className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                  <Save className="h-4 w-4 ml-2" />
                  حفظ المنتج
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* معلومات المنتج الأساسية */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">المعلومات الأساسية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج</label>
                      <Input
                        placeholder="أدخل اسم المنتج"
                        value={productData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">السعر (دج)</label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={productData.price}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          className="text-right"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الكمية المتوفرة</label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={productData.stock}
                          onChange={(e) => handleInputChange("stock", e.target.value)}
                          className="text-right"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الفئة</label>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md text-right"
                        value={productData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                      >
                        <option value="">اختر الفئة</option>
                        <option value="ملابس">ملابس</option>
                        <option value="أحذية">أحذية</option>
                        <option value="إكسسوارات">إكسسوارات</option>
                        <option value="أجهزة">أجهزة</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">وصف المنتج</label>
                      <textarea
                        rows={4}
                        placeholder="أدخل وصف تفصيلي للمنتج"
                        value={productData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-right resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* رفع الصور */}
              <div>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">صور المنتج</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">اسحب الصور هنا أو انقر للرفع</p>
                      <p className="text-sm text-gray-400">PNG, JPG, GIF حتى 10MB</p>
                      <Button variant="outline" className="mt-4">
                        اختيار الصور
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AddProduct;
