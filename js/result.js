document.addEventListener("DOMContentLoaded", function() {
    Kakao.init("d0330e39cac07ecabf61be123b249810");

    Kakao.Link.createDefaultButton({
        container: "#share",
        objectType: "feed",
        content: {
          title: "나의 너구리 유형은?",
          description: "당신과 꼭 맞는 너구리 유형을 찾아보세요!",
          imageUrl: "https://amflzhem.github.io/racoon/images/%EA%B0%80%EC%9D%84%EB%84%88%EA%B5%AC%EB%A6%AC.jpg",
          link: {
            mobileWebUrl: "https://amflzhem.github.io/racoon"
          }
        },
        buttons: [
          {
            title: "테스트 해보기",
            link: {
              mobileWebUrl: "https://amflzhem.github.io/racoon"
            }
          }
        ]
      });   
});

 

