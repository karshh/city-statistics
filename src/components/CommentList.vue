<template>
  <div>
      <div v-for="comment in comments"  :key="comment.id" >
          <Comment :data="comment" />
      </div>

  </div>
</template>

<script>

import Comment from './Comment';

export default {
    name: "CommentList",
    props: ["comments"],
    components: {
        Comment
    }
}
</script>

<style>

</style>