import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./constants/nav";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 헤더 높이(60px)만큼 여유를 두고 스크롤
      const offsetTop = element.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 md:px-12">
        {/* 로고 / 이름 */}
        <button
          onClick={() => scrollToSection("home")}
          className="hover:opacity-70 transition-opacity"
        >
          <span className="font-bold text-xl text-[#155dfc] tracking-tight">
            고범석
            <span className="hidden sm:inline ml-1 text-sm font-medium opacity-70">
              (Ko Beomseok)
            </span>
          </span>
        </button>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base transition-all duration-200 hover:text-[#155dfc] ${
                  active
                    ? "font-semibold text-[#155dfc]"
                    : "font-normal text-[#45556c]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
