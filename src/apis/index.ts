import instance from "./axios";
import { getMentoDetailResponse, postCurriculumRequest, postMentoringApplyRequest, postReviewRequest } from "./type";

// 멘토 추천 리스트 (matching.tsx)
export const getMatchingMento = async () => {
    return await instance.get('/mentors/matching')
}

// 멘토 상세보기 (profile.tsx)
export const getMentoDetail = async (mentorId: string) => {
    return await instance.get<getMentoDetailResponse>(`/mentors/${mentorId}`)
}

// 멘토링 신청하기 (profile.tsx)
export const postMentoringApply = async (data: postMentoringApplyRequest) => {
    return await instance.post('/mentoring/apply', data);
}

// 멘토링 종료 (채팅에서 끝내기 버튼 누름, chatting.tsx)
export const putMentoringEnd = async (mentoringId: string) => {
    return await instance.put('/mentoring/end', {mentoringId});
}

// 리뷰 작성하기 (/review/write.tsx)
export const postReview = async (data: postReviewRequest) => {
    return await instance.post('/reviews', data);
}

// 커리큘럼 (/profile/curriculum.tsx)
export const postCurriculum = async (data: postCurriculumRequest) => {
    return await instance.post('/curriculum', data);
}