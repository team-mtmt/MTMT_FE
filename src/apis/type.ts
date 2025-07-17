// 멘토 매칭 추천
// export type getMatchingMentoResponse = {
    
// }

export type mentorsArray = {
    id: number;
    name: string;
    major: string;
    location: string;
    thumbnail: string;
    rating_section: string;
}


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