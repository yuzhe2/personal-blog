import { onMounted, onUnmounted, ref } from "vue";

export function useShow(scrollNum = 200) {
  const isShow = ref(false);

  function handleScrollShow() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop >= scrollNum) isShow.value = true
    else isShow.value = false
  }

  onMounted(() => window.addEventListener("scroll", handleScrollShow));
  onUnmounted(() => window.removeEventListener("scroll", handleScrollShow));

  return isShow
}
