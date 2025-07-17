import styled from "styled-components"
import { Text } from "./Text"

export const ProfileIntro = () => {
    return (
        <Text>
            {`안녕하세요! 저는 18살 손희찬이라고 합니다. 
            평소에 에너지가 넘치고 활발한 성격이에요. 
            
            축구를 정말 좋아해서, 시간만 나면 친구들이랑 공 차러 나가거나, 혼자서도 공을 차며 스트레스를 풀곤 해요. 특히 팀플레이에서 오는 짜릿한 순간들이 너무 좋아서, 경기할 때면 완전 몰입해서 뛰어요. 좋아하는 선수나 팀 얘기 나오면 눈이 반짝반짝해질 정도로 축구에 진심입니다. 앞으로도 좋아하는 축구를 계속 즐기면서, 더 많은 사람들과 함께 뛰고 웃고 싶어요`}

        </Text>
    )
}

export const ProfileReview = () => {
    return (
        <ProfileReviewWrapper>
            <ReviewBoxWrapper>
                <ReviewBox>
                    <Text variant="Button">시간 약속을 잘 지켜요.</Text>
                </ReviewBox>
                <Text variant="Caption" weight={700}>1</Text>
            </ReviewBoxWrapper>
            <ReviewBoxWrapper>
                <ReviewBox>
                    <Text variant="Button">열정이 느껴졌어요.</Text>
                </ReviewBox>
                <Text variant="Caption" weight={700}>2</Text>
            </ReviewBoxWrapper>
        </ProfileReviewWrapper>
    )
}

const ProfileReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ReviewBoxWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const ReviewBox = styled.div`
    padding: 8px 12px;
    border: 1px solid ${({theme}) => theme.colors.gray[300]};
    background-color: #F8F8F8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
`;

export const ProfileCurriculum = () => {
    return (
        <ProfileCurriculumWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>1일차</Text>
                <Text variant="Button">
                    오리엔테이션 및 자기소개, 축구에 대한 관심사 공유. 각자의 포지션과 롤모델 이야기 나누기
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>2일차</Text>
                <Text variant="Button">
                    축구 기본기 훈련: 드리블, 패스, 슈팅의 기본 동작 익히기. 짧은 실습 후 피드백 나누기
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>3일차</Text>
                <Text variant="Button">
                    포지션별 역할과 전술 이해하기. 실제 프로 팀 전술 영상 분석을 통해 눈 축구 훈련!
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>4일차</Text>
                <Text variant="Button">
                    개인 피지컬 체크 및 맞춤형 피트니스 루틴 배우기. 축구선수 체력 관리법도 함께 알아보기
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>5일차</Text>
                <Text variant="Button">
                    미니게임 실습! 팀 나눠서 간단한 경기 진행하고, 경기 후 개인 및 팀 리뷰
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>6일차</Text>
                <Text variant="Button">
                    축구 관련 직업 탐색 (선수, 코치, 해설가, 피지컬 트레이너 등) 및 진로 멘토링 시간
                </Text>
            </CurriculumBoxWrapper>
            <CurriculumBoxWrapper>
                <Text variant="Caption" weight={700}>7일차</Text>
                <Text variant="Button">
                    나만의 축구 루틴 발표 및 수료식. 7일 동안 배운 점을 돌아보고 목표 설정
                </Text>
            </CurriculumBoxWrapper>
        </ProfileCurriculumWrapper>
    )
}

const ProfileCurriculumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CurriculumBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
