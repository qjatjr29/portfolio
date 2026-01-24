export interface EducationItem {
  id: string;
  period: string;
  title: string;
  items: string[];
  type: "bootcamp" | "community" | "university";
  gradient: {
    from: string;
    to: string;
  };
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "boostcamp",
    period: "2025.06 ~ 2026.02",
    title: "네이버 부스트캠프 웹·모바일 10기 웹 풀스택",
    type: "bootcamp",
    gradient: { from: "rgb(0, 201, 80)", to: "rgb(0, 166, 62)" },
    items: [
      "CS 기초 개념을 기반으로 문제를 정의하고 설계하는 연습",
      "결과를 개선하고 동료와 함께 토론하며 사고를 확장",
      "개발자에게 필요한 분야별 도메인 지식과 기술을 학습",
      "현업 개발자와 코드 리뷰를 진행",
      "팀원과 함께 의사 결정하여 사용자를 고려한 완성도 있는 서비스를 개발",
      "클라이언트에서 서버까지 웹 전반의 동작 원리를 이해",
    ],
  },
  {
    id: "ausg",
    period: "2022.07 ~ 현재",
    title: "AUSG",
    type: "community",
    gradient: { from: "rgb(43, 127, 255)", to: "rgb(21, 93, 252)" },
    items: [
      "IT 연합 동아리",
      "여러 주제에 대한 발표 세션, 스터디 활동, 네트워킹 활동",
    ],
  },
  {
    id: "devcourse",
    period: "2022.03 ~ 2022.08",
    title: "프로그래머스 백엔드 데브코스 2기",
    type: "bootcamp",
    gradient: { from: "rgb(173, 70, 255)", to: "rgb(152, 16, 250)" },
    items: [
      "멘토링, 미션 기반 Java, Spring 교육 진행",
      "멘토링과 팀원간의 적극적인 코드 리뷰",
      "코드 리뷰, 페어 프로그래밍 등 협력과정을 경험",
      "여러 동료들과 스터디 활동 진행",
    ],
  },
  {
    id: "khu",
    period: "2017.03 ~ 2023.02",
    title: "경희대학교",
    type: "university",
    gradient: { from: "rgb(69, 85, 108)", to: "rgb(49, 65, 88)" },
    items: ["소프트웨어 융합대학 컴퓨터공학과 졸업", "학점: 3.6 / 4.5"],
  },
];
