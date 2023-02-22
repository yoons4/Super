# Youtube sample website (version 1)
1. Website's address: https://yoons4.github.io/youtube-website-version-1/
2. 컴퓨터 언어: React.
3. 설명: 보통 YouTube Website처럼 모양이 비슷하지만 보통 엡사이트가 가져야 할 기능들을 충분히 가지고 있다.

***

## 유투브 해더

--첫번째는 유투브 해더가 있었다. 기능이 없기는 하나 모든 유투브 엡사이트의 CSS Style의 기본 하나다. 쉽게 말하자면 자신에 대한 표현이다.
<img width="1439" alt="Screenshot 2023-02-22 at 3 11 50 PM" src="https://user-images.githubusercontent.com/44684815/220537846-1dfdc82b-f920-4118-98b8-7451790e26b8.png">

***

## 유투브 비디오

--비디오 이름은 "VID-20220119-WA0027 (1).mp4". 이 페이지를 열자

    <section className = "player">
        <video src = {videoSangha} controls autoPlay muted></video>
    </section>

--내가 왜 "controls autoPlay muted"를 더했나면 엡사이트를 열자마자 비디오가 직접 시작해야 하니까.

***

## 페이지 크기

--그리고 Responsive Web Design에 대한 Youtube sample website의 페이지 크기 규칙이 있다.

    @media only screen and (min-width: 768px){
        .infoAndUpNext{
            flex-direction: row;
            margin: 12px 0;
        }
    }
    
--만약 내가 그 엡사이트 페이지 넓이 (min-width)를 768px보다 더 줄인다면 비디오 아래에 있는 코드 section들의 위치 순서가 세로로 줄 쓰게된다.

<img width="751" alt="Screenshot 2023-02-22 at 3 40 16 PM" src="https://user-images.githubusercontent.com/44684815/220542761-9ae69735-ccd9-4387-8494-ee62cfe81b09.png">
 



--그 반대로 앱사이트의 넒이가 768px이거나 보다 더 큰다면 비디오 아래에 있는 section들의 위치 순서가 가로로 정리 되어진다.

<img width="1440" alt="Screenshot 2023-02-22 at 3 39 41 PM" src="https://user-images.githubusercontent.com/44684815/220542653-6542cf44-b989-43a9-b49f-0b3289a2f976.png">

***

## I like this / I dislike this.

--나는 이 진짜 버튼처럼 생긴 버튼을 만들었어요.
<img width="173" alt="Screenshot 2023-02-22 at 4 38 29 PM" src="https://user-images.githubusercontent.com/44684815/220553957-acb738db-e2c4-4c11-a4fc-8c66b21edcd0.png">

--파란색 버튼은 "I like this" button. 
--빨간색 버튼은 "I displike this" button.
--버튼들 사이에는 숫자가 있는데 이 비디오에 찬성하는 사람들의 수를 나타냄.

***


