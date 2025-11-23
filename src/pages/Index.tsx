import { useState } from "react";
import { Store, Car } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import DeliverySection from "@/components/delivery/DeliverySection";
import TransportSection from "@/components/transport/TransportSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="delivery" className="flex items-center gap-2">
              <Store className="w-4 h-4" />
              Delivery
            </TabsTrigger>
            <TabsTrigger value="transport" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Transporte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="delivery">
            <DeliverySection />
          </TabsContent>

          <TabsContent value="transport">
            <TransportSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
