const observer = new MutationObserver(() => {
  const searchResults = document.querySelectorAll('li.job-card-container__footer-item');
  searchResults.forEach(result => {
    if (result.textContent.trim() === "Applied") {
      // 해당 <li>의 가장 가까운 상위 <div>를 찾음
      const parentDiv = result.closest('div.job-card-container');

      if (parentDiv) {
        // 강조 스타일 추가 (배경색 변경)
        parentDiv.style.backgroundColor = "grey"; // 검은색 배경
        // parentDiv.style.color = "white"; // 글씨를 흰색으로
      }
    }
  });
});

// 감시 시작
observer.observe(document.body, { childList: true, subtree: true });
