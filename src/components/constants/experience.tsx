import { Plus, Check, Rocket } from "lucide-react";
import type { ReactNode } from "react";
import karrotImage from "../../public/karrot.png";

export interface ExperienceItem {
  id: string;
  company: string;
  logo: string; // 이미지 경로
  role: string;
  period: string;
  details: {
    title: ReactNode;
    content?: string;
    badge?: string;
    icon: any;
    iconBg: string;
    iconColor: string;
  }[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "daangn",
    company: "당근마켓",
    logo: karrotImage,
    role: "데이터가치화 팀, Software Engineer (Backend 인턴)",
    period: "2024.07 - 2024.10",
    details: [
      {
        title: "KarrotMetrics Explorer 서비스 유지보수 및 성능 향상",
        content: "FastAPI 기반 사내 데이터(지표) 시각화 대시보드",
        icon: Plus,
        iconBg: "bg-blue-50",
        iconColor: "#155DFC",
      },
      {
        title: (
          <>
            BigQuery 데이터 조회 지연 해결을 위한{" "}
            <span className="text-orange-600 font-bold">캐싱 도입</span>
          </>
        ),
        content: "국가별 지표 계산 완료 후 캐시 갱신을 위한 Airflow DAG 자동화",
        icon: Check,
        iconBg: "bg-green-50",
        iconColor: "#00A63E",
      },
      {
        title: "기존 조회 속도를 수십 초 → ms 단위로 단축",
        badge: "🚀 성능 개선 성과",
        icon: Rocket,
        iconBg: "bg-purple-50",
        iconColor: "#9810FA",
      },
    ],
  },
];
