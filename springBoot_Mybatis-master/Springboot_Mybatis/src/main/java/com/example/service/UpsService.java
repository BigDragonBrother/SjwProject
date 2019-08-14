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

}
