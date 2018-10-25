import { Component, OnInit } from '@angular/core';
import { HmntrdcService } from '../shared/hmntrdc.service';
import { Router } from "@angular/router";
 
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  navData: any;

  keyword: any;

  allProjects: any;

  constructor(private hmntrdcService:HmntrdcService, private router:Router) { }

  ngOnInit() {
    //this.hmntrdcService.getNavMenus().subscribe(
      //res => console.log(res.data)
    //)

    this.allProjects = [
      {name: "公司网址", data: [
        {img: "../assets/images/logos/dribbble.png", name: "JIRA",wid:"711A2FA760F38AF1E050007F01003BAF"},
        {img: "../assets/images/logos/behance.png", name: "parse dashboard",wid:"72748523E9321740E050007F01000F7B"},
        {img: "../assets/images/logos/uicn.png", name: "禅道",wid:"72748523E9351740E050007F01000F7B"},
        {img: "../assets/images/logos/zcool.png", name: "FTP",wid:"711A2FA760FA8AF1E050007F01003BAF"},
        {img: "../assets/images/logos/pinterest.png", name: "邮箱",wid:"72748523E9361740E050007F01000F7B"},
        {img: "../assets/images/logos/huaban.png", name: "开发库 gateway",wid:"72748523E9331740E050007F01000F7B"}
      ]},
      {name: "研发部网址", data: [
        {img: "../assets/images/logos/medium.png", name: "netdata 服务器监控",wid:"77D683ABCCA5A97AE050007F01003889"},
        {img: "../assets/images/logos/uisdc.png", name: "测试库 gateway",wid:"72748523E9341740E050007F01000F7B"},
        {img: "../assets/images/logos/producthunt.png", name: "博客",wid:"711A6D08B78AEF56E050007F01004E1B"},
        {img: "../assets/images/logos/youtube.png", name: "pha 代码审核",wid:"711A6D08B78CEF56E050007F01004E1B"},
        {img: "../assets/images/logos/google.png", name: "jenkins",wid:"711A6D08B78FEF56E050007F01004E1B"}
      ]},
      {name: "金湖", data: [
        {img: "../assets/images/logos/leiphone.png", name: "金湖-大屏",wid:"77DB4D77EB81329BE050007F01007311"},
        {img: "../assets/images/logos/36kr.png", name: "金湖-综合管控",wid:"77DB629EC5813A37E050007F01007687"},
        {img: "../assets/images/logos/dribbble.png", name: "金湖-景管通移动端详情页",wid:"77DB33F8E9FDB1F6E050007F01007230"},
        {img: "../assets/images/logos/pmcaff.png", name: "金湖-景管通移动端",wid:"77D7DEC576780F4FE050007F01006B25"},
        {img: "../assets/images/logos/dribbble.png", name: "溧阳-触摸屏",wid:"77DB6C5879F1C754E050007F01000498"}
      ]},
      {name: "江宁", data: [
        {img: "../assets/images/logos/dribbble.png", name: "江宁-电商平台",wid:"77DC45375D9DAE40E050007F010027DB"},
        {img: "../assets/images/logos/dribbble.png", name: "江宁-web端行程规划",wid:"77DC3D305FA8A286E050007F01001D4A"},
        {img: "../assets/images/logos/pmcaff.png", name: "江宁-旅游监管",wid:"77DC34A5010401C8E050007F01001C79"},
        {img: "../assets/images/logos/dribbble.png", name: "江宁-综合管控端",wid:"77DC34A500FC01C8E050007F01001C79"},
        {img: "../assets/images/logos/pmcaff.png", name: "江宁-iPad 控制端",wid:"77DC2CEF52251D38E050007F01001AC6"},

        {img: "../assets/images/logos/dribbble.png", name: "江宁-iPad 端",wid:"77DC2420F2A07501E050007F010018B1"},
        {img: "../assets/images/logos/dribbble.png", name: "江宁-旅游一张图",wid:"77DC1F6AC5D03F41E050007F0100177A"},
        {img: "../assets/images/logos/pmcaff.png", name: "江宁-大屏端（调试用）",wid:"77DBBC6EB95A5F9FE050007F01000642"},
        {img: "../assets/images/logos/dribbble.png", name: "江宁-大屏被控端",wid:"77DB9E3B48DE972CE050007F0100049A"},
        {img: "../assets/images/logos/pmcaff.png", name: "江宁-大屏端",wid:"77DB6C587A09C754E050007F01000498"}
      ]},
      {name: "同里", data: [
        {img: "../assets/images/logos/dribbble.png", name: "同里-微信导游导览",wid:"77F1E82D269661ECE050007F01004C16"},
        {img: "../assets/images/logos/digitaling.png", name: "同里-游览车调度",wid:"77F1DBC5EA620F71E050007F01004A28"},
        {img: "../assets/images/logos/dribbble.png", name: "同里-消防-拾取坐标",wid:"77F1C6C613B14D39E050007F01004820"},
        {img: "../assets/images/logos/lieyunwang.png", name: "同里-消防",wid:"77F1C6C613A94D39E050007F01004820"},
        {img: "../assets/images/logos/dribbble.png", name: "同里-消防—坐标查看",wid:"77F1B20A6F9CAFC7E050007F010043BE"}
      ]},
      {name: "沙家浜", data: [
        {img: "../assets/images/logos/iyunying.png", name: "沙家浜讲解员-移动端",wid:"77F272F59E3909EBE050007F01005E7B"},
        {img: "../assets/images/logos/woshipm.png", name: "沙家浜讲解员-电脑端",wid:"77F25D0977A065DAE050007F01005BC0"}
      ]},
      {name: "大白鲸", data: [
        {img: "../assets/images/logos/dribbble.png", name: "大白鲸-客流",wid:"77F23AF05BDD04A0E050007F010057E0"},
        {img: "../assets/images/logos/woshipm.png", name: "大白鲸-触摸屏",wid:"77F1DBC5EA720F71E050007F01004A28"},
        {img: "../assets/images/logos/dribbble.png", name: "大白鲸-微信端",wid:"77F1DBC5EA670F71E050007F01004A28"}
      ]},
      {name: "茅山", data: [
        {img: "../assets/images/logos/chanpin100.png", name: "茅山-客流",wid:"77F27867D306CCACE050007F0100637F"}
      ]},
      {name: "陌上花渡", data: [
        {img: "../assets/images/logos/dribbble.png", name: "陌上花渡",wid:"77D86B313C9A327BE050007F01007E69"}
      ]}
    ];
  }

  titleChange(data: any) {
    this.keyword = data;
    console.log(data)
  }

  goDetail(data:any) {
    console.log(data)
    this.router.navigate(['/detailProject'],{queryParams: data});
  }

}
