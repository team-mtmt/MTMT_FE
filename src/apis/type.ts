// 멘토 매칭 추천
// export type getMatchingMentoResponse = {
    
// }

import Bad from "../assets/imgs/ratings/bad.svg";
import Good from "../assets/imgs/ratings/good.svg";
import VeryBad from "../assets/imgs/ratings/veryBad.svg";
import VeryGood from "../assets/imgs/ratings/veryGood.svg";

interface Mentor {
  id: number;
  name: string;
  major: string;
  location: string | null;
  thumbnail: string | null;
  rating_section: rating;
}

export type MentorsResponse = {
  [category: string]: Mentor[];
};

export type mentorsArray = {
    id: number;
    name: string;
    major: string;
    location: string;
    thumbnail: string;
    rating_section: string;
}

export type rating = 'CIRCLE' | 'TRIANGLE' | 'SQUARE' | 'PENTAGON';

export const ratingIcons: Record<rating, string> = {
    CIRCLE: VeryGood,
    TRIANGLE: Good,
    SQUARE: Bad,
    PENTAGON: VeryBad,
};

export type category =
  | "SPORT_SOCCER"
  | "SPORT_BASKETBALL"
  | "SPORT_BADMINTON"
  | "SPORT_BASEBALL"
  | "SPORT_TENNIS"
  | "SPORT_WEIGHT"
  | "SPORT_PILATES"
  | "SPORT_BOXING"
  | "SPORT_SWIMMING"
  | "SPORT_CLIMBING"
  | "ART_DRAWING"
  | "ART_WATERCOLOR"
  | "ART_ACRYLIC"
  | "ART_DIGITAL_DRAWING"
  | "ART_ANIMATION"
  | "ART_WEBTOON"
  | "ART_GRAPHIC_DESIGN"
  | "MUSIC_AUDITION"
  | "MUSIC_GUITAR"
  | "MUSIC_VOCAL"
  | "MUSIC_PIANO"
  | "MUSIC_COMPOSITION"
  | "MUSIC_MIDI"
  | "MUSIC_RAP"
  | "MUSIC_THEORY"
  | "MUSIC_HOMERECORDING"
  | "MUSIC_DRUM"
  | "ACADEMIC_MATH_I"
  | "ACADEMIC_ENGLISH"
  | "ACADEMIC_KOREAN"
  | "ACADEMIC_CSAT"
  | "ACADEMIC_SCIENCE"
  | "ACADEMIC_CALCULUS"
  | "ACADEMIC_MIDTERM"
  | "ACADEMIC_HISTORY"
  | "ACADEMIC_CS"
  | "ACADEMIC_SOCIAL";

  export const categoryLabels: Record<string, string> = {
          SPORT_SOCCER: "축구",
          SPORT_BASKETBALL: "농구",
          SPORT_BADMINTON: "배드민턴",
          SPORT_BASEBALL: "야구",
          SPORT_TENNIS: "테니스",
          SPORT_WEIGHT: "헬스 / 웨이트 트레이닝",
          SPORT_PILATES: "필라테스 / 요가",
          SPORT_BOXING: "복싱 / 격투기",
          SPORT_SWIMMING: "수영",
          SPORT_CLIMBING: "등산 / 클라이밍",
          ART_DRAWING: "드로잉 / 스케치",
          ART_WATERCOLOR: "수채화",
          ART_ACRYLIC: "아크릴화 / 유채화",
          ART_DIGITAL_DRAWING: "디지털 드로잉",
          ART_ANIMATION: "애니메이션 / 콘셉트아트",
          ART_WEBTOON: "웹툰 / 만화",
          ART_GRAPHIC_DESIGN: "시각 디자인 / 그래픽 디자인",
          MUSIC_AUDITION: "오디션 준비",
          MUSIC_GUITAR: "기타",
          MUSIC_VOCAL: "보컬 트레이닝",
          MUSIC_PIANO: "피아노",
          MUSIC_COMPOSITION: "작곡",
          MUSIC_MIDI: "미디",
          MUSIC_RAP: "랩 / 힙합",
          MUSIC_THEORY: "음악 이론 / 화성학 기초",
          MUSIC_HOMERECORDING: "홈레코딩 / 유튜브 제작",
          MUSIC_DRUM: "드럼",
          ACADEMIC_MATH_I: "수학 I",
          ACADEMIC_ENGLISH: "영어 독해 / 회화",
          ACADEMIC_KOREAN: "국어 문학 / 비문학 독해",
          ACADEMIC_CSAT: "수능 실전 대비",
          ACADEMIC_SCIENCE: "과학탐구",
          ACADEMIC_CALCULUS: "미적분",
          ACADEMIC_MIDTERM: "내신 대비 문제풀이",
          ACADEMIC_HISTORY: "한국사 / 세계사",
          ACADEMIC_CS: "정보과학 / 코딩 기초",
          ACADEMIC_SOCIAL: "사회문화 / 정치와 법",
      };

// 멘토 상세보기
export type getMentoDetailResponse = {
    mentor: mentorsArray;
    curriculum: curriculumArray[];
    reviewCounts: reviewCountsArray[];
}

export type curriculumArray = {
    day: number;
    content: string;
}

export type reviewCountsArray = {
    review_type: string;
    count: number;
}


// 멘토링 신청하기
export type postMentoringApplyRequest = {
    mentorId: string;
    subject: string;
    startDate: string;
    endDate: string;
}


// 리뷰 작성하기
export type postReviewRequest = {
    mentoringId: number;
    review_content: string;
    mentoring_evaluation: MentoringEvaluation[];
}

export type MentoringEvaluation =
  | "TIME_COMMITMENT_GOOD" // 시간 약속을 잘 지켜요
  | "EXPLANATION_EASY" // 설명이 정말 이해하기 쉬웠어요
  | "KIND_AND_PATIENT" // 친절하고 배려심이 있어요
  | "COMMUNICATION_GOOD" // 소통이 원활했어요
  | "PASSIONATE" // 열정이 느껴졌어요
  | "ENJOYABLE_TIME" // 함께하는 시간이 즐거웠어요
  | "TIME_COMMITMENT_BAD" // 시간 약속을 지키지 않았어요
  | "COMMUNICATION_BAD" // 소통이 잘 안 되었어요
  | "EXPLANATION_HARD" // 설명이 어려웠어요
  | "NEED_MORE_ACTIVE"; // 조금 더 적극적이었으면 좋겠어요


// 커리큘럼 생성
export type postCurriculumRequest = {
    curriculums: curriculumArray[];
}