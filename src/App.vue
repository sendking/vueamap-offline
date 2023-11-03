<template>
  <div style="height: 500px;width: 300px">
    <el-amap :pitch="50" :center="center" :zoom="zoom">
      <el-amap-layer-tile :tile-url="url" />
      <el-amap-loca :source-data="sourceData" :layer-style="layerStyle">
      </el-amap-loca>
    </el-amap>
  </div>
</template>

<script lang="ts" setup>
import { ElAmap, ElAmapLayerTile } from '@vuemap/vue-amap'
import { ElAmapLoca } from "@vuemap/vue-amap-loca";
import { ref } from "vue";

const center = ref([121.59996, 31.197646]);
const zoom = ref(6)

const url = location.href + 'map/[z]/[x]/[y]/tile.png'

const layerStyle = {
  unit: 'px',
  icon: 'https://a.amap.com/Loca/static/loca-v2/demos/images/traffic-control.png',
  iconSize: [40, 40],
  rotation: 0,
}

const sourceData = ref({
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": center
    }
  }],
})

</script>

<style scoped></style>