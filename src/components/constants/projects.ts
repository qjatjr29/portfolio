import tossImage from "../../public/toss.jpeg";
import locusImage from "../../public/locus.png";

export type ProjectIcon =
  | { type: "emoji"; value: string }
  | { type: "image"; src: string; alt?: string };

export interface Project {
  id: string;
  emoji: ProjectIcon;
  title: string;
  description: string;
  goal?: string;
  subtext?: string;
  period: string;
  role: string;
  techStack: string[];
  achievements: {
    title: string;
    detail: string | string[];
  }[];
  links: {
    type: "github" | "service" | "notion" | "video" | "blog";
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
    id: "toss_bank_clone",
    emoji: { type: "image", src: tossImage, alt: "Toss" },
    title: "Toss Bank Clone ",
    description:
      "뱅킹 도메인의 핵심 문제(동시성, 분산 트랜잭션, 멱등성)을 경험해보고 해결해보기 위한 개인 프로젝트",
    period: "2026.03 - 진행중",
    role: "Backend Developer",
    techStack: [
      "Kotlin",
      "Spring Boot",
      "Spring WebFlux",
      "Spring Cloud Gateway",
      "JPA/Hibernate",
      "MySQL",
      "Redis",
      "Kafka",
      "Docker / Docker Compose",
      "Git",
    ],
    achievements: [
      {
        title: "Redisson 분산락을 이용한 이체 동시성 제어 및 데드락 방지",
        detail: [
          "Redisson과 DB 비관적 락을 결합한 Double-Lock 아키텍처를 도입하여 DB 커넥션 풀 고갈 방지 및 정합성 보장",
          "이체 시 두 계좌의 락을 획득할 때 항상 작은 ID 순서로 획득하도록 강제하여 교착 상태(Deadlock) 원천 차단",
        ],
      },
      {
        title: "멱등성 키(Idempotency Key) 기반 중복 결제 방어 체계 구축",
        detail:
          "고유 키를 활용해 동일한 이체 요청 시 이중 출금을 방지하는 멱등성 보장 로직 구현",
      },
      {
        title: "Orchestration Saga 패턴 기반 분산 트랜잭션 설계 및 구현",
        detail: [
          "이체 기능을 MSA 분리하며 출금 → 입금 → 보상의 흐름을 제어하는 Orchestration Saga 구조 설계",
          "4xx(실패)와 5xx(결과 불명)를 별도 상태로 분리하여 보상 트랜잭션과 재조회 흐름을 분리",
          "9개 상태로 모든 실패 시나리오 모델링",
        ],
      },
    ],
    links: [
      {
        type: "github",
        label: "Github",
        url: "https://github.com/qjatjr29/toss-banking-clone-project",
      },
      {
        type: "github",
        label: "Github Wiki",
        url: "https://github.com/qjatjr29/toss-banking-clone-project/wiki",
      },
    ],
    colors: {
      from: "rgb(173, 70, 255)",
      to: "rgb(152, 16, 250)",
    },
  },
  {
    id: "locus",
    emoji: { type: "image", src: locusImage, alt: "Locus" },
    title: "Locus",
    description:
      "생각이 떠오른 '장소'를 함께 기록하고 기록을 연결하여 기반 기억 기록 서비스",
    goal: "네이버 부스트캠프 웹·모바일 10기  웹 풀스택 그룹 프로젝트",
    // subtext: "네이버 부스트캠프 웹·모바일 10기  웹 풀스택 그룹 프로젝트",
    period: "2025.12 - 2026.02",
    role: "Backend Developer",
    techStack: [
      "Typescript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "RabbitMQ",
      "Prisma",
      "Jest",
      "Firebase Cloud Messaging",
      "Naver Cloud Platform",
    ],
    achievements: [
      {
        title: "Elasticsearch 도입 및 기록 검색 기능 설계 및 구현",
        detail: [
          "필드별 가중치 및 best_fields 전략을 사용해 제목, 태그등 검색 결과 우선순위 구현",
          "Search After(Cursor 기반) 방식을 통한 페이지네이션 처리로 깊은 페이지 조회시에도 일정한 성능 유지",
        ],
      },
      {
        title: "Transaction Outbox Pattern과 RabbitMQ를 통한 데이터 동기화",
        detail: [
          "DB 트랜잭션 내에 Outbox 테이블을 활용하여 PostgreSQL 데이터와 Elasticsearch 인덱스 간의 원자적 저장 보장",
          "RabbitMQ를 사용해 검색 엔진 장애가 메인 서비스(기록 작성)로 전파되지 않도록 차단",
        ],
      },
      {
        title: "Redis 시간 버킷 기반 알림 시스템 설계",
        detail: [
          "사용자의 알림 시간을 Redis Hash 자료구조에 미리 그룹핑하여 조회 복잡도를 O(1)로 개선",
          "FCM 전송 실패 시 RabbitMQ 재시도 큐를 활용해 최대 3회 자동 재시도 및 실패한 사용자만 선별하여 처리하는 부분 실패 대응 로직 구현",
        ],
      },
      {
        title: "인증/인가 및 유저 기능 구현",
        detail: [
          "Refresh Token을 HttpOnly /Secure 쿠키로 관리",
          "로그아웃 시 Access Token을 Redis 블랙리스트에 등록(TTL 기반)하여 JWT의 즉각적인 무효화 문제 해결",
        ],
      },
    ],
    links: [
      {
        type: "service",
        label: "서비스 링크",
        url: "https://dev.locus.io.kr",
      },
      {
        type: "blog",
        label: "팀 블로그",
        url: "https://locus-log.tistory.com/",
      },
      {
        type: "github",
        label: "GitHub Repository",
        url: "https://github.com/boostcampwm2025/web06-locus",
      },
      {
        type: "github",
        label: "GitHub Wiki",
        url: "https://github.com/boostcampwm2025/web06-locus/wiki",
      },
    ],
    colors: {
      from: "rgb(171, 201, 254)",
      to: "rgb(188, 213, 255)",
    },
  },
  {
    id: "beomstory",
    emoji: { type: "emoji", value: "📹" },
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
      {
        type: "blog",
        label: "블로그 정리",
        url: "https://beomsic.tistory.com/category/%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/beomstory",
      },
    ],
    colors: {
      from: "rgb(198, 198, 199)",
      to: "rgb(203, 203, 203)",
    },
  },
  {
    id: "igotjeogot",
    emoji: { type: "emoji", value: "✈️" },
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
        detail: [
          "Swagger를 통해 명확하고 가독성 있는 API 문서화 작업 수행",
          "Jira, Notion, Slack 등의 협업 툴을 사용하고 스프린트를 통해 프로젝트 진행, 주차별 회고를 통해 문제 개선",
        ],
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
