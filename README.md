# Youtube sample website (version 1)
1. Website's address: https://yoons4.github.io/youtube-website-version-1/
2. 컴퓨터 언어: React.
3. 설명: 보통 YouTube Website처럼 모양이 비슷하지만 보통 엡사이트가 가져야 할 기능들을 충분이 가지고 있다.

###

--첫번째는 유투브 해더가 있었다. 기능이 없기는 하나 모든 유투브 엡사이트의 CSS Style의 기본 하나다. 쉽게 말하자면 자신에 대한 표현이다.
<img width="1439" alt="Screenshot 2023-02-22 at 3 11 50 PM" src="https://user-images.githubusercontent.com/44684815/220537846-1dfdc82b-f920-4118-98b8-7451790e26b8.png">

###

--그리고 Responsive Web Design에 대한 페이지 크기 규칙이 있다.

    @media only screen and (min-width: 768px){
        .infoAndUpNext{
            flex-direction: row;
            margin: 12px 0;
        }
    }
    
-만약 내가 이 페이지 넓이 (min-width)를 768px보다 

