import Each from "@/_shared/components/app-each";
import { cn } from "@/_core/components/lib/utils";
import { HandCoins, LayoutDashboard, Medal, Users } from "lucide-react";

export default function LandingPageSocialProof() {
  const items = [
    {
      icon: Users,
      title: `10.000+`,
      textColor: `text-purple-500`,
      borderHover: `hover:!border-purple-500`,
      description: `Vidas impactadas`,
    },
    {
      title: `15+`,
      icon: LayoutDashboard,
      textColor: `text-blue-500`,
      borderHover: `hover:!border-blue-500`,
      description: `Módulos exclusivos`,
    },
    {
      icon: Medal,
      title: `92%`,
      textColor: `text-green-500`,
      borderHover: `hover:!border-green-500`,
      description: `De recomendação`,
    },
    {
      title: `99,8%`,
      icon: HandCoins,
      textColor: `text-orange-500`,
      borderHover: `hover:!border-orange-500`,
      description: `acessibilidade total`,
    },
  ];

  return (
    <section className="grid gap-4 grid-cols-2 mobile:grid-cols-1">
      <Each
        data={items}
        render={(item) => {
          const Icon = item.icon;

          return (
            <article
              className={cn(
                "flex gap-4 items-center p-1 rounded-full border border-white/30 transition-all duration-500 hover:scale-105 select-none mobile:justify-center",
                item.borderHover
              )}
            >
              <figure className={cn("rounded-full p-3", item.textColor)}>
                <Icon />
              </figure>

              <div className="text-sm">
                <h5 className="font-semibold">{item.title}</h5>
                <h6>{item.description}</h6>
              </div>
            </article>
          );
        }}
      />
    </section>
  );
}
