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

    List<Map<String,Object>> selectjginfo();

}
