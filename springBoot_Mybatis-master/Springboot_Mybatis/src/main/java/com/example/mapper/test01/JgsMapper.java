package com.example.mapper.test01;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @Author:0xOO
 * @Date: 2018/9/26 0026
 * @Time: 15:20
 */
@Repository
public interface JgsMapper {
    //返回警告数
   int selectjgsnum();

    //返回警告信息
    List<Map<String,Object>> selectjginfo();

    //返回警告信息列表
    List<Map<String,Object>> selectjginfoList();
}
