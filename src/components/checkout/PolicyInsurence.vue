<template>
  <div class="mr-about-view-bgr">
    <div class="mr-about-view-wr">
      <div class="mr-about-view-cntn">
        <h3>Chính sách và bảo mật</h3>
        <div class="mr-about-flexbox">
          <div class="mr-cntnBox">
						<p>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ./.mr-about-view-bgr -->
</template>

<script>

export default {
}
</script>

<style lang="css" scoped>
.mr-about-view-bgr {
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
.mr-about-view-wr {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  justify-content: center;
}
.mr-about-view-cntn {
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  max-width: 1170px;
  min-width: 1080px;
  padding: 0 15px;
  margin: 0;
  text-align: justify;
  font-family: "Montserrat", sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.mr-about-view-cntn h3 {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 30px;
  margin: 90px 0 40px 0;
  color: #555;
  font-weight: bold;
  text-align: center;
}
.mr-about-flexbox {
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.mr-about-flexbox > div {
  position: relative;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #444;
}
.mr-about-flexbox > div h5 {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 20px;
  margin-bottom: 15px;
  color: #191919;
}
.mr-img-box img {
  position: relative;
  display: inline-block;
  width: 100%;
}
.mr-about-flexbox > div p {
  font-size: 17px;
  color: #444;
  line-height: 1.5;
}
</style>