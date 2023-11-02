<!-- 药品生产地址 -->
<template>
  <div style="width: 100%; position: relative;height: calc(100% - 40px);">
    <div style="position: absolute;width:100%;height:100%;">
      <el-form ref="form" :model="form" size="small" label-width="150px">
        <!-- <div v-if="typeCode.includes('101'||'102')">
            <el-col :span="24">
              <div class="searchTitle mt20">药品生产</div>
            </el-col>
  
            <el-col :span="8">
              <el-form-item
                label="药品工业生产总值(万元)"
                prop="grossDomesticProductDrug"
                class="line_height_16"
              >
                <el-input
                  v-model="paList[index].grossDomesticProductDrug"
                  placeholder="请输入药品工业生产总值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="药品工业产值(万元)" prop="outputValue">
                <el-input
                  v-model="paList[index].outputValue"
                  placeholder="请输入药品工业产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="委托加工产值(万元)" prop="cpOutputValue">
                <el-input
                  v-model="paList[index].cpOutputValue"
                  placeholder="请输入委托加工产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="原料药产值(万元)" prop="outputValueOfRawMaterials">
                <el-input
                  v-model="paList[index].outputValueOfRawMaterials"
                  placeholder="请输入原料药产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="化学药品产值(万元)" prop="chemicalProductionValue">
                <el-input
                  v-model="paList[index].chemicalProductionValue"
                  placeholder="请输入化学药品产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="中成药产值(万元)" prop="outputValueOfTCM">
                <el-input
                  v-model="paList[index].outputValueOfTCM"
                  placeholder="请输入中成药产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="中药饮片(含破壁饮片)产值(万元)"
                prop="tcmpreparedInReadyToUseForms"
                class="line_height_16"
              >
                <el-input
                  v-model="paList[index].tcmpreparedInReadyToUseForms"
                  placeholder="请输入中药饮片(含破壁饮片)产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="配方颗粒产值(万元)" prop="formulaParticleOutputValue">
                <el-input
                  v-model="paList[index].formulaParticleOutputValue"
                  placeholder="请输入配方颗粒产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="生物制品产值(万元)" prop="outputValueOfBiologicalProducts">
                <el-input
                  v-model="paList[index].outputValueOfBiologicalProducts"
                  placeholder="请输入生物制品产值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div v-if="typeCode.includes('201'||'202')">
            <el-col :span="24">
              <div class="searchTitle mt20">器械生产</div>
            </el-col>
  
            <el-col :span="8">
              <el-form-item
                label="器械工业生产总值(万元)"
                prop="grossDomesticProductEquipment"
                class="line_height_16"
              >
                <el-input
                  v-model="paList[index].grossDomesticProductEquipment"
                  placeholder="请输入器械工业生产总值(万元)"
                  clearable
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
            </el-col>
        </div>-->
        <!-- 化妆品 -->
        <div v-if="typeCode.includes('301'||'302')">
          <el-col :span="24">
            <div class="searchTitle mt20">企业产值</div>
          </el-col>
          <!-- @del="e => del(e.data, e.index, 'paList')" -->
          <editable-table
            tableClassName="paList"
            :headers="headers"
            :data="form.paList"
            @pageChange="pageChange"
            @add="e => add(e, 'paList')"
            @edit="edit"
            @del="dele"
            @save="save"
            :formRef="$refs.form"
            isDelete
          >
            <template #year="{row}">
              <el-date-picker
                size="small"
                ref="dateOfControl"
                v-model="row.year"
                type="year"
                placeholder="选择年份"
                value-format="yyyy"
                format="yyyy"
                style="width: 100%"
              ></el-date-picker>
            </template>
            <template #classificationOfProducts="{row}">
              {{row.classificationOfProducts}}
              <el-select
                v-model="row.classificationOfProducts"
                placeholder="请选择类型"
                clearable
                multiple
                :style="{ width: '100%' }"
              >
                <el-option
                  v-for="item in ProductsList"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"
                ></el-option>
              </el-select>
            </template>
          </editable-table>
        </div>
      </el-form>
    </div>
  </div>
</template>
  
  <script>
