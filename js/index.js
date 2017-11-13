var vm = new Vue({
  el: "#app",
  data: {
    TWD_JPY: 3.7467,
    TWD: "0",
    JPY: "0",
    toJPY: "0",
    is_TWDtoJPY: true,
    numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  },
  methods: {
    add: function(n){
      if(this.TWD == "0" || this.JPY == "0"){
        this.TWD = "";
        this.JPY = "";
      }
      this.TWD += n;
      this.JPY += n;
      console.log(this.TWD);
    },
    remove: function(){
      this.TWD = "0";
      this.JPY = "0";
      console.log(this.TWD);
    }
    
  },
  computed: {
    toJPY: function(){
      var n = Math.round(parseInt(this.TWD)*this.TWD_JPY);
      return n;
    },
    toTWD: function(){
      var n = Math.round(parseInt(this.TWD)*(1/this.TWD_JPY));
      return n;
    }
    
  }
});