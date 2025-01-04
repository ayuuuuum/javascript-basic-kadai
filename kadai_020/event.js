const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const textList = document.getElementById('text');
    textList.textContent = 'ボタンをクリックしました';
})
