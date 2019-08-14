package com.example.service;

import java.util.List;
import java.util.Map;

/**
 * @Author:0xOO
 * @Date: 2018/9/26 0026
 * @Time: 15:23
 */

public interface JgsService {

    //警告数量
    String selectjgsnum();
    //回显最新一个警告信息
    List<Map<String,Object>> selectjginfo();
    //显示警告信息的一个列表
    List<Map<String,Object>> selectjginfoList();
}
