import axios from "axios";

export const newsModule = {
    state: () => ({
        news: [],
        loading: false,
        limit: 20,
        page: 1,
        totalPages: 0,
        searchQuery: '',
        categories: [],
        selectedSort: '',
        sortOptions: [],
    }),

    mutations: {
        setNews(state, news) {
            state.news = news;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setLoading(state, bool) {
            state.loading = bool;
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        }
    },

    getters: {
        getNews(state) {
            return [...state.news];
        }
    },

    actions: {
        async fetchNews({state, commit}) {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/wls/news', {
                    params: {
                        limit: 4,
                    }
                });
                commit('setNews', response.data.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true,
}