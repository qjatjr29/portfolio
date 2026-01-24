import {
  Plus,
  Check,
  Rocket,
  Share2,
  MessageSquare,
  BookOpen,
} from "lucide-react";
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
    company: "당근",
    logo: karrotImage,
    role: "데이터가치화 팀, Software Engineer (Backend 인턴)",
    period: "2024.07 - 2024.10",
    details: [
      {
        title: "KarrotMetrics Explorer 서비스 유지보수 및 백엔드 개발",
        content:
          "FastAPI 기반의 사내 지표 시각화 대시보드 유지보수 및 구성원 요청 사항 대응",
        icon: Plus,
        iconBg: "bg-blue-50",
        iconColor: "#155DFC",
      },
      {
        title: (
          <>
            BigQuery 직접 쿼리 방식의{" "}
            <span className="text-orange-600 font-bold">
              지연 시간(Latency) 문제 해결
            </span>
          </>
        ),
        content:
          "기존 수초~수십 초 소요되던 지표 조회 성능 향상을 위해 Redis 기반 캐싱 전략 도입",
        icon: Check,
        iconBg: "bg-orange-50",
        iconColor: "#FF8200",
      },
      {
        title: "Airflow DAG 연동을 통한 데이터 정합성 보장",
        content:
          "매일 자정 국가별 지표 갱신 시점에 맞춰 캐시를 자동 삭제 및 갱신하는 트리거 로직 구현",
        icon: Share2,
        iconBg: "bg-green-50",
        iconColor: "#00A63E",
      },
      {
        title: "지표 조회 속도 수십 초 → 밀리초(ms) 단위로 개선",
        badge: "🚀 성능 최적화",
        content: "응답 속도 단축을 통해 사내 구성원의 업무 효율성 향상",
        icon: Rocket,
        iconBg: "bg-purple-50",
        iconColor: "#9810FA",
      },
      {
        title: "문서화 및 협업 기반의 기술적 문제 해결",
        content:
          "문제 상황 및 개선 방향을 Notion/Slack에 문서화하여 공유하고 코드 리뷰를 통한 소통을 통해 빠르게 해결",
        icon: MessageSquare,
        iconBg: "bg-slate-50",
        iconColor: "#475569",
      },
      {
        title: "실무 역량 강화: 빠른 기술 습득 및 명확한 의사소통",
        content:
          "협업 도구를 활용한 팀원과의 소통으로 실무 개발 프로세스 및 문서화의 중요성을 확인",
        icon: BookOpen,
        iconBg: "bg-rose-50",
        iconColor: "#E11D48",
      },
    ],
  },
];
