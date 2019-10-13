package com.example.mapper.test03;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @Author:0xOO
 * @Date: 2018/9/26 0026
 * @Time: 15:20
 */
@Repository
public interface UpsMapper {

    //ups供电管理
    List<Map<String,Object>> selectupsinfo();
    //涉密机房温湿度
    List<Map<String,Object>> selectsmjfwsd();

    List<Map<String,Object>> selectDhInfoList();

    //设备415 1#下的温度湿度
    List<Map<String,Object>> selectDhInfoList415();

    //设备415 2#下的温度湿度
    List<Map<String,Object>> selectDhInfoListtwo();

    //设备415 3#下的温度湿度
    List<Map<String,Object>> selectDhInfoListthree();

    //设备415 4#下的温度湿度
    List<Map<String,Object>> selectDhInfoListfour();

    //动环带参方法20191012
    List<Map<String,Object>> selectDhInfoListByParam(Map<String, Object> param);
    //动环警告带参20191012
    List<Map<String,Object>> DhJgInfoList(Map<String, Object> param);
}