import { deepClone } from "@/utils/common";
import { byTypeCode } from "@/api/variety";
import {
  businessSave,
  epQyxxQyczSave,
  getEpQyxxQyczByEpId,
  epQyxxQyczDel,
  getTypeList
} from "./api";
import { getTempEpInfoByEpId } from "@/api/enterprise.js";
import { getUserOrgId } from "@/utils/common";
export default {
  props: {
    value: Object
  },
  data() {
    return {
      pageEdit: false,
      elForm: {},
      delList: [],
      typeList: [],
      typeCode: [],
      headers: [
        {
          label: "序号",
          type: "index"
        },
        {
          label: "年份",
          prop: "year",
          required: true,
          formItemSlot: "year",
          formProp: "paList"
        },
        {
          label: "营业税金（万元）",
          prop: "salesTax",
          required: true,
          formProp: "paList"
        },
        {
          label: "化妆品工业生产总值（万元）",
          prop: "grossDomesticProductCosmetics",
          required: true,
          formProp: "paList"
        },
        {
          label: "企业已生产产品分类",
          prop: "classificationOfProducts",
          formItemSlot: "classificationOfProducts",
          required: true,
          formProp: "paList"
        },
        {
          label: "操作",
          type: "handle"
        }
      ],
      ProductsList: [
        {
          id: "1",
          code: "01",
          name: "新功效"
        }
      ]
    };
  },
  watch: {
    "form.paList.classificationOfProducts": {
      handler(val, oldVal) {
        if (val?.constructor != Array) {
          this.form.paList.classificationOfProducts = [];
        }
      }
    }
  },
  computed: {
    form: {
      get() {
        return (
          this.value || {
            paList: [
              {
                up: true
              }
            ]
          }
        );
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getTempEpInfoByEpId();
      this.getTypeList();
      this.byTypeCode();
    });
  },
  methods: {
    setInitData(data) {
      this.form = typeof data == "string" ? JSON.parse(data) : data;
      this.form.paList.classificationOfProducts = [];
    },
    // 获取表格数据
    getEpQyxxQyczByEpId() {
      getEpQyxxQyczByEpId().then(res => {
        let arr = res.data || [];
        if (arr.length) {
          arr.forEach(item => {
            item.up = true;
          });
        }
        this.form.paList = arr;
        if (!this.form.paList.classificationOfProducts) {
          this.form.paList.classificationOfProducts = [];
        }
        this.form.paList.classificationOfProducts = [];
        if (!this.form.paList.length) {
          this.addData();
        }
      });
    },
    // 查询主表
    getTempEpInfoByEpId(key) {
      getTempEpInfoByEpId().then(res => {
        if (res.code == 200) {
          this.elForm = res.data;
          if (key != 1) {
            this.getEpQyxxQyczByEpId();
          }
        }
      });
    },
    // 保存主表
    async handleSave(key, epid) {
      let form = {
        id: this.elForm.id,
        epid: this.elForm.epid || epid,
        uscc: this.elForm.uscc,
        name: this.elForm.name,
        legalRepresentative: this.elForm.legalRepresentative,
        registeredDate: this.elForm.registeredDate,
        registeredCapital: this.elForm.registeredCapital,
        status: key,
        registeredAddress: this.elForm.registeredAddress
      };
      await businessSave(form).then(res => {});
    },
    //获取主表企业产值，判断显示对应企业产值表
    getTypeList() {
      getTypeList({ epId: getUserOrgId() }).then(res => {
        this.typeList = res.data;
        this.typeCode = this.typeList.map(item => {
          return item.subjectCode;
        });
      });
    },
    // 复制和新增一行
    add(val = {}, formProp) {
      let obj = JSON.parse(JSON.stringify(val));
      if (obj.id) {
        obj.id = "";
      }
      if (Array.isArray(this.form[formProp])) {
        this.form[formProp].push(obj);
      } else {
        this.$set(this.form, formProp, [obj]);
      }
    },
    edit(row) {
      this.$set(row, "_edit", true);
    },
    dele(row, index, prop) {
      console.log("======666==============================");
      console.log(this.form[prop]);
      console.log("====================================");
      this.form[prop].splice(index, 1);
      // if (this.form.delList.length) {
      //   epQyxxQyczDel(this.delList.map(item => item.id)).then(res => {
      //     this.delList = [];
      //   });
      // }
    },
    // save(row) {
    //   this.$set(row, "_edit", false);
    // },
    async save(key, epid) {
      this.getTempEpInfoByEpId(1);
      // this.handleSave(key, epid);
      this.dele();
      delete this.form.status;
      console.log("===============63333=====================");
      console.log(this.form.paList);
      console.log("====================================");
      if (this.form.paList.length) {
        await epQyxxQyczSave(this.form.paList)
          .then(res => {
            if (res.code == 200) {
              this.getTempEpInfoByEpId();
            }
          })
          .finally(() => {
            this.$parent.$parent.nextLoading = false;
          });
      }
    },
    pageChange({ pageNum: current, pageSize: size }) {
      let paramrs = {
        ...this.form,
        current,
        size
      };
    },
    //字典
    byTypeCode() {
      this.dicList = [
        //币种
        byTypeCode({
          typeCode: "hzp_classification_of_products_produced_by_the_enterprise"
        })
      ];
      Promise.all(this.dicList).then(res => {
        if (res.every(e => e.code == 200)) {
          this.ProductsList = res[0].data;
        }
      });
    }
  }
};
</script>
  
  <style lang="scss" scoped>
.form-row {
  /* background: rgba(242, 242, 242, 1); */
  margin-bottom: 10px;
  border-radius: 8px;
  .btn-group {
    text-align: right;
    padding: 10px 10px 0;
  }
  .tableContain {
    padding: 0 10px 15px;
    transition: 0.2s;
    overflow: hidden;
  }
  .hideContain {
    height: 80px;
  }
}
.form-row:last-child {
  margin-bottom: 0;
}
.span-text {
  display: inline-block;
  font-size: 12px;
  color: #666;
  margin: 0 0 10px 20px;
}
.line_height_16 {
  >>> .el-form-item__label {
    line-height: 16px;
  }
}
.mt20 {
  margin-top: 20px;
}
.el-form-item {
  >>> .el-form-item__content {
    width: calc(100% - 170px);
    .el-select,
    .el-input {
      width: 100%;
    }
  }
}
</style>
  