export default {
  modal: isModalShown => `fixed flex content-center items-center w-full h-full top-0 left-0 z-50 ${isModalShown ? "opacity-0 animate-fade_in" : "animate-fade_out"}`,
  modal_content: isModalShown => `relative max-w-md w-full min-h-400 mx-auto bg-white z-40 p-5 origin-center transform rounded-lg ${isModalShown ? "scale-50 animate-zoom_in" : "animate-zoom_out"}`,
  modal_backdrop: "absolute w-full h-full bg-gray-900 top-0 left-0 z-30 opacity-90",
  modal_btn_close: "text-xs"
}

  