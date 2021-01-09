<template>
  <div v-if="columns.length>0">
    <a-table
      :columns="columns"
      :data-source="data"
      :row-key="record => record.objectId"
      :pagination="pagination"
      :loading="loading"
      @change="loadingData"
    >
      <template
        v-for="(col, colIndex) in columns.filter(v => v.title != '__action').map(v => v.title)"
        :slot="col"
        slot-scope="text"
      >
        <div :key="col">
          <bePointer
            v-if="setting[columns[colIndex].dataIndex] && setting[columns[colIndex].dataIndex].type == 'pointer'"
            :setting="setting[columns[colIndex].dataIndex].setting"
            :data="text"
          ></bePointer>
          <beFile
            v-else-if="setting[columns[colIndex].dataIndex] && setting[columns[colIndex].dataIndex].type == 'file'"
            :setting="setting[columns[colIndex].dataIndex].setting"
            :data="text"
          ></beFile>
          <beArray
            v-else-if="setting[columns[colIndex].dataIndex] && setting[columns[colIndex].dataIndex].type == 'array'"
            :setting="setting[columns[colIndex].dataIndex].setting"
            :data="text"
          ></beArray>
          <span
            v-else-if="setting[columns[colIndex].dataIndex] && setting[columns[colIndex].dataIndex].setting && setting[columns[colIndex].dataIndex].setting.handleInfo"
          >{{setting[columns[colIndex].dataIndex].setting.handleInfo(text)}}</span>

          <span v-else>{{text}}</span>
        </div>
      </template>

      <template slot="__action" slot-scope="text, record">
        <a-button type="link" @click="remove(record)">删除</a-button>
        <!-- <a-button type="link" @click="update(record)">修改</a-button> -->
      </template>
    </a-table>
  </div>
</template>

<script>
import bePointer from "./components/pointer";
import beFile from "./components/file";
import beArray from "./components/array";

export default {
  components: {
    bePointer,
    beFile,
    beArray
  },
  props: {
    setting: {
      type: Object,
      default: function() {
        return {};
      }
    },

    columns: {
      type: Array,
      default: function() {
        return [];
      }
    },

    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    pagination: {
      type: Object,
      default: function() {
        return { total: 10, pageSize: 10, current: 0 };
      }
    },
    loading:{
        type: Boolean,
        default: false,
    }
  },

  data() {
    return {
    };
  },
  watch: {
    "pagination": {
      handler(v,b){
        
      },
      deep: true
    }
  },
  methods: {
    remove(record, index) {
      this.$emit("remove", record);
    },
    update(record, index) {
      this.$emit("update", record);
    },
    loadingData(pagination) {
      this.pagination.current = pagination.current;
      this.$emit('pagination:update', this.pagination)
      this.$emit("changePage", pagination);
    }
  }
};
</script>

<style scoped>
</style>