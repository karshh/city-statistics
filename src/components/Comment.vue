<template>
<div>
    <p>{{ data.name }}</p>
    <p> {{ data.email }}</p>
    <p> {{ data.body }}</p>
    <hr/>
</div>
</template>

<script>
export default {
    name: "Comment",
    props: ["data"]
}
</script>

<style>

</style>