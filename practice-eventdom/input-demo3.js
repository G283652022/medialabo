let b = document.querySelector('button#print');
b.addEventListener('click', greeting);

// 2. イベントハンドラの定義
function greeting() {
	let i = document.querySelector('input[name="shimei"]');
	let shimei = i.value;
	console.log('こんにちは! ' + shimei + ' さん');
}