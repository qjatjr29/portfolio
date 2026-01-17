import type { ReactNode } from "react";
import { SOCIAL_SVG } from "../public/icon/svg";
import imgMe from "../public/me.jpg";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  bgColor: string;
  textColor?: string;
  hoverColor: string;
  className?: string;
}

function SocialLink({
  href,
  label,
  icon,
  bgColor,
  textColor = "text-white",
  hoverColor,
  className = "",
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-12 px-6 rounded-[14px] shadow-lg transition-colors flex items-center justify-center gap-2 ${bgColor} ${hoverColor} ${className}`}
    >
      {icon}
      <span className={`font-semibold text-[16px] ${textColor}`}>{label}</span>
    </a>
  );
}

// 배경에 있는 블러 효과 원형
function BackgroundBlob({
  color,
  top,
  left,
  size,
}: {
  color: string;
  top: string;
  left: string;
  size: string;
}) {
  return (
    <div
      className={`absolute blur-3xl opacity-50 rounded-full ${color} ${size}`}
      style={{ top, left }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-211.75 flex justify-center overflow-hidden"
      data-name="Hero"
    >
      <div className="relative w-full max-w-290.5 px-6 lg:px-0">
        {/* 배경 레이어 (기존 Container4) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundBlob
            color="bg-[#bedbff]"
            top="80px"
            left="40px"
            size="size-[288px]"
          />
          <BackgroundBlob
            color="bg-[#e9d4ff]"
            top="383px"
            left="738px"
            size="size-[384px]"
          />
        </div>

        {/* 컨텐츠 레이어 */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between pt-39.25 gap-12">
          {/* 텍스트 영역 */}
          <div className="flex-1 space-y-8">
            <header className="space-y-2">
              <h1 className="text-[60px] font-bold leading-[1.2] text-[#0f172b] tracking-tight">
                함께 하는 것을 <br />
                <span
                  className="bg-clip-text text-transparent bg-linear-to-r from-[#155dfc] to-[#9810fa]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  좋아하는 개발자
                </span>{" "}
                <br />
                고범석 입니다
              </h1>
            </header>

            <div className="text-[20px] leading-[1.6] text-[#45556c] font-medium">
              <p>배움을 좋아하고 끝까지 해내고자 하며</p>
              <p>동료들과 함께 고민하고 대화하는 것을 좋아합니다.</p>
            </div>

            {/* 소셜 링크 그룹 */}
            <div className="flex flex-wrap gap-4">
              <SocialLink
                href="https://github.com/qjatjr29"
                label="GitHub"
                bgColor="bg-[#0f172b]"
                hoverColor="hover:bg-[#1a2332]"
                icon={
                  <IconSVG
                    path={SOCIAL_SVG.GITHUB.BODY}
                    path2={SOCIAL_SVG.GITHUB.ARM}
                  />
                }
              />
              <SocialLink
                href="mailto:hhqjatjr@gmail.com"
                label="Gmail"
                bgColor="bg-[#155dfc]"
                hoverColor="hover:bg-[#1a4dc9]"
                icon={
                  <IconSVG
                    path={SOCIAL_SVG.GMAIL.V_LINE}
                    path2={SOCIAL_SVG.GMAIL.ENVELOPE}
                  />
                }
              />
              <SocialLink
                href="https://www.linkedin.com/in/beomsic/"
                label="LinkedIn"
                bgColor="bg-[#e0e4ef]"
                textColor="text-[#0f172b]"
                hoverColor="hover:bg-[#d0d4df]"
                icon={<LinkedInIcon />}
              />
              <SocialLink
                href="https://beomsic.tistory.com/"
                label="Tistory"
                bgColor="bg-[#ff6900]"
                hoverColor="hover:bg-[#ff7a1a]"
                icon={<TistoryIcon />}
              />
            </div>
          </div>

          {/* 프로필 이미지 영역 */}
          <div className="relative shrink-0 w-112.5 h-117.5 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={imgMe}
              alt="고범석 프로필"
              className="w-full h-full object-cover"
            />
            {/* 오버레이 효과 */}
            <div className="absolute inset-0 shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function IconSVG({ path, path2 }: { path: string; path2?: string }) {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d={path}
        stroke="white"
        strokeWidth="1.66"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {path2 && (
        <path
          d={path2}
          stroke="white"
          strokeWidth="1.66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <path d={SOCIAL_SVG.LINKEDIN.BG_SQUARE} fill="#0A66C2" />
      <path d={SOCIAL_SVG.LINKEDIN.IN_TEXT} fill="white" />
    </svg>
  );
}

function TistoryIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <path d={SOCIAL_SVG.TISTORY.DOTS} fill="white" />
    </svg>
  );
}
