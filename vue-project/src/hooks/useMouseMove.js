import { reactive, onMounted, onUnmounted } from "vue";
const useMouseMove = () => {
  const position = reactive({
    x: 0,
    y: 0,
  });

  const getMousePosition = (e) => {
    position.x = e.clientX;
    position.y = e.clientY;
  };

  const start = () => {
    window.addEventListener("mousemove", getMousePosition);
  };

  const end = () => {
    window.removeEventListener("mousemove", getMousePosition);
  };

  // 组件挂载时自动开始监听
  onMounted(() => {
    start();
  });

  // 组件卸载时自动清理监听器
  onUnmounted(() => {
    end();
  });

  return {
    position,
    start,
    end,
  };
};

export default useMouseMove;
