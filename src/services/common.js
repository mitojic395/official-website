import Api from './Api'

export default {

  getMembers () {
    return Api().get('api/profiles/')
  },
  getEvents () {
    return Api().get('api/events/')
  },
  getBlogPosts () {
    return Api().get('blog/posts/')
  },
  getPost (id) {
    return Api().get(`blog/posts/${id}/`)
  }
}
