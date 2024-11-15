

```
<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24" class="card-box">
        <el-card v-show="showSearch" ref="queryRef">
          <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
            <el-form-item label="名称" prop="name">
              <el-input v-model="queryParams.name" placeholder="请输入名称" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="类型" prop="type">
              <el-input v-model="queryParams.type" placeholder="请输入类型" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item style="float: right">
              <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
              <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <!-- 算法管理列表 -->
      <el-col :span="24" class="card-box">
        <el-card>
          <el-row justify="space-between">
            <el-col :span="12" class="card-box">
              <div slot="header" class="clearfix">
                <span>算法管理列表</span>
              </div>
            </el-col>
            <el-col :span="12" class="card-box">
              <el-row :gutter="10" class="mb8" style="float: right">
                <el-col :span="1.5">
                  <el-button type="primary" plain icon="Plus" @click="handleAdd"
                    v-hasPermi="['algorithm:algorithm:add']">新增</el-button>
                </el-col>

                <el-col :span="1.5" v-if="!showCardData">
                  <el-button type="success" plain icon="Edit" @click="handleUpdate" :disabled="single"
                    v-hasPermi="['algorithm:algorithm:edit']">修改</el-button>
                </el-col>

                <el-col :span="1.5" v-if="!showCardData">
                  <el-button type="danger" plain icon="Delete" @click="handleDelete" :disabled="single"
                    v-hasPermi="['algorithm:algorithm:remove']">删除</el-button>
                </el-col>

                <el-col :span="1.5">
                  <el-button type="warning" plain icon="downloadFile" @click="handleExport"
                    v-hasPermi="['algorithm:algorithm:export']">导出</el-button>
                </el-col>
                <!-- 刷新 -->
                <el-col :span="1.5" v-if="!showCardData">
                  <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
                </el-col>
                <el-col :span="1.5">
                  <el-tooltip class="item" effect="dark" content="切换" placement="top">
                    <el-button circle icon="Switch" @click="changeShowLayout" />
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-col>
          </el-row>



          <!-- 卡片列表 -->
          <div v-if="showCardData">
            <el-scrollbar 
              @scroll="handleScroll" 
              :height="tableHeight"
              :view-style="{ padding: '0 20px' }"
            >
              <el-row :gutter="10">
                <el-col 
                  :span="6" 
                  v-for="item in cardAlgorithmList" 
                  :key="item.id" 
                  style="margin-bottom: 10px"
                >
                  <el-card class="algorithm-card" style="width: 100%" shadow="hover">
                    <template #header>
                      <div style="height: 22px">
                        <el-row justify="space-between">
                          <el-col :span="12">
                            <el-row>
                              <div v-if="item.iconUrl"><el-avatar :src="baseUrl + item.iconUrl"
                                  size="small"></el-avatar>
                              </div>
                              <div class="title">
                                {{ item.name }}
                              </div>
                            </el-row>
                          </el-col>
                          <el-col :span="12">
                            <div class="btnBox">
                              <el-link type="primary" style="margin-right: 10px" icon="Edit"
                                @click="handleUpdate(item)">修改</el-link>
                              <el-link type="danger" icon="Delete" @click="handleDelete(item)">删除</el-link>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </template>
                    <div style="height: 110px ;margin-bottom: 40px">
                      <!-- 卡片内容 -->
                      <el-row justify="space-between" class="card-content">
                        <el-col :span="12">
                          <div style="margin-bottom: 20px">算法类别: {{ item.type }}</div>
                          <div style="margin-bottom: 20px">作者: {{ item.author }}</div>
                        </el-col>
                        <el-col :span="12">
                          <div style="margin-bottom: 20px">算法版本: {{ item.version }}</div>
                          <div style="white-space: nowrap">
                            创建时间: <span>{{ item.createTime }}</span>
                          </div>
                        </el-col>
                        <el-col :span="24">
                          <!-- 描述信息，超过两行显示省略号 -->
                          <el-tooltip class="item" effect="dark" :content="item.description" placement="top">
                            <div class="sl-2" style="color: gray; ">描述：{{ item.description }}</div>
                          </el-tooltip>
                        </el-col>
                      </el-row>
                    </div>


                    <div style="height: 50px; width: 100%; background-color: #f5f7fb">
                      <el-row :gutter="10">
                        <el-col :span="12" style="text-align: center">
                          <el-button style="line-height: 50px" link type="primary"
                            @click="showExcelPreview(item)">预览</el-button>
                        </el-col>
                        <div style="width: 2px;height: 30px;background-color: #CCCCCC; margin-top: 10px" />
                        <el-col :span="11" style="text-align: center">
                          <el-button style="line-height: 50px" link type="primary"
                            @click="downloadFile(item)">下载</el-button>
                        </el-col>
                      </el-row>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-scrollbar>
          </div>
 

          <!-- 列表形式 -->

          <el-table v-if="!showCardData" v-loading="loading" :data="algorithmList"
            @selection-change="handleSelectionChange" :height="tableHeight">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="序号" type="index" width="50" align="center">
              <template #default="scope">
                <span>{{ (queryParams.pageNum - 1) * queryParams.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>

            <el-table-column label="图标" align="center" prop="iconUrl">
              <template #default="scope">
                <el-image :src="baseUrl + scope.row.iconUrl" :fit="fit" :lazy="true" preview-teleported
                  :preview-src-list="[baseUrl + scope.row.iconUrl]" style="height: 32px; width: 32px;" />
              </template>
            </el-table-column>
            <el-table-column label="名称" align="center" prop="name" />
            <el-table-column label="算法类别" align="center" prop="type" />
            <el-table-column label="作者" align="center" prop="author" />
            <el-table-column label="算法版本" align="center" prop="version" />
            <el-table-column label="创建时间" align="center" prop="createTime" width="100">
              <template #default="scope">
                <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="300">
              <template #default="scope">
                <el-button link type="primary" icon="Tickets" @click="showExcelPreview(scope.row)"
                  v-hasPermi="['deployPlan:deployPlan:edit']">预览</el-button>
                <el-button link type="primary" icon="Tickets" @click="downloadFile(scope.row)"
                  v-hasPermi="['deployPlan:deployPlan:edit']">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
          <pagination v-if="!showCardData" v-show="total >= 0" :total="total" v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize" @pagination="getList" />
        </el-card>
      </el-col>
    </el-row>


<!-- 新增与修改  -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="algorithmRef" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入名称" />
        </el-form-item>

        <el-form-item label="作者" prop="author">
          <el-input v-model="form.author" placeholder="请输入作者" />
        </el-form-item>
        <el-form-item label="算法类别" prop="type">
          <el-input v-model="form.type" placeholder="请输入类别" />
        </el-form-item>
        <el-form-item label="版本" prop="version">
          <el-input v-model="form.version" placeholder="请输入版本" />
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker v-model="form.createTime" type="date" value-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择创建日期"
            style="width: 100%" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input type="textarea" v-model="form.description" placeholder="请输入描述" />
        </el-form-item>
        <el-form-item label="文件上传" prop="fileUrl">
          <el-upload style="width: 100%" :action="uploadFileUrl" :headers="headers" :show-file-list="true"
            :file-list="fileList" :limit="1" :before-upload="handleBeforeUpload" :on-exceed="handleExceed"
            :on-success="handleUploadSuccess">
            <el-button type="primary">点击上传</el-button>
          </el-upload>

          <!-- <file-upload-no-auto
                  ref="modelFileUpload"
                  :file-type="['zip', 'rar']"
                  :limit="1"
                  :file-size="500"
                  :is-show-file-list="true"
                  :temp="true"
                  moduleName="entityLib"
                  upload-btn-name="选取文件"
                  @fileChange="handleUploadChange"
                  @fileDelete="handleUploadDelete"
                  :fileIds="importForm.fileId"
              /> -->
        </el-form-item>

        <el-form-item label="图标" prop="iconUrl">
          <imageUpload :limit="1" v-model="form.iconUrl" moduleName="armyIcon" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>

  </div>
  <el-dialog v-model="isPreviewVisible" title="Excel 预览"  width="50vw" >
        <vue-office-excel :src="currentFileUrl"  style="height: 70vh;" />
    
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="isPreviewVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
</template>

<script setup name="Algorithm">
import VueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'
import { getToken } from '@/utils/auth'
import { listAlgorithm, getAlgorithm, delAlgorithm, addAlgorithm, updateAlgorithm } from '@/api/rms/algorithm'
const uploadFileUrl = ref(import.meta.env.VITE_APP_BASE_API + '/common/upload') // 上传文件服务器地址
const headers = ref({ Authorization: 'Bearer ' + getToken() })
const { proxy } = getCurrentInstance()
const algorithmList = ref([]) // 算法列表
const tableHeight="calc(100vh - 340px)";
const cardAlgorithmList= ref([])
const open = ref(false) // 控制弹出框的显示
const loading = ref(true) // 加载状态
const showSearch = ref(true) // 控制搜索框的显示
const ids = ref([]) // 选中的算法ID
const single = ref(true) // 是否单选
const multiple = ref(true) // 是否多选
const total = ref(0) // 总数
const title = ref('') // 弹出框标题
const fileList = ref([]) // 文件列表
const logoFileList = ref([]) // logo文件列表
const fileType = ref(['xlsx', 'xls']) // 允许的文件类型
const logoType = ref(['png', 'jpg', 'icon']) // 允许的logo文件类型
const isPreviewVisible = ref(false)
const currentFileUrl = ref('') // 当前预览的文件 URL
const baseUrl = process.env.API_BASE
const previousRowNum = ref(0)  // 当前行号
const data = reactive({
  form: {}, // 表单数据
  queryParams: {
    pageNum: 1, // 当前页码
    pageSize: 10, // 每页显示数量
    name: null, // 查询参数：名称
    type: null // 查询参数：类型
  },
  cardQueryParams: {
    pageNum: 1, // 当前页码
    pageSize: 10, // 每页显示数量
    name: null, // 查询参数：名称
    type: null // 查询参数：类型
  },
  rules: {
    name: [{ required: true, message: '名称不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度必须在 1 到 50 个字符之间', trigger: 'blur' }],
    author: [{ required: true, message: '作者不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度必须在 1 到 50 个字符之间', trigger: 'blur' }],
    type: [{ required: true, message: '类型不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '长度必须在 1 到 50 个字符之间', trigger: 'blur' }],
    version: [{ max: 50, message: '长度必须在 50 个字符之内', trigger: 'blur' }],
    description: [{ required: true, message: '描述不能为空', trigger: 'blur' }, { min: 1, max: 255, message: '长度必须在 1 到 255 个字符之间', trigger: 'blur' }],
    createTime: [{ required: true, message: '时间不能为空', trigger: 'blur' }],
    fileUrl: [{ required: true, message: '算法文件不能为空', trigger: 'blur' }],
    iconUrl: [{ required: true, message: '头像不能为空', trigger: 'blur' }]
  }
})
// const options = ref({

//   beforeTransformData: (workbookData) => { return workbookData }, //底层通过exceljs获取excel文件内容，通过该钩子函数，可以对获取的excel文件内容进行修改，比如某个单元格的数据显示不正确，可以在此自行修改每个单元格的value值。
//   transformData: (workbookData) => { return workbookData }, //将获取到的excel数据进行处理之后且渲染到页面之前可通过transformData对即将渲染的数据及样式进行修改，此时每个单元格的text值就是即将渲染到页面上的内容
// })
const { queryParams,cardQueryParams ,form, rules } = toRefs(data)

const showCardData = ref(true) // 默认为 true



/** 查询算法理列表 */
function getList() {
  loading.value = true
  listAlgorithm(queryParams.value).then(response => {
    algorithmList.value = response.rows
    // 格式化创建时间
    algorithmList.value.forEach(element => {
      let str = element.createTime.substring(0, 11)
      element.createTime = str
    })
    total.value = response.total
    loading.value = false
  })
}

function refreshList() {
  previousRowNum.value = 0
  cardQueryParams.value.pageNum = 1
  loading.value = true
  listAlgorithm(cardQueryParams.value).then(response => {
    cardAlgorithmList.value = response.rows
    // 格式化创建时间
    cardAlgorithmList.value.forEach(element => {
      let str = element.createTime.substring(0, 11)
      element.createTime = str
    })
    total.value = response.total
    loading.value = false
  })
}

// 取消按钮
function cancel() {
  open.value = false
  reset()
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('rms/algorithm/export', {
    ...queryParams.value
  }, `algorithm_${new Date().getTime()}.xlsx`)
}

// 表单重置
function reset() {
  form.value = {
    id: null,
    name: null,
    author: null,
    type: null,
    version: null,
    description: null,
    updateTime: null,
    fileUrl: null,
    fileName: null,
    iconUrl: null,
    createTime: null
  }
  fileList.value = []
  logoFileList.value = []
  proxy.resetForm('algorithmRef')
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1
  getList()
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm('queryForm')
  handleQuery()
}

// 切换列表数据方法
function changeShowLayout() {
  showCardData.value = !showCardData.value
  if (!showCardData.value) {
    getList()
  }

}


// 多选框选中数据
function handleSelectionChange(selection) {
  ids.value = selection.map(item => item.id)
  single.value = selection.length != 1
  multiple.value = !selection.length
}

// 上传成功回调
function handleUploadSuccess(res, file) {
  form.value.fileUrl = res.fileName
  form.value.fileName = res.originalFilename
}

// 上传前校检格式和大小
function handleBeforeUpload(file) {
  // 校检文件类型
  if (fileType.value.length) {
    const fileName = file.name.split('.')
    const fileExt = fileName[fileName.length - 1]
    const isTypeOk = fileType.value.indexOf(fileExt) >= 0
    if (!isTypeOk) {
      proxy.$modal.msgError(`文件格式不正确, 请上传${fileType.value.join('/')}格式文件!`)
      return false
    }
  }
}

function showExcelPreview(item) {
  currentFileUrl.value = baseUrl + item.fileUrl // 设置当前预览的文件 URL
  isPreviewVisible.value = true
}

// logo上传前校检格式和大小
function logoHandleBeforeUpload(file) {
  // 校检文件类型
  if (fileType.value.length) {
    const fileName = file.name.split('.')
    const fileExt = fileName[fileName.length - 1]
    const isTypeOk = logoType.value.indexOf(fileExt) >= 0
    if (!isTypeOk) {
      proxy.$modal.msgError(`文件格式不正确, 请上传${logoType.value.join('/')}格式文件!`)
      return false
    }
  }
}

function handleExceed() {
  proxy.$modal.msgError(`上传文件数量不能超过 1个!`)
}

function downloadFile(item) {
  window.location.href = baseUrl+item.fileUrl
}

/** 新增按钮操作 */
function handleAdd() {
  reset()
  open.value = true
  title.value = '新增算法'
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset()
  const _id = row.id || ids.value
  getAlgorithm(_id).then(response => {
    form.value = response.data
    fileList.value = [{ url: response.data.fileUrl, name: response.data.fileName }]
    open.value = true
    title.value = '修改算法管理'
  })
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs['algorithmRef'].validate(valid => {
    if (valid) {
      if (form.value.id != null) {
        updateAlgorithm(form.value).then(response => {
          proxy.$modal.msgSuccess('修改成功')
          open.value = false
            refreshList()
            getList()
         
        })
      } else {
        addAlgorithm(form.value).then(response => {
          proxy.$modal.msgSuccess('新增成功')
          open.value = false
            refreshList()
            getList()
    
            })
          }
    }
  })
}

/** 删除按钮操作 */
function handleDelete(row) {
  const _ids = row.id || ids.value
  proxy.$modal
    .confirm('是否确认删除算法管理编号为"' + _ids + '"的数据项？')
    .then(function () {
      return delAlgorithm(_ids)
    })
    .then(() => {
        refreshList()
        getList()
      proxy.$modal.msgSuccess('删除成功')
    })
    .catch(() => { })
}
// 之前的行号


const handleScroll = (event) => {
  const { scrollTop } = event
  console.log(previousRowNum.value,"handleScroll");
  
  if (scrollTop-previousRowNum.value >=15) {
    previousRowNum.value = scrollTop
    const maxPage = Math.ceil(total.value / cardQueryParams.value.pageSize)
    if (cardQueryParams.value.pageNum < maxPage) {
      loading.value = true
      cardQueryParams.value.pageNum = cardQueryParams.value.pageNum + 1
      // 调用实际的API获取数据
      listAlgorithm(cardQueryParams.value).then(response => {
        // 格式化创建时间
        response.rows.forEach(element => {
          element.createTime = element.createTime.substring(0, 11)
        })
        cardAlgorithmList.value = [...cardAlgorithmList.value, ...response.rows]
        total.value = response.total
      })
    }
  }

}

refreshList()

getList()
</script>

<style scoped>
.btnBox {
  display: flex;
  justify-content: flex-end;
}

.sl-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.avatar-uploader .avatar {
  width: 40px;
  height: 40px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 40px;
  height: 40px;
  text-align: center;
}

</style>

```

