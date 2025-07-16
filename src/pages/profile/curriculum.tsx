import styled from "styled-components"
import { Text } from "../../components/Text";
import { useRef } from "react";

export const Curriculum = () => {
    const textareaRefs = useRef<HTMLTextAreaElement[]>([]);

    const handleChange = (index: number) => {
        const textarea = textareaRefs.current[index];
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    return (
        <Wrapper>
            <Text variant="Label" weight={700}>커리큘럼</Text>
            <ContentWrapper>
                {Array.from({ length: 7 }).map((_, i) => (
                    <DayBlock key={i}>
                        <Text variant="Caption" weight={700} color="gray.900">{i + 1}일차</Text>
                        <Textarea
                            placeholder={`${i + 1}일차에 진행할 멘토링 내용을 작성해주세요.`}
                            ref={(el) => {
                                textareaRefs.current[i] = el!;
                            }}
                            onChange={() => handleChange(i)}
                            rows={1}
                        />
                    </DayBlock>
                ))}
            </ContentWrapper>
            <Button>
                <Text variant="Caption" weight={700} color="white">작성 완료</Text>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px 20px 24px;
    height: 100vh;
`;

const Button = styled.button`
    width: 100%;
    height: 57px;
    margin-top: auto;
    background-color: ${({theme}) => theme.colors.main[500]};
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    width: 100%;
    background-color: #F8F8F8;
    border-radius: 4px;
    padding: 16px;
    gap: 12px;
    overflow-y: auto;
    max-height: 460px;
`;

const Textarea = styled.textarea`
    width: 100%;
    background-color: #F8F8F8;
    border: none;
    outline: none;
    font-family: 'Pretendard', sans-serif;
    &::placeholder {
        color: ${({theme}) => theme.colors.gray[500]};
    }
`;

const DayBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;