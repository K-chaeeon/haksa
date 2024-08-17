document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.querySelector('.arrow.up'); // 위쪽 화살표 요소 선택
    const downArrow = document.querySelector('.arrow.down'); // 아래쪽 화살표 요소 선택
    const list = document.querySelector('.recently-viewed ul'); // 최근 본 상품 목록 선택
    let scrollPosition = 0; // 현재 스크롤 위치 저장 변수
    const itemHeight = 110; // 각 항목의 높이 (이미지 100px + 10px 마진)

    // 화살표의 활성화/비활성화 상태를 업데이트하는 함수
    function updateArrows() {
        const maxScrollPosition = list.scrollHeight - list.clientHeight; // 최대 스크롤 가능한 위치 계산
        upArrow.classList.toggle('disabled', scrollPosition <= 0); // 스크롤이 최상단이면 위쪽 화살표 비활성화
        downArrow.classList.toggle('disabled', scrollPosition >= maxScrollPosition); // 스크롤이 최하단이면 아래쪽 화살표 비활성화
    }

    // 위쪽 화살표 클릭 시 동작
    upArrow.addEventListener('click', function () {
        if (scrollPosition > 0) { // 스크롤 위치가 최상단보다 아래에 있는 경우에만 실행
            scrollPosition -= itemHeight; // 스크롤 위치를 한 항목만큼 위로 이동
            list.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // 스크롤을 부드럽게 이동
            updateArrows(); // 화살표 상태 업데이트
        }
    });

    // 아래쪽 화살표 클릭 시 동작
    downArrow.addEventListener('click', function () {
        const maxScrollPosition = list.scrollHeight - list.clientHeight; // 최대 스크롤 가능한 위치 계산
        if (scrollPosition < maxScrollPosition) { // 스크롤 위치가 최하단보다 위에 있는 경우에만 실행
            scrollPosition += itemHeight; // 스크롤 위치를 한 항목만큼 아래로 이동
            list.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // 스크롤을 부드럽게 이동
            updateArrows(); // 화살표 상태 업데이트
        }
    });

    updateArrows(); // 초기 상태에서 화살표 상태 업데이트
});
