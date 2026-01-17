export interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  goal: string;
  subtext?: string;
  period: string;
  role: string;
  techStack: string[];
  achievements: {
    title: string;
    detail: string;
  }[];
  links: {
    type: "github" | "service" | "notion" | "video";
    label: string;
    url: string;
  }[];
  colors: {
    from: string;
    to: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "beomstory",
    emoji: "📹",
    title: "Beomstory",
    description: "장소 기반 사용자 일상 기록 작성, 검색, 관리 서비스",
    goal: "비동기 데이터 처리와 분산 트랜잭션을 통한 안정적인 서비스 구현을 목표",
    period: "2025.02 - 2025.04",
    role: "Backend & Frontend Developer",
    techStack: [
      "Kotlin Coroutine",
      "Spring Boot",
      "Spring Cloud",
      "Spring Data R2DBC",
      "MySQL",
      "Redis",
      "Kafka",
      "AWS",
      "NCP",
      "Next.js",
      "TypeScript",
    ],
    achievements: [
      {
        title: "Spring Data R2DBC + Coroutine을 활용한 비동기 DB 통신 구현",
        detail:
          "Kotlin Coroutine 환경에서 JPA 대신 R2DBC를 통해 논블로킹 I/O 기반 처리",
      },
      {
        title: "트랜잭션 아웃박스 패턴 + Kafka를 통한 데이터 일관성 확보",
        detail:
          "아웃박스 테이블과 Kafka를 이용해 메시지 유실 없이 분산 환경에서도 데이터 정합성 유지",
      },
      {
        title: "MySQL Full-Text Search 기반 검색 성능 개선",
        detail:
          "Full-Text Index 및 n-gram 파서를 적용해 한글 키워드 검색 품질 및 속도 향상",
      },
    ],
    links: [
      {
        type: "service",
        label: "서비스 링크",
        url: "https://beomstory-front.vercel.app/",
      },
      {
        type: "github",
        label: "Backend Repo",
        url: "https://github.com/qjatjr29/Beom-story",
      },
      {
        type: "github",
        label: "Frontend Repo",
        url: "https://github.com/qjatjr29/beomstory-front",
      },
    ],
    colors: {
      from: "rgb(198, 198, 199)",
      to: "rgb(203, 203, 203)",
    },
  },
  {
    id: "mongglemonggle",
    emoji: "💭",
    title: "몽글몽글",
    description: "AI 꿈해몽 & 맞춤 응원 메시지 서비스",
    goal: "단편적인 해몽이 아닌 꿈의 복잡한 상황까지 고려한 맞춤 해몽 제공",
    subtext: "비사이드 x NaverCloudPlatform 해커톤",
    period: "2025.03 - 2025.03",
    role: "Backend Developer",
    techStack: [
      "Java",
      "Spring Boot",
      "Github Actions",
      "Docker",
      "NCP",
      "NCP Clova Studio",
    ],
    achievements: [
      {
        title: "NCP VPC 기반 서버 생성 및 CI/CD 자동화",
        detail:
          "Naver Cloud Platform 환경에서 GitHub Actions를 활용한 자동 배포 구축",
      },
      {
        title: "HTTPS 보안 통신 구현",
        detail:
          "보안 통신 일관성을 위해 SSL 인증서 발급 및 도메인 적용으로 데이터 보호 강화",
      },
      {
        title: "CLOVA Studio AI 모델 프롬프트 최적화",
        detail:
          "심리적 위로와 응원 메시지 생성을 위한 AI 프롬프트 엔지니어링 및 모델 튜닝",
      },
    ],
    links: [
      {
        type: "github",
        label: "Github",
        url: "https://github.com/dreamcastle13579/server",
      },
    ],
    colors: {
      from: "rgb(173, 70, 255)",
      to: "rgb(152, 16, 250)",
    },
  },
  {
    id: "igotjeogot",
    emoji: "✈️",
    title: "이곳저곳",
    description: "자신이 경험한 여행 코스를 직접 작성, 공유하는 서비스",
    goal: "사용자 경험 기반의 여행 코스 큐레이팅 플랫폼",
    subtext: "프로그래머스 백엔드 데브코스 최종 팀 프로젝트",
    period: "2022.07 - 2022.08",
    role: "Backend Developer",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "MySQL",
      "Redis",
      "Jenkins",
      "AWS EC2",
      "AWS S3",
    ],
    achievements: [
      {
        title: "CI/CD 자동화 파이프라인 구축",
        detail: "Jenkins, S3, AWS CodeDeploy를 활용한 배포 프로세스 자동화",
      },
      {
        title: "JWT 기반 인증/인가 시스템",
        detail:
          "Spring Security와 JWT를 연동하여 안정적인 사용자 보안 및 권한 처리 구현",
      },
      {
        title: "협업 및 문서화 역량 강화",
        detail:
          "Swagger를 통한 API 문서화 및 Agile 방법론(Jira, Sprint)을 통한 협업 진행",
      },
    ],
    links: [
      {
        type: "github",
        label: "Github",
        url: "https://github.com/prgrms-web-devcourse/Team_09_p2p_BE",
      },
      {
        type: "notion",
        label: "Notion",
        url: "https://www.notion.so/09-48ce376644e14edeb9b6e41c646680e4?source=copy_link",
      },
      {
        type: "video",
        label: "발표 영상",
        url: "https://www.youtube.com/watch?v=wlYA6EuyhKg&ab_channel=Programmers",
      },
    ],
    colors: {
      from: "rgb(167, 201, 255)",
      to: "rgb(174, 201, 253)",
    },
  },
];
