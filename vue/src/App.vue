<template>
  <div class="app">
    <h1>Posts Page</h1>
    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Create Post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      >
      </post-form>
    </my-dialog>
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
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "App",
  components: {
    MyButton,
    MyDialog,
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Test Title 1', body: 'Test Body 1'},
        {id: 2, title: 'Test Title 2', body: 'Test Body 2'},
        {id: 3, title: 'Test Title 3', body: 'Test Body 3'},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
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