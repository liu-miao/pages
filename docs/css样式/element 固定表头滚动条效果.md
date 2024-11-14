element 固定表头滚动条效果

```
    <!-- 传递关系对话框 -->
    <el-dialog v-model="relationDialogVisible" title="传递关系" width="800px" append-to-body>
      <!-- 添加一个固定高度的容器 -->
      <div class="relation-table-container">
        <el-table 
          v-loading="loading" 
          :data="relationTableValue" 
          row-key="id"
          :max-height="400"  
        >
          <el-table-column v-for="(header, index) in relationTableHeader" 
            :key="index" 
            :label="header.name" 
            align="center"
            :prop="header.name">
            <template #default="scope">
              <div @dblclick="handleCellDblClick(scope.row, header.name, scope.$index)"
                :class="getCellClass(scope.row[header.name])"
                style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                <!-- 如果当前单元格正在编辑，显示下拉框 -->
                <el-select v-if="editingCell.rowIndex === scope.$index && editingCell.column === header.name"
                  v-model="editingCell.value"
                  @change="handleValueChange"
                  @blur="handleSelectBlur"
                  ref="selectRef"
                  size="small"
                  style="width: 100%">
                  <el-option label="R" :value="0" />
                  <el-option label="G" :value="1" />
                  <el-option label="B" :value="2" />
                </el-select>
                <!-- 否则显示普通文本 -->
                <template v-else>
                  {{ getDisplayValue(scope.row[header.name]) }}
                </template>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="relationDialogVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
```



```
// 添加传递关系表格容器样式
.relation-table-container {
  width: 100%;
  // 移除固定高度，让表格自己控制
}

// 自定义滚动条样式
.relation-table-container::-webkit-scrollbar {
  width: 6px;  // 滚动条宽度
  height: 6px; // 滚动条高度
}

.relation-table-container::-webkit-scrollbar-thumb {
  background: #ddd;  // 滚动条颜色
  border-radius: 3px; // 滚动条圆角
}

.relation-table-container::-webkit-scrollbar-track {
  background: #f5f5f5; // 滚动条轨道颜色
}

// 确保对话框内容不会溢出
:deep(.el-dialog__body) {
  padding: 20px;
  overflow: hidden;
}

// 表格内容的样式
:deep(.el-table) {
  // 设置表格的最大高度，超出时显示滚动条
  max-height: 400px;
  overflow-y: auto;
}

// 自定义滚动条样式
:deep(.el-table__body-wrapper::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {
  background: #ddd;
  border-radius: 3px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {
  background: #f5f5f5;
}
```

