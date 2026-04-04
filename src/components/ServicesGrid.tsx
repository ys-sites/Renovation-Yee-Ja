import { 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Home, 
  LayoutDashboard, 
  DoorOpen,
  Trees,
  Ruler
} from "lucide-react";
import { Card } from "./Animated";

const services = [
  {
    title: "Kitchen Renovation",
    description: "Complete kitchen remodels, custom cabinetry, countertops, and modern appliance integration.",
    icon: LayoutDashboard,
  },
  {
    title: "Bathroom Renovation",
    description: "Luxurious bathroom updates including walk-in showers, custom vanities, and premium tiling.",
    icon: Home,
  },
  {
    title: "Basement Finishing",
    description: "Transform your unfinished basement into a functional living space, home theater, or suite.",
    icon: Ruler,
  },
  {
    title: "Flooring Installation",
    description: "Professional installation of hardwood, laminate, vinyl, and ceramic tile flooring.",
    icon: Hammer,
  },
  {
    title: "Painting Services",
    description: "High-quality interior and exterior painting with meticulous prep work and premium paints.",
    icon: Paintbrush,
  },
  {
    title: "Drywall & Plastering",
    description: "Expert drywall installation, taping, mudding, and seamless plaster repairs.",
    icon: Wrench,
  },
  {
    title: "Window & Door Installation",
    description: "Energy-efficient window replacements and secure, stylish exterior and interior doors.",
    icon: DoorOpen,
  },
  {
    title: "Deck & Patio Construction",
    description: "Custom outdoor living spaces, wooden decks, and beautiful stone patios.",
    icon: Trees,
  },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <Card key={index} delay={index * 0.1}>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-[#2D6A4F]">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
