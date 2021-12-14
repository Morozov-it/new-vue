
export const postModule = {
    state: () => ({
        isAuth: false,
        posts: [],
        searchQuery: '',
        selectedSort: '',
        isPostsLoading: false,
        page: 1,
        limit: 10,
        totalPages: 0
    }), //это само состояние, лучше объявлять функцию, которая будет возвращать объект
    getters: {
        sortedPosts(state) {
                return [state.posts].sort((post1, post2) => {
                    return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]) 
                })
            },
            sortedAndSearchedPosts(state, getters) {
                return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
            }
    }, //это вычисляемые свойства (аналог computed)
    mutations: {
        toggleAuthorize(state) {
            state.isAuth = !state.isAuth
        },
        setPosts(state, isPostsLoading) {
            state.isPostsLoading = isPostsLoading
        },
        setPage(state, page) {
            state.page = page
        },
        setLoading(state, posts) {
            state.posts = posts
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }
    }, // это функции, внутри которых меняем конкретное поле в состоянии
    actions: {
        async fetchPosts({state, commit}) {
            try{
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (e) {
                alert(`${e.message}`);
            } finally {}
        },
        async loadMorePosts({state, commit}) {
            try{
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
                commit('setLoading', false);
            } catch (e) {
                alert(`${e.message}`);
            } finally {}
        },
    }, //это функции, внутри которых есть мутации, напрямую из actions не рекомендуется менять состояние! Здесь делаются side-эффекты (получение данных с сервера)
    namespaced: true
}