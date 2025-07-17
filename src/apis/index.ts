import instance from "./axios";
import { getMentoDetailResponse, postMentoringApplyRequest } from "./type";

// 멘토 추천 리스트 (matching.tsx)
export const getMatchingMento = async () => {
    return await instance.get('/mentors/matching')
}

// 멘토 상세보기 (profile.tsx)
export const getMentoDetail = async () => {
    return await instance.get<getMentoDetailResponse>('/mentors/(멘토 id)')
}

// 멘토링 신청하기 (profile.tsx)
export const postMentoringApply = async (data: postMentoringApplyRequest) => {
    return await instance.post('/mentoring/apply', data);
}

// 멘토링 종료 (채팅에서 끝내기 버튼 누름, chatting.tsx)
export const putMentoringEnd = async (mentoringId: string) => {
    return await instance.put('/mentoring/end', {mentoringId});
}