import { createStore } from "vuex";
import { sliderModule } from "@/store/sliderModule.js";
import { newsModule } from "@/store/newsModule.js";
import { videoModule } from "@/store/videoModule.js";

export default createStore({
    modules: {
        slider: sliderModule,
        news: newsModule,
        video: videoModule,
    },
});