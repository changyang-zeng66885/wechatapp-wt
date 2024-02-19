// pages/personal/personal.js
Page({
  data: {
    currentCity: "北京", // 默认城市
    hotSpots: [
      { image: "../../image/东方明珠.jpg", name: "东方明珠" },
      { image: "../../image/外滩.jpg", name: "外滩" },
      { image: "../../image/豫园.jpg", name: "豫园" }
    ]
  },
  switchToPersonal() {
    // 切换到个人出行页面的逻辑
  },
  switchToTeam() {
    // 切换到团队出行页面的逻辑
  },
  switchToSchedule() {
    // 切换到我的行程页面的逻辑
  },
  switchToProfile() {
    // 切换到个人主页页面的逻辑
  },
  switchCity() {
    // 切换城市的逻辑
  },
  continueSchedule() {
    // 继续我的行程的逻辑
  },
  createNewSchedule() {
    // 新建行程的逻辑
  },
  showFavorites() {
    // 显示收藏夹的逻辑
  },
  viewSpotDetail() {
    // 查看景点详情的逻辑
  }
})
