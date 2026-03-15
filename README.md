# Face Avatar Maker

얼굴 전용 프로필 아바타 커스터마이저.
그레이스케일 SVG 기반으로, 이목구비/헤어/액세서리를 조합해 나만의 아바타를 만듭니다.

**[Demo](https://burgerpaak.github.io/face-avatar-maker/)**

---

## Features

- 8가지 카테고리 (얼굴형, 피부, 눈, 눈썹, 코, 입, 헤어스타일, 액세서리)
- 46가지 옵션 조합
- 랜덤 아바타 생성
- Undo / Redo
- PNG 다운로드 (560x640)
- 반응형 (모바일 대응)

## Tech Stack

- 단일 HTML 파일
- 순수 CSS + Vanilla JS
- SVG 인라인 렌더링
- 외부 의존성 없음 (Google Fonts 제외)

## Development

로컬에서 실행:

```bash
python3 -m http.server 8080
```

`http://localhost:8080` 접속

## Deployment

`main` 브랜치에 push하면 GitHub Actions를 통해 GitHub Pages에 자동 배포됩니다.

## License

MIT
