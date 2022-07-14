<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  username: {
    required: true,
    type: String,
  },
});
const githubUser = ref({
  login: "",
  avatar_url: "",
  followers: "",
  created_at_year: 0,
});

const fetchGithubUser = async () => {
  const response = await fetch(
    `https://api.github.com/users/${props.username}`
  );
  return response.json();
};
const isFetchGithubUserResponseValid = (response) => {
  return typeof response.message === "undefined";
};
const setGithubUser = (response) => {
  const { login, avatar_url, followers, bio, created_at, html_url } = response;

  githubUser.value.login = login;
  githubUser.value.avatar_url = avatar_url;
  githubUser.value.followers = followers;
  githubUser.value.bio = bio;
  const createdAt = new Date(created_at);
  githubUser.value.created_at_year = createdAt.getFullYear();
  githubUser.value.html_url = html_url;
};
const initGithubUser = () => {
  fetchGithubUser().then((response) => {
    if (isFetchGithubUserResponseValid(response)) {
      setGithubUser(response);
    } else {
      alert(response.message);
    }
  });
};

onMounted(() => {
  initGithubUser();
});
</script>

<template>
  <div class="ui card">
    <div class="image">
      <img
        :src="githubUser.avatar_url ? githubUser.avatar_url : '/img.png'"
        alt="Github avatar"
      />
    </div>
    <div class="content">
      <a :href="githubUser.html_url" class="header" target="_blank">{{
        githubUser.login
      }}</a>
      <div class="meta">
        <span class="date">Joined in {{ githubUser.created_at_year }}</span>
      </div>
      <div class="description">
        {{ githubUser.bio }}
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        {{ githubUser.followers }} Friends
      </a>
    </div>
  </div>
</template>

<style scoped></style>
