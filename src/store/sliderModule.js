import axios from "axios";

export const sliderModule = {
    state: () => ({
        sliders: [],
        loading: false,
    }),

    mutations: {
        setSliders(state, sliders) {
            state.sliders = sliders;
        },
        setLoading(state, bool) {
            state.loading = bool
        }
    },

    getters: {
        getSliders(state) {
            return [...state.sliders];
        }
    },

    actions: {
        async fetchSliders({state, commit}) {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/wls/slider');
                commit('setSliders', response.data.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true,
}