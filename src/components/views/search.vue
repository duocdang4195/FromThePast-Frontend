<template>
  <div class="mr-section">

    <div class="blog-sidebar">
      <div class="mr-sidebar">
        <h4 class="mrg-btm-20">Emotions</h4>
        <ul class="categories">
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Happiness
              <span>(40)</span>
            </a>
            <ul class="mr-sub-cat">
              <li>
                <a href="#">Laetus</a>
              </li>
              <li>
                <a href="#">Felix</a>
              </li>
              <li>
                <a href="#">Beatitudo</a>
              </li>
              <li>
                <a href="#">Sublime Beatitudo.</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Sadness
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Anger
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Surprise
              <span>(30)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Fear
              <span>(24)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Disgust
              <span>(19)</span>
            </a>
          </li>
        </ul>
        <!-- /categories -->
      </div>
      <!-- /sidebar-widget -->

      <div class="mr-sidebar ">
        <h4 class="mr-cat-2">Seasons</h4>
        <ul class="categories">
          <li>
            <a href="#">
              Jan
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Feb
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Mar
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Apr
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              May
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Jun
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Jul
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Aug
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Sep
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Oct
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Nov
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Dec
              <span>(53)</span>
            </a>
          </li>
        </ul>
        <!-- /categories -->
      </div>
      <!-- /sidebar-widget -->
    </div>
    <!-- /blog-sidebar -->

    <div class="mr-blog-content">
       <div class="blog-post single-post mr-search-result">
            <div class="mr-search-ttl" v-if="false">
              <input type="text" placeholder="Keywords" class="mr-inputkeyword">
            </div><!--./.mr-search-ttl  -->
            <div class="mr-img-search-result" v-if="false">
                <h5>Images for result </h5>   
                <ul>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                  <li><span class="mr-search-img" style="background-image:url('../../assests/images/coffee-2085314.png');"></span></li>
                </ul>
                <p>More images results for  <b>Searck keyword</b></p>
            </div><!-- ./. mr-img-search-result -->
            <div class="mr-text-result">
              <ul>
                <li>
                  <h5 class="mr-post-ttl">about</h5>
                  <div class="search-content" v-if="aboutList.length > 0" v-for="(item, index) in aboutList" :key="index">
                    <div class="mr-postcntn">{{  }}</div>
                    <p class="mr-post-author"><span>Mr.Author</span></p>
                  </div>
                  <div class="search-content" v-else>
                    <p class="mr-post-author"><span>No Results</span></p>
                  </div>
                </li>
                <li>
                  <h5 class="mr-post-ttl">emotions</h5>
                  <div class="search-content" v-if="emotionList.length > 0" v-for="(item, index) in emotionList" :key="index">
                    <div class="mr-postcntn">{{ item.title }}</div>
                  </div>
                  <div class="search-content" v-else>
                    <p class="mr-post-author"><span>No Results</span></p>
                  </div>
                </li>
                <li>
                  <h5 class="mr-post-ttl">quotations</h5>
                  <div class="search-content" v-if="quotationList.length > 0" v-for="(item, index) in quotationList" :key="index">
                    <div class="mr-postcntn">{{ item.content }}</div>
                  </div>
                  <div class="search-content" v-else>
                    <p class="mr-post-author"><span>No Results</span></p>
                  </div>
                </li>
                <li>
                  <h5 class="mr-post-ttl">user</h5>
                  <div class="search-content" v-if="userList.length > 0" v-for="(item, index) in userList" :key="index">
                    <div class="mr-postcntn">{{ item.email }}</div>
                  </div>
                  <div class="search-content" v-else>
                    <p class="mr-post-author"><span>No Results</span></p>
                  </div>
                </li>

              </ul>
            </div><!-- ./. mr-text-result -->
            </div><!-- /blog-post -->
        </div>
        <!-- /column -->
    </div>
    <!-- /mr-blog-content -->
  </div>
  <!-- ./.mr-section  -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return{
      aboutList: [],
      emotionList: [],
      quotationList: [],
      userList: []
    }
    
  },
  created() {
    this.aboutList = this.getDataSearch.about
    this.emotionList = this.getDataSearch.emotion
    this.quotationList = this.getDataSearch.quotation
    this.userList = this.getDataSearch.user
  },
  computed: {
    ...mapGetters(['getDataSearch']),

  }
}
</script>


