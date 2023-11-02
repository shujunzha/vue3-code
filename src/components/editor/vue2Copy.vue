<!-- 药品生产地址 -->
<template>
  <div style="width: 100%; position: relative;height: calc(100% - 40px);">
    <div style="position: absolute;width:100%;height:100%;">
      <!-- <div style="text-align: right;margin-bottom: 15px;">
          <el-button
            type="primary"
            plain
            size="mini"
            @click="addData"
            class="add_btn"
            icon="el-icon-plus"
          >新增</el-button>
      </div>-->

      <!-- <div v-if="paList.length"> -->
      <!-- <el-row :gutter="15" v-for="(item, index) in paList" :key="index" class="form-row"> -->
      <!-- <div class="btn-group">
              <el-button
                type="primary"
                plain
                size="mini"
                class="add_btn"
                :icon="item.up ?'el-icon-upload2':'el-icon-download'"
                @click="item.up = !item.up"
              >{{ item.up ? "向上收起" : "向下展开" }}</el-button>
              <el-button
                type="primary"
                plain
                size="mini"
                class="add_btn"
                icon="el-icon-copy-document"
                @click="copyData(item, index)"
              >复制</el-button>
              <el-button
                type="danger"
                plain
                size="mini"
                class="add_btn"
                icon="el-icon-delete"
                @click="delData(item,index)"
              >删除</el-button>
      </div>-->

      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="150px">
        <!-- <el-col :span="24">
                <div class="searchTitle">企业产值</div>
                <span v-show="item.up" class="span-text">注：假设没有生物制品，生物制品产值（万元）请填写"0"，其他数据同理。</span>
              </el-col>
              <el-col :span="8">
                <el-form-item label="年份" prop="year">
                  <el-date-picker
                    v-model="paList[index].year"
                    type="year"
                    value-format="yyyy"
                    placeholder="选择年"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="营业税金(万元)" prop="salesTax">
                  <el-input
                    v-model="paList[index].salesTax"
                    placeholder="请输入营业税金(万元)"
                    clearable
                    :style="{ width: '100%' }"
                  ></el-input>
                </el-form-item>
        </el-col>-->
        <div v-if="typeCode.includes('101'||'102')">
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
        </div>
        <div v-if="typeCode.includes('301'||'302')">
          <el-col :span="24">
            <div class="searchTitle mt20">企业产值</div>
          </el-col>
          <editable-table
            tableClassName="paList"
            :headers="headers"
            :data="paList"
            @add="add('paList')"
            @edit="edit"
            @del="e => del(e.data, e.index, 'paList')"
            @save="save"
          ></editable-table>
          <!-- <el-col :span="8">
                  <el-form-item
                    label="化妆品工业生产总值(万元)"
                    prop="grossDomesticProductCosmetics"
                    class="line_height_16"
                  >
                    <el-input
                      v-model="paList[index].grossDomesticProductCosmetics"
                      placeholder="请输入化妆品工业生产总值(万元)"
                      clearable
                      :style="{ width: '100%' }"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="企业已生产产品分类" prop="classificationOfProducts">
                    <el-input
                      v-model="paList[index].classificationOfProducts"
                      placeholder="企业已生产产品分类"
                      clearable
                      :style="{ width: '100%' }"
                    ></el-input>
                  </el-form-item>
          </el-col>-->
        </div>
      </el-form>
      <!-- </el-row> -->
      <!-- </div>
      <div v-else>请添加数据</div>-->
    </div>
  </div>
</template>
  
  <script>
