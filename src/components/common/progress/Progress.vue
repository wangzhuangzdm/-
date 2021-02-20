<template>
  <div class="progress" @click="setProClick($event)">
   <div class="pro-line" :style="{width:proLine+'px'}"></div>
   <div class="pro-load" :style="{transform:'translateX('+proLoad+'px)'}"></div>
  </div>
</template>

<script>
export default {
  name:'Progress',
   data() {
    return {
      proLine: 0,
      proLoad: 0,
      scale:0
    };
  },
  methods:{
    setProClick(e) {
      this.setPro(e.clientX - this.$el.offsetLeft);
      this.scale=(this.proLine/this.$el.offsetWidth).toFixed(2);
      this.$emit('childclick',this.scale);
    },
    setProgress(scale){
      this.proLine = scale*this.$el.offsetWidth;
      this.proLoad = scale*this.$el.offsetWidth;
    },
    setPro(changeX) {
      this.proLine = changeX;
      this.proLoad = changeX;
    }
  }
}
</script>

<style scoped>
.progress {
  position: relative;
  width: 85%;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  cursor: pointer;
  background: #454546;
  
}
.progress .pro-line {
  width: 50px;
  height: 100%;
  background: #b82525;
}
.progress .pro-load {
  height: 10px;
  width: 10px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -3px;
  bottom: 0px;
  transform: translateX(50px);
}
</style>