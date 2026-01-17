export interface AwardItem {
  id: string;
  date: string;
  title: string;
  type: "certification" | "paper" | "award";
  role?: string;
  descriptions?: string[];
  link?: {
    url: string;
    label?: string;
  };
}

export const AWARDS: AwardItem[] = [
  {
    id: "sqld",
    date: "2025.04",
    title: "SQLD(SQL 개발자) 자격증 취득",
    type: "certification",
  },
  {
    id: "yolo-paper",
    date: "2022.06.29 ~ 07.01",
    title: "YOLO 모델을 이용한 동영상 하이라이트 추출기 논문",
    type: "paper",
    role: "백엔드 개발 담당",
    descriptions: [
      "YOLO 모델을 이용해 영상속 사람들이 웃는 모습을 판단",
      "한국 컴퓨터 종합 학술대회(KCC2022) 발표 대상으로 채택되어 ICC 제주에서 발표",
    ],
    link: {
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11124047",
    },
  },
  {
    id: "khuthon-2021",
    date: "2021.11.12 ~ 11.13",
    title: "경희대학교 소프트웨어 해커톤 'khuthon 2021' 대상",
    type: "award",
    role: "백엔드 개발 담당",
    descriptions: [
      "Flask, OpenCV를 통해 사용자가 눈을 감고 있는지 주기적으로 측정 및 판단",
      "Spring boot을 이용하여 클라이언트와의 통신 및 DB 연동",
      "Firebase Cloud Messaging을 이용해 push 알림 기능 구현",
    ],
  },
  {
    id: "programming-contest",
    date: "2021.05",
    title: "2021학년도 경희대학교 봄 프로그래밍 경시대회 실천상",
    type: "award",
  },
  {
    id: "info-tech",
    date: "2021.12",
    title: "정보처리기능사 자격증 취득",
    type: "certification",
  },
];
