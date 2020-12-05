  const webURL = "https://amflzhem.github.io/racoon";

  document.addEventListener("DOMContentLoaded", function() {
    Kakao.init("d0330e39cac07ecabf61be123b249810");

    Kakao.Link.createDefaultButton({
        container: "#share",
        objectType: "feed",
        content: {
          title: "나의 너구리 유형은 " + document.getElementsByClassName("header")[0].innerText + "!",
          description: "당신과 꼭 맞는 너구리 유형을 찾아보세요!",
          imageUrl: document.getElementsByTagName("img")[0].src,
          link: {
            mobileWebUrl: webURL
          }
        },
        buttons: [
          {
            title: "테스트 해보기",
            link: {
              mobileWebUrl: webURL
            }
          }
        ]
      });   
});

