import styled from "styled-components"
import { Text } from "../../components/Text";
import CheckIcon from "../../assets/imgs/checkIcon.svg";
import { useNavigate } from "react-router-dom";

export const SecondPage = () => {
    const navigate = useNavigate();
    const participatedDays = [3, 6];
    const dayNumbers = [1, 2, 3, 4, 5, 6, 7];
    const fullDayNames = [
        { label: "일", day: 0 },
        { label: "월", day: 1 },
        { label: "화", day: 2 },
        { label: "수", day: 3 },
        { label: "목", day: 4 },
        { label: "금", day: 5 },
        { label: "토", day: 6 },
    ];

    const today = new Date().getDay();
    const rotatedDayNames = [...fullDayNames.slice(today), ...fullDayNames.slice(0, today)];
    const lastDay = rotatedDayNames[6].day;
    const isLastDay = today === lastDay;

    const handleNext = () => {
        navigate('/thirdPage');
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    {isLastDay ? (
                        <>
                        <Text variant="Mtitle" weight={700}>수고하셨습니다!</Text>
                        <Text variant="Mtitle" weight={700}>모든 멘토링 과정이 끝났어요</Text>
                        </>
                    ) : (
                        <>
                        <Text variant="Mtitle" weight={700}>남은 기간에도</Text>
                        <Text variant="Mtitle" weight={700}>열심히 참여해주세요!</Text>
                        </>
                    )}
                </TextWrapper>
                <DateBox>
                    <DateNames>
                        {rotatedDayNames.map(({ label, day }) => (
                            <Text
                                key={label}
                                variant="Caption"
                                color={day === 0 || day === 6 ? "gray.50" : undefined}
                            >
                                {label}
                            </Text>
                        ))}
                    </DateNames>
                    <DateNumbers>
                        {dayNumbers.map((num, index) => {
                            const currentDay = rotatedDayNames[index].day;
                            const isChecked = participatedDays.includes(currentDay);

                            return (
                                <CheckWrapper key={num}>
                                {isChecked && <img src={CheckIcon} alt="check" />}
                                <Text variant="Caption" color="main.400" weight={700}>
                                    {num}
                                </Text>
                                </CheckWrapper>
                            );
                        })}
                    </DateNumbers>
                </DateBox>
            </ContentWrapper>
            <BottomWrapper>
                <Button onClick={handleNext}>
                    <Text variant="Caption" weight={700} color="white">다음</Text>
                </Button>
            </BottomWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 20px 24px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 78px;
`;

const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 144px;
    border: 0.4px solid ${({theme}) => theme.colors.gray[400]};
    border-radius: 12px;
    padding-left: 12px;
    padding-right: 12px;
    gap: 16px;
`;

const DateNames = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const DateNumbers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main[50]};
    border-radius: 50px;
    padding: 3px 10px;
`;

const CheckWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
  }
`;

const BottomWrapper = styled.div`
    display: flex;
    margin-top: auto;
`;

const Button = styled.button`
    display: flex;
    width: 100%;
    height: 57px;
    border: none;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.main[500]};
    align-items: center;
    justify-content: center;
`;