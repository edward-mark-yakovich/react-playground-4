export default {
  post_listing: pendingPosts => `relative transition-all ${pendingPosts ? "opacity-20" : ""}`,
  post_listing_grid: "flex flex-wrap justify-center items-start",
  post_btn_wrap: "w-1/2 md:w-1/4 max-w-md p-2",
  post_btn: "relative inline-block border-none outline-none rounded-md text-black bg-gray-200 w-full p-2 transform scale-100 transition-all hover:text-white hover:bg-gray-800 hover:scale-110",
  post_btn_img_wrap: "w-full h-20",
  post_btn_img: "inline-block w-full h-20 object-cover",
  post_btn_heading: "text-xs font-extralight mt-2 mb-4"
}

  