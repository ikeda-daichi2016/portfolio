document.addEventListener("DOMContentLoaded", function() {
  // 監視対象の設定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.2 // 20%見えたらアニメーション開始
  });

  // fade-inクラスを持つ要素をすべて監視
  const targets = document.querySelectorAll('.fade-in');
  targets.forEach(target => observer.observe(target));
});