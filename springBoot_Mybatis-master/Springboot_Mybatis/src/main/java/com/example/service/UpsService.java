package com.example.service;

import java.util.List;
import java.util.Map;

/**
 * @Author:0xOO
 * @Date: 2018/9/26 0026
 * @Time: 15:23
 */

public interface UpsService {


    //ups供电管理
    List<Map<String,Object>> selectupsinfo();
    //涉密机房温湿度
    List<Map<String,Object>> selectsmjfwsd();
    //0926
    List<Map<String,Object>> selectDhInfoList();

    List<Map<String,Object>> selectDhInfoList415();

    List<Map<String,Object>> selectDhInfoListtwo();

    //带参数动环数据查询
    List<Map<String,Object>> selectDhInfoListByParam(Map<String, Object> param);
    //告警带参
    List<Map<String,Object>> DhJgInfoList(Map<String, Object> param);
}
