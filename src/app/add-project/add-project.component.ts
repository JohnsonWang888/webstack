import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  private myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  // 创建表单元素
  createForm() {
    this.myForm = this.fb.group({
        projectName: ['', Validators.required],
        detail: ['', Validators.required],
        order: ['', Validators.required],
        url: ['', Validators.required],
        // username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
        //     mobile: ['', [Validators.required]],
        //     password: this.fb.group({
        //         pass1: [''],
        //         pass2: ['']
        //     })
    });
  }

  // 提交表单函数
  postDate() {
    /**
     * valid:是否有效
     * invalid:无效
     * dirty:脏
     * status:状态
     * errors:显示错误
     */
    if(this.myForm.valid){
        console.log(this.myForm.value);
    }
  }

}
