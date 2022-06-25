<template>
  <div class="app">
    <post-form
        @create="createPost"
    >
    </post-form>
    <post-list
        :posts="posts"
        @remove="removePost"
    >
    </post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  name: "App",
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Test Title 1', body: 'Test Body 1'},
        {id: 2, title: 'Test Title 2', body: 'Test Body 2'},
        {id: 3, title: 'Test Title 3', body: 'Test Body 3'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>