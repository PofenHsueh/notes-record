<template>
  <div class='continer'>
    <div class="sideBar">
      <p>FreeNote.</p>
      <b-button class="sideBar--btn">
        <b-icon icon="plus-circle-fill"> </b-icon>
        <p>{{ $t("createNotes") }}</p>
      </b-button>
      <b-nav vertical>
        <b-nav-item v-for="(item, index) in items" :key="index">
          <b-icon :icon="item.icon"></b-icon>
          <p style="font-size:16px;">{{ $t(item.text) }}</p>
        </b-nav-item>
      </b-nav>
      <b-col class="sideBar--status">
        <div class="mode">
          <p>
            {{ $t("mode") }}
          </p>
          <b-button
            v-for="(avator, index) in mode"
            :key="index"
            :style="{ backgroundColor: [index == 0 ? 'white' : '#2f419b'] }"
          >
            <img :src="avator" />
          </b-button>
        </div>
        <div>
          <b-avatar class="role">
            <img :src="person" />
          </b-avatar>
          <button
            class="btn dropdown-toggle"
            type="button"
            style="color:white;margin-left:15px;"
          >
            Jade
          </button>
        </div>
      </b-col>
    </div>

    <div class="middle">
      <input placeholder="搜尋您的筆記" />
      <br />
      <span>
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
        >
          {{ $t("allNotes") }}
        </button>
        <button>
          <b-icon icon="grid"></b-icon>
        </button>
      </span>
      <hr />
      <div class="middle--notes">
        <Card
          :title="mount.title"
          v-for="(mount, index) in allMount"
          :key="index"
        ></Card>
      </div>
    </div>

    <!-- <div class="compile">
      <div class="choose">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
        >
          Arial
        </button>
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
        >
          14
        </button>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-type-bold"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-type-italic"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-type-underline"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"
          />
          <path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z" />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-text-indent-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-text-indent-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
        >
          <svg
            viewBox="0 0 16 16"
            class="bi bi-text-left"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-sort-down-alt"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 3z"
          />
          <path
            fill-rule="evenodd"
            d="M5.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 12.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 6.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0-9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-list-ul"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-link"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
          />
          <path
            d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-image"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"
          />
          <path
            d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z"
          />
          <path
            fill-rule="evenodd"
            d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          class="bi bi-paperclip"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
          />
        </svg>
      </div>
      <hr />
      <h4>{{ $t("untitled") }}</h4>
      <button class="createBtn">
        <p>Add +</p>
      </button>
      <div style="height:46%;width:100%;">
        <h5>{{ $t("writeContent") }}</h5>
      </div>
      <div class="loadFiles">
        <b-icon icon="file-earmark"></b-icon>
        <p>上傳檔案、圖片、音檔</p>
        <a href="#">點擊上傳檔案</a>
        <b-icon icon="plus" class="plus"></b-icon>
      </div>
    </div> -->
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      person: require("@/assets/volleyball.jpg"),
      mode: [require("@/assets/sunny.png"), require("@/assets/nights.png")],
      allMount: [{ title: "無標題" }, { title: "ew" }, { title: "dss" }],
      items: [
        { icon: "file-earmark-text", text: "allNotes" },
        { icon: "star-fill", text: "path" },
        { icon: "tag", text: "tag" },
        { icon: "calendar4", text: "calendar" },
        { icon: "people", text: "share" },
        { icon: "trash", text: "trash" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.continer{
  display:flex;
  max-height:100vh;
}
//最左邊side menu
.sideBar {
  position: relative;
  width: 24%;
  padding: 48px 72px 0px 72px;
  background-color: #2f419b;
  color: white;
  p{
    font-size: 22px;
  }
  &--btn {
    width: 100%;
    height: 48px;
    margin: 10px 0px;
    background-color: white;
    color: #2f419b;
    border-radius: 5px;
    p {
      font-size: 18px;
      display: inline;
      margin: 0px 0px 0px 20px;
    }
  }
  &--status {
    position: absolute;
    bottom: 0px;
    margin:30px 0px
  }
}
//menu選項
.nav {
  p {
    display: inline;
    color: white;
  }
  &-link {
    color: white;
    margin: 12px 20px;
    padding: 0px;
  }
}
.mode {
  padding: 20px 0;
  .btn {
    border-radius: 50%;
  }
  p {
    display: inline;
  }
}
.role {
  img {
    height: 50px;
    width: 50px;
  }
}
//中間note
.middle {
  display: flex;
  flex-direction: column;
  // padding: 0px 32px;
  width: 26%;
  background-color: #f4f6f7;
  border: 1px solid darken(#f4f6f7, 10%);
  &--notes {
    overflow: scroll;
    flex: 1;
  }
  input {
    margin-top: 50px;
    border: none;
    border-radius: 5px;
    background-color: #e6e6e6;
    padding: 12px;
    width: 100%;
  }
  button {
    color: #555555;
    font-weight: 500;
    margin-top: 10px;
  }
}
//右邊編寫內容content
//上面選項
.compile {
  flex: 1 1 auto;
  margin: 56px 40px;
  h4 {
    color: #a3a3a3;
  }
  .choose {
    display: flex;
    justify-content: space-around;
  }
  button {
    padding: 0px;
  }
  h5 {
    color: #a3a3a3;
  }
}
//新增內容
.createBtn {
  margin: 15px 0px 40px 0px;
  background-color: white;
  border: 1px dashed #a3a3a3;
  p {
    margin: 5px 20px;
    color: #a3a3a3;
  }
}
.loadFiles {
  display: inline-flex;
  border: 1px dashed #a3a3a3;
  align-items: center;
  padding: 20px;
  width: 100%;
  a,
  p {
    margin: 0px 0px 0px 10px;
    display: flex;
  }
  .plus {
    margin-left: auto;
  }
}
</style>
