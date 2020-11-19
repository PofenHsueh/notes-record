<template>
  <div class="continer">
    <div class="sideBar">
      <p class="font-22">FreeNote.</p>
      <b-button class="sideBar--btn">
        <b-icon icon="plus-circle-fill"> </b-icon>
        <p class="font-18">{{ $t("createNotes") }}</p>
      </b-button>
      <b-nav vertical>
        <b-nav-item v-for="(item, index) in items" :key="index">
          <b-icon :icon="item.icon" class="mr-3"></b-icon>
          <p class="font-16">{{ $t(item.text) }}</p>
        </b-nav-item>
      </b-nav>
      <b-col class="sideBar--status">
        <div class="mode">
          <p class="font-16">
            {{ $t("mode") }}
          </p>
          <b-button
            class="ml-2"
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
            class="btn dropdown-toggle ml-4"
            type="button"
            style="color:white;margin-left:15px;"
          >
            Jade
          </button>
        </div>
      </b-col>
    </div>

    <div class="middle">
      <div class="middle--input">
        <input placeholder="搜尋您的筆記" />
        <br />
        <div class="middle--input__position">
          <button
            style="margin:0px"
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
          >
            {{ $t("allNotes") }}
          </button>
          <b-icon icon="grid"></b-icon>
        </div>
      </div>
      <div class="middle--notes">
        <Card
          :title="mount.title"
          v-for="(mount, index) in allMount"
          :key="index"
        ></Card>
      </div>
    </div>

    <div class="compile">
      <b-button-group class="choose">
        <b-button v-for="(icon, index) in icons" :key="index" variant="outline">
          <b-icon :icon="icon"></b-icon>
        </b-button>
      </b-button-group>
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
    </div>
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
      allMount: [
        { title: "無標題" },
        { title: "ew" },
        { title: "dss" },
        { title: "dss" }
      ],
      items: [
        { icon: "file-earmark-text", text: "allNotes" },
        { icon: "star-fill", text: "path" },
        { icon: "tag", text: "tag" },
        { icon: "calendar4", text: "calendar" },
        { icon: "people", text: "share" },
        { icon: "trash", text: "trash" }
      ],
      icons: [
        "type",
        "type-bold",
        "type-italic",
        "type-underline",
        "text-indent-left",
        "text-indent-right",
        "text-left",
        "sort-down-alt",
        "list-ul",
        "card-image",
        "paperclip",
        "link"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.continer {
  display: flex;
  max-height: 100vh;
}
//最左邊side menu
.sideBar {
  position: relative;
  width: 24%;
  padding: 48px 64px 0px 64px;
  background-color: #2f419b;
  color: white;
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
    margin: 30px 0px;
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
    height: 50px;
    width: 50px;
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
  width: 26%;
  background-color: #f4f6f7;
  border: 1px solid darken(#f4f6f7, 10%);
  &--input {
    padding: 0px 32px;
    border-bottom: 1px solid darken(#f4f6f7, 10%);
    &__position {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &--notes {
    overflow: scroll;
    flex: 1;
  }
  input {
    margin-top: 48px;
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
  margin: 48px 40px;
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
