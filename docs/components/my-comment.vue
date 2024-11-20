<template>
  <div id="gitalk-container"></div>
</template>

<script setup>
import Gitalk from "gitalk";
import { onMounted, nextTick } from "vue";

const gitalk = new Gitalk({
  clientID: "Ov23liORJvkDZxDKI3LC",
  clientSecret: "3d85fa1a9c2f0c7628d8a9ace117bf710566f8be",
  repo: "boyxlj",
  owner: "boyxlj",
  admin: ["boyxlj"],
  github_id: "boyxlj",
  id: location.pathname,
  distractionFreeMode: false,
});

onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>

<style lang="scss">
.gt-btn-preview {
  border-color: var(--vp-button-alt-border) !important;
  color: var(--vp-button-alt-text) !important;
  background-color: var(--vp-button-alt-bg) !important;
}

.gt-btn-public,
.gt-btn-login {
  border-color: var(--vp-button-brand-border) !important;
  color: var(--vp-button-brand-text) !important;
  background-color: var(--vp-button-brand-bg) !important;
}

.gt-header-textarea,
.gt-header-preview {
  background-color: var(--vp-c-bg-alt) !important;
}

.gt-container .gt-meta {
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

.gt-comment-content {
  background-color: var(--vp-c-bg-alt) !important;
  border-radius: 6px !important;
  margin-bottom: 0.5rem !important;
  cursor: pointer !important;
  box-sizing: border-box !important;
  &:hover {
    box-shadow: 0 0 0 0.08rem var(--vp-c-divider) !important;
  }
  .gt-comment-body {
    color: var(--vp-c-text-1) !important;
  }
}

.gt-container {
  a,
  .gt-svg {
    color: var(--vp-c-brand-1) !important;
  }
  svg {
    fill: var(--vp-c-brand-1) !important;
  }
}
</style>
