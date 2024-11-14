

表格中图像显示

```

  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
```

```
            <el-table-column label="图标" align="center" prop="iconUrl">
              <template #default="scope">
                <el-image :src="baseUrl + scope.row.iconUrl" :fit="fit" :lazy="true" preview-teleported
                  :preview-src-list="[baseUrl + scope.row.iconUrl]" style="height: 40px; width: 40px;" />
              </template>
            </el-table-column>
```



表格中 按钮隐藏

```
                <el-dropdown>
                  <span class="el-dropdown-link" style="font-weight: bold;font-size: medium">
                    ...
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <!--                <el-dropdown-item>
                                        <el-button link type="primary" icon="Edit" @click="handleRunState(scope.row)" v-hasPermi="['deployPlan:deployPlan:edit']">运行状态</el-button>
                                      </el-dropdown-item>-->
                      <el-dropdown-item>
                        <el-button link type="primary" icon="View" @click="handleView(scope.row, scope.index)"
                          v-hasPermi="['deployPlan:deployPlan:query']">详细</el-button>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                          v-hasPermi="['deployPlan:deployPlan:edit']">修改</el-button>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-button link type="danger" icon="Delete" @click="handleDelete(scope.row)"
                          v-hasPermi="['deployPlan:deployPlan:remove']">删除</el-button>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
```

隐藏超出文字

防止过长的文本导致布局问题，当计划名称超过 15 个字符时，会使用 `el-popover` 组件来显示完整名称，并在卡片标题中显示截断的文本