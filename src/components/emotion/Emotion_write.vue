<template>
  <div>
    <div class="mr-emt-wrtie-wr" :style="backgoundImage">
      <div class="mr-write-area">
        <input type="text" class="mr-subj" v-model="subject" placeholder="Subject ...">
        <vue-editor
          style="height:300px;"
          :useCustomImageHandler="true"
          @imageAdded="handleImageAdded"
          v-model="content"
          :editorOptions="editorOption"
        ></vue-editor>
        
        <div class="mr-write-area_btm">
          <input
            ref="file"
            @change="handleFileUpload"
            accept="image/jpeg, image/jpg, image/png, video/mp4"
            type="file"
            class="mr-upload-img"
          >
          <v-combobox
            class="mr-hashtag"
            v-model="tags"
            :items="items"
            placeholder="Add Tag"
            hide-selected
            multiple
            small-chips
          ></v-combobox>
          <button class="mr-submit" @click="submit">Post</button>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import api from "@/plugins/axios";
import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
import "quill/dist/quill.bubble.css";
import Swal from "sweetalert2";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      subject: "",
      content: "",
      tags: [],
      file: "",
      cfile: null,
      items: [],
      backgoundImage:
        "background-image: url('https://preply.com/wp-content/uploads/2018/04/pexels-photo-100733.jpeg');",
      editorOption: {
        theme: "bubble",
        placeholder: "How do you feel today?",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"]
          ]
        }
      },
      uploaded: false
    };
  },
  async created() {
    let res = await this.getTagEmotions().then(res => {
      if (res.ok) {
        this.items = res.data;
      }
    });
    this.backgoundImage = "background-image:url('"+this.getBackgound.becomewriter_background+"');"
  },
  computed: {
    ...mapGetters(['getBackgound']),
  },
  methods: {
    ...mapActions(["createEmotions", "getTagEmotions"]),
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      if (file > 2e6) {
        Swal.fire({
          title: "Image must be less than 2mb",
          type: "error"
        });
      } else {
        var formData = new FormData();
        formData.append("img", file);
        api({
          url: "/uploads",
          method: "POST",
          data: formData
        })
          .then(result => {
            let url = result.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
            this.uploaded = true;
          })
          .catch(err => {
          });
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        this.backgoundImage = "background-image:url('" + imageData + "');";
      };
      reader.readAsDataURL(this.file);
    },
    submit() {
      if (!this.subject) {
        Swal.fire("Please enter the title of this emotion")
        return;
      }
      if (!this.content) {
        Swal.fire("Hmmmm ... Are you forget to write something ?")
        return;
      }
      if (!this.tags) {
        Swal.fire("Can you choose your feeling tags please ? ")
        return;
      }
      if (!this.file) {
        Swal.fire("Please select the cover photo for this emotion")
        return;
      }      
      const data = new FormData();
      data.append("img", this.file);
      data.append("subject", this.subject);
      data.append("content", this.content);
      data.append("tags", this.tags);
      this.createEmotions({ data }).then(res => {
        if (res.ok) {
					let id = res.emotion.id
          this.$router.push(`/Emotion_view/${id}`);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.ql-bubble * {
  z-index: 999 !important;
}
.ql-editor{
  font-family: Roboto,sans-serif; // style in emotion_write
}
.mr-emt-wrtie-wr {
  background-image: url("../../assets/images/sea-3438648_1920.jpg");
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  backgorund-position: 0 0;
  background-size: cover;
}
.mr-emt-wrtie-wr .mr-write-area {
  position: relative;
  display: inline-block;
  width: 65%;
  min-width: 500px;
  height: auto;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-subj {
  position: relative;
  display: inline-block;
  width: 100%;
  background-color: #e2dfdf;
  border: 1px solid #e0e0e0;
  border-bottom: 0;
  padding: 20px;
  font-size: 20px;
  color: #535353;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-subj::placeholder {
  font-size: 20px;
  color: #757575;
}
.mr-emt-wrtie-wr .mr-write-area textarea.mr-cntn {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 500px;
  resize: none;
  border: 0;
  padding: 15px;
  font-size: 16px;
  color: #535353;
  line-height: 1.5;
}
.mr-emt-wrtie-wr .mr-write-area textarea.mr-cntn:focus {
  outline: none;
}
.mr-emt-wrtie-wr .mr-write-area textarea.mr-cntn:active {
  outline: none;
}
.mr-emt-wrtie-wr .mr-write-area textarea.mr-cntn::placeholder {
  font-size: 20px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-submit {
  position: relative;
  display: inline-block;
  float: right;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 75px;
  height: 35px;
  border: 0;
  background-color: #7b7b7b;
  color: #fafafa;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  top: 2px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img {
  position: relative;
  display: inline-block;
  float: left;
  top: 2px;
  width: 75px;
  margin-left: 15px;
  color: transparent;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img:focus {
  outline: none;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img:active {
  outline: none;
}
.mr-emt-wrtie-wr .mr-write-area .mr-hashtag {
  position: relative;
  display: inline-block;
  width: calc(100% - 212px);
  max-width: calc(100% - 212px);
  margin-left: 15px;
  background-color: #f9f9f9;
  padding: 0px;
  height: 30px;
  font-size: 13px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-hashtag .ti-input {
  border: 0;
  padding: 0;
  margin: 0;
}
.mr-emt-wrtie-wr
  .mr-write-area
  .mr-hashtag
  .ti-input
  .ti-new-tag-input-wrapper {
  padding: 0;
}
.mr-emt-wrtie-wr
  .mr-write-area
  .mr-hashtag
  .ti-input
  .ti-new-tag-input-wrapper
  input {
  height: 25px;
  padding: 5px;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img::-webkit-file-upload-button {
  visibility: hidden;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img::before {
  content: "Image";
  color: black;
  display: inline-block;
  background: #e2dfdf;
  border: 1px solid #e2dfdf;
  border-radius: 3px;
  padding: 7px 15px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10pt;
  color: #666;
}
.mr-emt-wrtie-wr .mr-write-area .mr-upload-img:active {
  outline: 0;
}

.mr-write-area_btm {
  position: relative;
  top: 10px;
}
</style>




