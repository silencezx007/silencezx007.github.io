/* 系统心跳徽章：读取 heartbeat.json，右下角显示 IWS 实时脱敏指标。
   点击展开叙事卡片，解释数据来源。
   数据由本机 iws/scripts/heartbeat_export.py 生成，只含计数，无任何敏感信息。 */
(function () {
  fetch("/heartbeat.json", { cache: "no-store" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d) return;

      var pill = document.createElement("button");
      pill.id = "sys-heartbeat";
      pill.type = "button";
      pill.setAttribute("aria-label", "系统心跳，点击查看说明");
      pill.innerHTML =
        '<span class="hb-dot"></span>' +
        '<span class="hb-text">系统心跳 · ' + d.tests + ' 项自动化测试在守护 · ' +
        d.batches_managed + ' 个采购批次数字化管理 · 本周推进 ' +
        d.batches_active_7d + ' 批 · ' + d.suppliers + ' 家供应商画像</span>' +
        '<span class="hb-time">' + d.updated_at + '</span>';

      var card = document.createElement("div");
      card.id = "sys-heartbeat-card";
      card.innerHTML =
        '<div class="hbc-title"><span class="hb-dot"></span>这不是装饰，是一台真实系统的心跳</div>' +
        '<p>这些数字由我自建的 <strong>IWS（智慧工作系统）</strong>从生产数据库里实时统计、' +
        '自动推送到这个页面——不是手写的。</p>' +
        '<ul>' +
        '<li><strong>' + d.tests + '</strong> 项自动化测试守护着系统每一次改动</li>' +
        '<li><strong>' + d.batches_managed + '</strong> 个国际采购批次全流程数字化管理</li>' +
        '<li>本周 <strong>' + d.batches_active_7d + '</strong> 批在推进 · <strong>' +
        d.suppliers + '</strong> 家供应商画像 · <strong>' + d.adyen_orders + '</strong> 个线上订单自动对账</li>' +
        '</ul>' +
        '<p class="hbc-tech">技术栈：SQLite + FastAPI + HTMX，AI 协作开发，' +
        'launchd 定时驱动。页面上的能力描述是静态的，这颗心跳是活的。</p>' +
        '<div class="hbc-time">数据更新于 ' + d.updated_at + '</div>';

      var css = document.createElement("style");
      css.textContent =
        "#sys-heartbeat{position:fixed;right:16px;bottom:16px;z-index:9999;" +
        "display:flex;align-items:center;gap:8px;max-width:min(560px,calc(100vw - 32px));" +
        "padding:8px 14px;border-radius:999px;cursor:pointer;" +
        "background:rgba(23,19,15,.88);color:#f4efe6;font:12px/1.4 'Inter','PingFang SC',sans-serif;" +
        "border:1px solid rgba(244,239,230,.18);backdrop-filter:blur(8px);" +
        "box-shadow:0 4px 18px rgba(23,19,15,.25);transition:transform .15s}" +
        "#sys-heartbeat:hover{transform:translateY(-2px)}" +
        ".hb-dot{width:8px;height:8px;border-radius:50%;flex:none;" +
        "background:#b9543a;animation:hb-pulse 1.6s ease-in-out infinite}" +
        "#sys-heartbeat .hb-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
        "#sys-heartbeat .hb-time{color:rgba(244,239,230,.55);flex:none}" +
        "@keyframes hb-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.8)}}" +
        "#sys-heartbeat-card{position:fixed;right:16px;bottom:64px;z-index:9999;" +
        "width:min(400px,calc(100vw - 32px));padding:18px 20px;border-radius:16px;" +
        "background:rgba(23,19,15,.94);color:#f4efe6;font:13px/1.7 'Inter','PingFang SC',sans-serif;" +
        "border:1px solid rgba(244,239,230,.18);backdrop-filter:blur(12px);" +
        "box-shadow:0 8px 32px rgba(23,19,15,.4);" +
        "opacity:0;transform:translateY(8px);pointer-events:none;transition:all .2s ease}" +
        "#sys-heartbeat-card.hbc-open{opacity:1;transform:translateY(0);pointer-events:auto}" +
        "#sys-heartbeat-card .hbc-title{display:flex;align-items:center;gap:8px;" +
        "font-weight:700;font-size:14px;margin-bottom:10px;font-family:Georgia,'Songti SC',serif}" +
        "#sys-heartbeat-card p{margin:0 0 8px}" +
        "#sys-heartbeat-card ul{margin:0 0 8px;padding-left:18px}" +
        "#sys-heartbeat-card li{margin:2px 0}" +
        "#sys-heartbeat-card strong{color:#e8a48f}" +
        "#sys-heartbeat-card .hbc-tech{color:rgba(244,239,230,.7);font-size:12px}" +
        "#sys-heartbeat-card .hbc-time{color:rgba(244,239,230,.5);font-size:11px;margin-top:6px}" +
        "@media(max-width:640px){#sys-heartbeat .hb-time{display:none}}";

      document.head.appendChild(css);
      document.body.appendChild(card);
      document.body.appendChild(pill);

      pill.addEventListener("click", function (e) {
        e.stopPropagation();
        card.classList.toggle("hbc-open");
      });
      document.addEventListener("click", function (e) {
        if (!card.contains(e.target)) card.classList.remove("hbc-open");
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") card.classList.remove("hbc-open");
      });
    })
    .catch(function () { /* 静默失败，不影响主页 */ });
})();
