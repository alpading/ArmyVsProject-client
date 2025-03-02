import { useEffect } from 'react'
import { shareKakaoImage, clientUrl, reactAppKey } from '../modules/global.js'


const { Kakao } = window

const ShareKakao = (props) => {
	
	useEffect(() => {
		Kakao.init(reactAppKey)
		console.log(Kakao.isInitialized)
	})

	Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: props.genreName,
      description: props.elemName,
      imageUrl:
        'https://ifh.cc/g/VlpPoX.jpg',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: clientUrl,
        webUrl: clientUrl,
      },
    },
    buttons: [
      {
        title: '지금 해보러 가기',
        link: {
          mobileWebUrl: clientUrl,
          webUrl: clientUrl,
        },
      },
    ],
  })
	
	return(
	<a id="kakaotalk-sharing-btn" href="javascript:;">
		<img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
			alt="카카오톡 공유 보내기 버튼" />
	</a>
	)
}

export default ShareKakao