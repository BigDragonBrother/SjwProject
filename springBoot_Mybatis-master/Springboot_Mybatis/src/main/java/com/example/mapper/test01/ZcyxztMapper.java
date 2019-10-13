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
public interface ZcyxztMapper {

    List<Map<String,Object>> selectZcyxztBaseInfoList();

    List<Map<String,Object>> selectJkpzxxInfoList();

    List<Map<String,Object>> selectJkZtZxsjInfoList();

    List<Map<String,Object>> selectJkzxlsInfoList();

    List<Map<String,Object>> selectWlsbCPULylInfoList();

    List<Map<String,Object>> selectWlsbNCLylInfoList();

    List<Map<String,Object>> selectZjsbCPULylInfoList();

    List<Map<String,Object>> selectZjsbNCLylInfoList();


}
