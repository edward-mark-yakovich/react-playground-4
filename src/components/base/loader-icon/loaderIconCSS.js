export default {
    loader: init => `absolute top-6 right-6 transition-all ${init ? "opacity-1 visible" : "opacity-0 invisible"}`,
    loader_message: "sr-only",
    loader_spin: "relative w-16 h-16 animate-spin",
    loader_spin_svg: "w-full"
}