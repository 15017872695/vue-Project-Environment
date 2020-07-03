<template>
  <transition
    tag="div"
    mode="out-in"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut "
  >
    <div class="pano-wrap">
      <div id="photosphere"></div>

      <!-- 添加标记或修改标记 -->
      <el-dialog
        title="标记"
        :visible.sync="showForm"
        width="30%"
        :before-close="handleClose"
        :modal="false"
      >
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          class="gpForm"
          v-if="showForm"
          size="mini"
        >
          <el-form-item label="id">
            <el-input v-model="form.gpId"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.gpName"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="form.gpType" placeholder="请选择">
              <el-option
                v-for="item in typeArr"
                :key="'type' + item.gpType"
                :label="item.gpTypeName"
                :value="item.gpType"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="经度">
            <el-input v-model="form.gpJd"></el-input>
          </el-form-item>
          <el-form-item label="纬度">
            <el-input v-model="form.gpWd"></el-input>
          </el-form-item>

          <!-- <el-form-item label="相对经度"><el-input v-model="form.JD" @change="resetValue('JD', form.JD)"></el-input></el-form-item>
          <el-form-item label="相对纬度"><el-input v-model="form.WD" @change="resetValue('WD', form.WD)"></el-input></el-form-item>-->

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="handleClose">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </transition>
</template>

