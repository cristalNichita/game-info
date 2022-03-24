import axios from "axios";

export const videoModule = {
    state: () => ({
        videos: [],
    }),

    mutations: {
        setVideos(state, videos) {
            state.videos = videos;
        }
    },

    getters: {
        getVideos(state) {
            return [...state.videos];
        }
    },

    actions: {
        async fetchVideos({state, commit}) {
            try {
                const response = [
                    { id: 1, name: "Dark Souls", body: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X-lxs4d3WBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                    { id: 2, name: "Counter Strike", body: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mtYeiJc0Q2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
                ];
                commit('setVideos', response);
            } catch (e) {
                console.log(e);
            }
        }
    },
    namespaced: true,
}