import { deepClone } from "@/utils/common";

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
      paList: [
        {
          up: true
        }
      ],
      rules: {
        year: [
          {
            required: true,
            message: "请输入年份",
            trigger: "blur"
          }
        ],
        salesTax: [
          {
            required: true,
            message: "请输入营业税金",
            trigger: "blur"
          }
        ],
        grossDomesticProductDrug: [
          {
            required: true,
            message: "请输入药品工业生产总值",
            trigger: "blur"
          }
        ],
        outputValue: [
          {
            required: true,
            message: "请输入药品工业产值",
            trigger: "blur"
          }
        ],
        cpOutputValue: [
          {
            required: true,
            message: "请输入委托加工产值",
            trigger: "blur"
          }
        ],
        outputValueOfRawMaterials: [
          {
            required: true,
            message: "请输入原料药产值",
            trigger: "blur"
          }
        ],
        chemicalProductionValue: [
          {
            required: true,
            message: "请输入化学药品产值",
            trigger: "blur"
          }
        ],
        outputValueOfTCM: [
          {
            required: true,
            message: "请输入中成药产值",
            trigger: "blur"
          }
        ],
        tcmpreparedInReadyToUseForms: [
          {
            required: true,
            message: "请输入中药饮片",
            trigger: "blur"
          }
        ],
        formulaParticleOutputValue: [
          {
            required: true,
            message: "请输入配方颗粒产值",
            trigger: "blur"
          }
        ],
        outputValueOfBiologicalProducts: [
          {
            required: true,
            message: "请输入生物制品产值",
            trigger: "blur"
          }
        ],
        lines: [
          {
            required: true,
            message: "请输入生产线",
            trigger: "blur"
          }
        ],
        genericName: [
          {
            required: true,
            message: "请输入药品通用名称",
            trigger: "blur"
          }
        ],
        drugApprovalNumber: [
          {
            required: true,
            message: "请输入药品批准文号",
            trigger: "blur"
          }
        ],
        dosage: [
          {
            required: true,
            message: "请输入剂型",
            trigger: "blur"
          }
        ],
        drugSpecs: [
          {
            required: true,
            message: "请输入药品规格",
            trigger: "blur"
          }
        ],
        productionPlan: [
          {
            required: true,
            message: "请输入生产计划",
            trigger: "blur"
          }
        ],
        isProduction: [
          {
            required: true,
            message: "请输入是否在产",
            trigger: "blur"
          }
        ],
        entrustedDate: [
          {
            required: true,
            message: "请输入委托有效期",
            trigger: "blur"
          }
        ],
        entrustedEnterpriseName: [
          {
            required: true,
            message: "请输入委托/受托企业名称",
            trigger: "blur"
          }
        ],
        entrustedEnterpriseAddress: [
          {
            required: true,
            message: "请输入委托/受托企业注册地址/生产地址",
            trigger: "blur"
          }
        ],
        drugType: [
          {
            required: true,
            message: "请输入药品类型",
            trigger: "blur"
          }
        ],
        grossDomesticProductEquipment: [
          {
            required: true,
            message: "请输入器械工业生产总值",
            trigger: "blur"
          }
        ],
        grossDomesticProductCosmetics: [
          {
            required: true,
            message: "请输入化妆品工业生产总值",
            trigger: "blur"
          }
        ],
        classificationOfProducts: [
          {
            required: true,
            message: "请输入企业已生产产品分类",
            trigger: "blur"
          }
        ]
      },
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
          formProp: "year"
        },
        {
          label: "营业税金（万元）",
          prop: "salesTax",
          required: true,
          formProp: "salesTax"
        },
        {
          label: "化妆品工业生产总值（万元）",
          prop: "grossDomesticProductCosmetics",
          required: true,
          formProp: "grossDomesticProductCosmetics"
        },
        {
          label: "企业已生产产品分类",
          prop: "classificationOfProducts",
          required: true,
          formProp: "classificationOfProducts"
        },
        {
          label: "操作",
          type: "handle"
        }
      ]
    };
  },
  watch: {
    paList: {
      handler(val) {
        this.form.list = val;
      },
      deep: true
    }
  },
  computed: {
    form: {
      get() {
        return (
          this.value || {
            paList: []
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
    });
  },
  methods: {
    setInitData(data) {
      this.paList = (JSON.parse(data).list || []).map(item => {
        return {
          ...item,
          up: true
        };
      });
      if (!this.paList.length) {
        this.addData();
      }
    },
    getEpQyxxQyczByEpId() {
      getEpQyxxQyczByEpId().then(res => {
        let arr = res.data || [];
        if (arr.length) {
          arr.forEach(item => {
            item.up = true;
          });
        }
        this.paList = arr;
        if (!this.paList.length) {
          this.addData();
        }
      });
    },
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
    // async save(key, epid) {
    //   this.getTempEpInfoByEpId(1);
    //   // this.handleSave(key, epid);
    //   this.del();
    //   delete this.form.status;
    //   if (this.form.list.length) {
    //     await epQyxxQyczSave(this.form.list)
    //       .then(res => {
    //         if (res.code == 200) {
    //           this.getTempEpInfoByEpId();
    //         }
    //       })
    //       .finally(() => {
    //         this.$parent.$parent.nextLoading = false;
    //       });
    //   }
    // },
    // del() {
    //   if (this.delList.length) {
    //     epQyxxQyczDel(this.delList.map(item => item.id)).then(res => {
    //       this.delList = [];
    //     });
    //   }
    // },
    // addData() {
    //   this.paList.push({
    //     up: true
    //   });
    // },
    copyData(item, index) {
      let targetItem = deepClone(item);
      delete targetItem.id;
      this.paList.push(targetItem);
    },
    delData(item, index) {
      if (this.paList.length == 1) {
        this.$message.warning("不可删除最后一条");
      } else {
        this.delList.push(item);
        this.paList.splice(index, 1);
      }
    },
    getTypeList() {
      getTypeList({ epId: getUserOrgId() }).then(res => {
        this.typeList = res.data;
        console.log("======666==============================");
        console.log(this.typeList);
        console.log("====================================");
        this.typeCode = this.typeList.map(item => {
          return item.subjectCode;
        });
      });
    },
    add(prop) {
      if (Array.isArray(this[prop])) {
        this[prop].push({ _edit: true });
      } else {
        // this.$set(this.form, prop, [{ _edit: true }]);
      }
    },
    edit(row) {
      this.$set(row, "_edit", true);
    },
    del(row, index, prop) {
      this.form[prop].splice(index, 1);
    },
    save(row) {
      this.$set(row, "_edit", false);
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
  