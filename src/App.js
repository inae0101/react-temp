/*
  JSX : HTML문법과 비슷하게 동적으로 DOM을 생성해주는 문법 체계 (가상DOM: virtualDOM)
  Component: JSX를 통해서 특정 기능을 하는 가상DOM구조를 재활용가능하게 함수형태로 컴포넌트
*/

function App() {
	return (
		<div className='App'>
			<header>
				<h1>Logo</h1>

				<ul id='gnb'>
					<li>menu</li>
					<li>menu</li>
					<li>menu</li>
				</ul>
			</header>

			<figure>Visual</figure>

			<section>
				<article>content1</article>
				<article>content2</article>
				<article>content3</article>
			</section>

			<footer>footer</footer>
		</div>
	);
}

export default App;
