package com.example.service.impl;

import com.example.mapper.test01.JgsMapper;
import com.example.mapper.test01.ZcyxztMapper;
import com.example.service.JgsService;
import com.example.service.ZcyxztService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("ZcyxztService")
public class IZcyxztService implements ZcyxztService {


    @Autowired
    ZcyxztMapper zcyxztMapper;

    @Override
    public List<Map<String, Object>> selectZcyxztBaseInfoList() {
        return zcyxztMapper.selectZcyxztBaseInfoList();
    }

    @Override
    public List<Map<String, Object>> selectJkpzxxInfoList() {
        return zcyxztMapper.selectJkpzxxInfoList();
    }

    @Override
    public List<Map<String, Object>> selectJkZtZxsjInfoList() {
        return zcyxztMapper.selectJkZtZxsjInfoList();
    }

    @Override
    public List<Map<String, Object>> selectJkzxlsInfoList() {
        return zcyxztMapper.selectJkzxlsInfoList();
    }

    @Override
    public List<Map<String, Object>> selectWlsbCPULylInfoList() {
        return zcyxztMapper.selectWlsbCPULylInfoList();
    }

    @Override
    public List<Map<String, Object>> selectWlsbNCLylInfoList() {
        return zcyxztMapper.selectWlsbNCLylInfoList();
    }

    @Override
    public List<Map<String, Object>> selectZjsbCPULylInfoList() {
        return zcyxztMapper.selectZjsbCPULylInfoList();
    }

    @Override
    public List<Map<String, Object>> selectZjsbNCLylInfoList() {
        return zcyxztMapper.selectZjsbNCLylInfoList();
    }


//    /**
//     * 返回警告数量
//     * @return
//     */
//    public String selectjgsnum(){
//        String count = String.valueOf(jgsMapper.selectjgsnum());
//        return count;
//    }
//
//    /**
//     * 返回警告信息
//     * @return
//     */
//    @Override
//    public List<Map<String, Object>> selectjginfo() {
//        return jgsMapper.selectjginfo();
//    }
//
//    /**
//     * 返回警告信息
//     * @return
//     */
//    @Override
//    public List<Map<String, Object>> selectjginfoList() {
//        return jgsMapper.selectjginfoList();
//    }
}
