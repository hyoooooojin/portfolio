🏡 homepage: https://hyoooooojin.github.io/thenorthface/

- portfolio layout

selected={selected}: Dashboard에서 Content로 selected 상태 값을 전달하는 props, Content는 그 값을 받아서 해당하는 콘텐츠를 렌더링

1. Dashboard는 selected 상태를 관리하고, 이를 Navbar에 전달
2. Navbar에서 메뉴를 클릭하면 setSelected 함수가 호출되어 selected 값을 변경
3. Dashboard는 selected와 components를 Content 컴포넌트에 전달하고, Content는 그에 맞는 콘텐츠를 렌더링

- display: none/block으로 요소를 제어했던 기존의 개발 방식과 달리, 상태에 따라 컴포넌트를 렌더링하는 방식을 적용하여, 컴포넌트 생명주기와 불필요한 렌더링 방지를 통해 성능 최적화에 대한 이해를 넓힐 수 있던 기회였다.

- Autoprefixer 플러그인을 적용하여 다양한 브라우저 환경에서도 일관된 스타일이 유지되도록 크로스 브라우징을 지원

- Normalize.css를 적용해 다양한 브라우저에서 일관된 스타일을 보여줄 수 있도록 개선
