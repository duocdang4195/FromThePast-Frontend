<template>
  <div class="sidebar">
    <div class="sidebar__child">
      <div class="sidebar__child--elm">
        my info
      </div>
      <div class="sidebar__child--elm">
        my profit
      </div>
      <div class="sidebar__child--elm">
        my writing
      </div>
      <div class="sidebar__child--elm">
        my quotation
      </div>
      <div class="sidebar__child--elm">
        my services
      </div>
      <div class="sidebar__child--elm">
        my album
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    z-index: 998;
    width: 300px;
    height: 100%;
    padding-top: 60px;
    position: fixed;
    top: 0;
    right: 0;
    transition: .5s;
    background-color: rgba(0, 0, 0, 0.5);
    &__child {
      position: relative;
      display: inline-block;
      top: 70px;
      white-space: nowrap;
      text-transform: uppercase;
      .sidebar__child--elm {
        color: #b8b7ad;
        font-size: 20px;
        margin-left: 10%;
        padding: 15px 10px;
      }
    }
  }
</style>