<script>
import * as THREE from "three";
import PhotoSphereViewer from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default {
  name: "threeImage",
  data() {
    return {
      imageList: [
        require("@/assets/img/3.jpg"),
        require("@/assets/img/5.jpg"),
        require("@/assets/img/1.jpg"),
        require("@/assets/img/4.jpg"),
        require("@/assets/img/6.jpg"),
        require("@/assets/img/2.jpg"),
      ],
      markImg: [
        require("@/assets/img/3.jpg"),
        require("@/assets/img/5.jpg"),
        require("@/assets/img/1.jpg"),
        require("@/assets/img/4.jpg"),
        require("@/assets/img/6.jpg"),
        require("@/assets/img/2.jpg"),
      ],
      showForm: false,
      isAdd: false,
      form: {
        gpId: "",
        gpWd: "",
        gpJd: "",
        gpName: "",
        gpType: ""
      },
      imgUrl: require("@/assets/img/loginBG.jpg"),
      PSV: null,
      markList: []
    };
  },
  props: {
    typeArr: {
      type: Array,
      default: () => {
        return [
            {gpType:'0',gpName:'前面'},
            {gpType:'1',gpName:'下面'},
            {gpType:'2',gpName:'左边'},
            {gpType:'3',gpName:'右边'},
            {gpType:'4',gpName:'后面'},
            {gpType:'5',gpName:'上面'}
        ];
      }
    },
    areaName: {}
  },
  created() {},
  mounted() {
    this.createMarkers();
  },
  watch: {
    markList: {
      handler: function(newValue, oldValue) {
        // this.init();
      },
      deep: true
    }
  },
  methods: {
    createMarkers() {
      this.markList = []; // 这是封装的请求，可以直接使用axios
      //   this.$commonHttp(接口, {
      //     areaId: this.$parent.areaId
      //   }).then(res => {
      //     if (res.code == this.$codeState.OKCODE) {
      //       let data = res.data;
      //       data.forEach(item => {
      //         if (item.gpJd > 100) return;
      //         let obj = {
      //           id: item.gpId,
      //           tooltip: '#' + item.gpId,
      //           latitude: Number(item.gpWd),
      //           longitude: Number(item.gpJd),
      //           image: this.markImg[item.gpType - 1],
      //           gpType: item.gpType,
      //           gpName: item.gpName,
      //           anchor: 'bottom center',
      //           data: {
      //             deletable: true
      //           }
      //         };
      //         switch (item.gpType) {
      //           case '4':
      //             obj.width = 80;
      //             obj.height = 80;
      //             break;
      //           default:
      //             obj.width = 32;
      //             obj.height = 32;
      //         }
      //         this.markList.push(obj);
      //       });
      //        this.init();
      //     }
      //   });
      this.init();
    },
    createCubemapHandler() {
      PhotoSphereViewer.prototype._createCubemap = scale => {
        scale = scale || 1;
        let geometry = new THREE.BoxGeometry(
          PhotoSphereViewer.SPHERE_RADIUS * 2 * scale,
          PhotoSphereViewer.SPHERE_RADIUS * 2 * scale,
          PhotoSphereViewer.SPHERE_RADIUS * 2 * scale,
          PhotoSphereViewer.CUBE_VERTICES,
          PhotoSphereViewer.CUBE_VERTICES,
          PhotoSphereViewer.CUBE_VERTICES
        );
        let materials = [];
        for (let i = 0; i < 6; i++) {
          materials.push(
            new THREE.MeshBasicMaterial({
              side: THREE.BackSide
              // overdraw: PhotoSphereViewer.SYSTEM.isWebGLSupported && this.config.webgl ? 0 : 1
            })
          );
        }
        let mesh = new THREE.Mesh(geometry, materials);
        return mesh;
      };
    },
    init() {
      let panos = [
        {
          url: this.imageList,
          desc: this.areaName
        }
      ];
      this.createCubemapHandler();
      this.PSV = new PhotoSphereViewer({
        container: "photosphere",
        panorama: panos[0].url,
        caption: panos[0].desc,
        time_anim: false,
        navbar: [
          "autorotate",
          "zoom",
          "download",
          "markers",
          {
            title: "更换图片",
            className: "custom-button",
            content: "↻",
            onClick: (() => {
              let i = 1;
              return () => {
                i = 1 - i;
                this.PSV.clearMarkers();
                this.PSV.setPanorama(panos[i].url).then(() => {
                  this.PSV.setCaption(panos[i].desc);

                  this.markList.forEach(marker => {
                    this.PSV.addMarker(marker);
                  });
                });
              };
            })()
          },
          "caption",
          "fullscreen"
        ],
        // markers: this.markList,
        lang: {
          autorotate: "自动旋转",
          zoom: "缩放",
          zoomOut: "缩小",
          zoomIn: "放大",
          download: "下载",
          fullscreen: "全屏",
          markers: "标记"
        }
      });
      this.markList.forEach(marker => {
        this.PSV.addMarker(marker);
      });
      console.log("this.PSV", this.PSV);
      this.psvClickHandler();
      this.psvEditHandler();
    },
    psvClickHandler() {
      this.PSV.on("click", e => {
        if (e.marker && !e.marker.isPolygon()) {
          return;
        }
        console.log(e);
        if (e.button < 2) {
        }
        this.showForm = true;
        this.form.gpJd = e.longitude.toFixed(2);
        this.form.gpWd = e.latitude.toFixed(2);
      });
    },
    psvEditHandler() {
      this.PSV.on("select-marker", (marker, dblclick) => {
        if (dblclick) {
          this.isAdd = "edit";
          this.form.gpId = marker.id;
          this.form.gpWd = marker.latitude;
          this.form.gpJd = marker.longitude;
          this.form.gpName = marker.gpName;
          this.form.gpType = marker.gpType;
          this.showForm = true;
        } else {
          console.log("marker.id", marker);
          if (marker.id == 1000) {
            this.getViedoHandler(marker.id);
          }
        }
      });
    },
    getViedoHandler(gpId) {
      this.$commonHttp(this.$httpConfig.getCameraPreviewURLBygpId, {
        gpId: gpId
      }).then(res => {
        if (res.code == this.$codeState.OKCODE) {
          let data = res.data;
          console.log("res", res);
        }
      });
    },
    // 关闭
    handleClose() {
      this.showForm = false;
      this.resetForm();
    },
    // 提交
    onSubmit() {
      if (this.isAdd == "edit") {
        this.editHandler();
      } else {
        this.addHandler();
      }
    },
    resetForm() {
      this.form.gpId = "";
      this.form.gpType = "";
      this.form.gpName = "";
      this.form.gpWd = "";
      this.form.gpJd = "";
    },
    addHandler() {
      //   this.$commonHttp(this.$httpConfig.insertPointGPS, {
      //     areaId: this.$parent.areaId,
      //     gpId: this.form.gpId,
      //     gpType: this.form.gpType,
      //     gpName: this.form.gpName,
      //     gpWd: this.form.gpWd,
      //     gpJd: this.form.gpJd
      //   }).then(res => {
      //     if (res.code == this.$codeState.OKCODE) {
      //       this.showForm = false;
      //       let obj = {
      //         id: this.form.gpId,
      //         image: this.markImg[this.form.gpType - 1],
      //         gpType: this.form.gpType,
      //         gpName: this.form.gpName,
      //         width: 32,
      //         height: 32,
      //         tooltip: '#' + this.form.gpId,
      //         longitude: this.form.gpJd,
      //         latitude: this.form.gpWd,
      //         anchor: 'bottom center',
      //         data: {
      //           deletable: true
      //         }
      //       };
      //       console.log('this.form.gpType', this.form.gpType, typeof this.form.gpType);
      //       switch (this.form.gpType) {
      //         case 4:
      //           obj.width = 80;
      //           obj.height = 80;
      //           break;
      //         default:
      //           obj.width = 32;
      //           obj.height = 32;
      //       }
      //       this.PSV.addMarker(obj);
      //       this.resetForm();
      //     }
      //   });
      let obj = {
        id: this.form.gpId,
        image: this.markImg[this.form.gpType - 1],
        gpType: this.form.gpType,
        gpName: this.form.gpName,
        width: 32,
        height: 32,
        tooltip: "#" + this.form.gpId,
        longitude: this.form.gpJd,
        latitude: this.form.gpWd,
        anchor: "bottom center",
        data: {
          deletable: true
        }
      };
      this.PSV.addMarker(obj);
      this.resetForm();
    },
    editHandler() {
      this.$commonHttp(this.$httpConfig.updatePointGpsArea, {
        areaId: this.$parent.areaId,
        gpId: this.form.gpId,
        gpType: this.form.gpType,
        gpName: this.form.gpName,
        gpWd: this.form.gpWd,
        gpJd: this.form.gpJd
      }).then(res => {
        if (res.code == this.$codeState.OKCODE) {
          this.showForm = false;
          let obj = {
            id: this.form.gpId,
            image: this.markImg[this.form.gpType - 1],
            gpType: this.form.gpType,
            gpName: this.form.gpName,
            width: 32,
            height: 32,
            tooltip: "#" + this.form.gpId,
            longitude: this.form.gpJd,
            latitude: this.form.gpWd,
            anchor: "bottom center",
            data: {
              deletable: true
            }
          };
          switch (this.form.gpType) {
            case 4:
              obj.width = 80;
              obj.height = 80;
              break;
            default:
              obj.width = 32;
              obj.height = 32;
          }
          this.PSV.updateMarker(obj);
          this.resetForm();
        }
      });
    }
  }
};
</script>

<style scoped="scoped">
.psv-button {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  cursor: pointer;
  height: 20px;
  width: 20px;
  background: 0 0;
  color: rgba(255, 255, 255, 0.7);
}
.pano-wrap {
  width: 100%;
  height: 100%;
  display: inline-block;
}
#photosphere {
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style>