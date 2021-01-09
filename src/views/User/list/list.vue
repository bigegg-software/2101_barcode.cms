<template>
  <div>
    <div class="list-header">
    <div></div>
      <div class="right">
          <a-button @click="newItem">新建</a-button>
      </div>
    </div>
    <beList
      class="list-container"
      :columns="columns"
      :data="data"
      :setting="setting"
      :pagination.sync="pagination"
      @remove="removeItem"
      @update="updateItem"
      :loading="loading"
    ></beList>
  </div>
</template>
<script>
import * as UserServer from "@/api/User";
import beList from "@/components/list";
import beSelect from "@/components/select";
import { columns, setting, options} from "./config";
import debounce from "@/utils/debounce";

export default {
  components: {
    beList,
    beSelect
  },
  data() {
    return {
      loading: false,
      columns,
      data: [],
      setting,
      pagination: {
        total: 0,
        pageSize: 3,
        current: Number(this.$route.query.page) || 1
      },
      options,
    };
  },
  mounted() {
    this.loadingData();
  },
  watch: {
    $route(from, to) {
      this.loadingData();
    },
    "pagination.current": {
      handler() {
        this.changePageQuery();
      }
    }
  },
  methods: {
    changePageQuery() {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: this.pagination.current,
          type: this.elementType,
          filter: this.filter
        }
      });
    },

    async loadingData() {
      let pagination = this.pagination;
      this.loading = true;

      let result = await UserServer.find({},{
        limit: pagination.pageSize,
        skip: (pagination.current - 1) * pagination.pageSize,
        count: 1
      });

      this.data = result.results;
      this.pagination.total = result.count;
      if (this.data.length == 0 && pagination.current > 1) {
        this.pagination.current = this.pagination.current - 1;
      }

      this.loading = false;
    },

    updateItem(v) {
      this.$router.push({
        path: '/dashboard/User/edit/'+ v.objectId
      });
    },

    removeItem(v) {
      this.$confirm({
        content: "确定要删除吗",
        onOk: async () => {
          await UserServer.destroy(v.objectId);
          await this.loadingData();
        }
      });
    },

    newItem(type) {
      this.$router.push({
        path: '/dashboard/User/new'
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  height: 300px;
  width: 100%;
  margin: 50px auto;
}
.list-header {
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  .filter-input{
    width: 300px;
    margin-left: 20px;
  }
  .right {
    text-align: right;
    width: 100px;
  }

}
</style>