export interface AboutItem {
  id: string;
  iconType: "user" | "check" | "users";
  iconColor: string;
  iconBgColor: string;
  content: {
    prefix?: string;
    highlight: string;
    middle?: string;
    highlight2?: string;
    suffix: string;
    highlightColor: string;
  };
}

export const ABOUT_ITEMS: AboutItem[] = [
  {
    id: "tech",
    iconType: "user",
    iconColor: "#155DFC",
    iconBgColor: "bg-[#dbeafe]",
    content: {
      prefix: "항상 ",
      highlight: "최신 기술에 관심을",
      suffix: " 가지며 이를 프로젝트에 적용하며 흥미를 느낍니다.",
      highlightColor: "text-[#155dfc]",
    },
  },
  {
    id: "soft-skill",
    iconType: "check",
    iconColor: "#00A63E",
    iconBgColor: "bg-[#dcfce7]",
    content: {
      prefix: "제 장점은 ",
      highlight: "사람들과 빠르게 친해지는 친화력",
      middle: "과 ",
      highlight2: "배움을 좋아하고 끝까지 해내고자",
      suffix: " 하는 것이라 생각합니다.",
      highlightColor: "text-[#00a63e]",
    },
  },
  {
    id: "feedback",
    iconType: "users",
    iconColor: "#9810FA",
    iconBgColor: "bg-[#f3e8ff]",
    content: {
      highlight: "동료들의 피드백을 수용하는 태도를 통해",
      suffix:
        " 모르는 것이 생기면 빠르게 질문하고 의견을 공유하며 함께 고민하고 대화하는 것을 좋아합니다.",
      highlightColor: "text-[#ad46ff]",
    },
  },
];