<style lang="scss" scoped>
%default-button {
    margin: 0 10px;
    background-color:#212121;
    border: 1px solid #212121;
    color: #fff;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing:1px;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    &:hover {
            background-color: #fff;
            color: #212121;
        }
}
%full-width {
  position: relative;
  display: inline-block;
  width: 100%;
}
ul {
    padding: 0;
    margin: 0;

    li {
        list-style: none;
    }
}
a {
  text-decoration: none;
}
.mr-section {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    max-width: 1170px;
    min-width: 1080px;
    margin-left: calc((100vw - 1170px)/2);
    padding-top: 100px;
    color: #333;
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 300;
    .blog-sidebar {
        flex: 1 0 25%;
    }
    .mr-blog-content {
        flex: 1 0 75%;
        margin-bottom: 60px;
        
          .mr-search-result {
            @extend %full-width;

            .mr-search-ttl {
              .mr-inputkeyword {
                @extend %full-width;
                border: 0;
                padding: 10px;
                height: 60px;
                color: #525252;
                font-size: 20px;
                border: 1px solid #f0f0f0;
                font-family: "IBM Plex Sans", sans-serif;

                &::placeholder {
                  font-size: 20px;
                  color: #525252;
                }
              }

            }

            .mr-img-search-result {
              @extend %full-width;
              margin-top: 30px;

              h5 {
                @extend %full-width;
                margin-bottom: 10px;
                font-size: 18px;
                text-transform: capitalize;
                font-family: "IBM Plex Sans", sans-serif;
              }

              ul  {
                @extend %full-width;
                > li  {
                  position: relative;
                  display: inline-block;
                  float: left;
                  width: 140px;
                  height: 140px;
                  cursor: pointer;
                  margin-right: 10px;
                  margin-bottom: 10px;
                  font-family: "IBM Plex Sans", sans-serif;

                  > span {
                    position: relative;
                    display: inline-block;
                    width: 140px;
                    height: 140px;
                    background-size: cover;
                    background-position: center center;
                  }
                }
              }
              > p {
                @extend %full-width;
                b {
                  font-weight: bold;
                  cursor:pointer;
                }
              }
            }
            

            .mr-text-result {
              @extend %full-width;
              margin-top: 40px;
              
              ul {
                li {
                  @extend %full-width;
                  margin-bottom: 45px;

                  h5 {
                    @extend %full-width;
                    text-transform: unset;
                    color: #333;
                    font-size: 22px;
                    margin-bottom: 10px;
                      font-family: "IBM Plex Sans", sans-serif;
                      cursor: pointer;
                  }
                  .mr-postcntn {
                    font-size: 16px;
                    color: #525252;
                    line-height: 1.5;
                    font-family: "IBM Plex Sans", sans-serif;
                  }
                  .mr-post-author {
                    @extend %full-width;
                    text-align: right;
                    font-style: italic;
                    margin-top: 7px;

                    > span {
                      cursor: pointer;
                    }
                  }
                }
              }
            }
          } 
           
         
    }
}
.mr-emotion-view {
  .post-content {
    .post-inner-content {
      line-height: 1.8;
      font-size: 14px;
    }
  }
  .mr-cmnt-wr {
    textarea {
      min-height: 100px;
      resize: none;

      &:focus {
        outline: none;
      }
    }
  }
}
.mr-like {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: right;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .mr-like-btn {
    &:hover {
      color: #ff4848;
    }
  }
  .mr-dislike-btn {
    &:hover {
      color: #5e5e5e;
    }
  }
}
.mr-action-area {
  .social-icon {
    position: relative;
    display: inline-block;
    float: left;
  }
  .mr-action-btn {
    position: relative;
    display: inline-block;
    float: right;
  }
}
.blog-sidebar {
  .mr-sidebar {
    h4 {
        position: relative;
        display: inline-block;
        margin-top: 50px;
        margin-bottom: 15px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing:1px;
    }
    ul.categories {
      padding-left: 0;
      li {
        .mr-sub-cat {
          position: relative;
          display: inline-block;
          margin-left: 30px;
          padding-left: 0;
        }
        a {
          color: #dcd8d8;
          font-size: 13px;
          line-height: 40px;
          height: 40px;
          font-weight: normal;
          display: inline-block;
          width: 100%;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;

          i.mr-circle-mark {
            padding-right: 15px;
            color: #aeaeae;
          }

          span {
            color: #dcd8d8;
            -webkit-transition: all 0.1s ease-in-out;
          }

          &:hover {
            color: #3e3e3e;
            opacity: 1;
            font-size: 15px;
            font-weight: 700;

            span {
              font-size: 16px;
              color: #3e3e3e;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>