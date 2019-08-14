package com.example.service.impl;

import com.example.mapper.test01.JgsMapper;
import com.example.service.JgsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("JgsService")
public class IJgsService implements JgsService {


    @Autowired
    JgsMapper jgsMapper;


    /**
     * 返回警告数量
     * @return
     */
    public String selectjgsnum(){
        String count = String.valueOf(jgsMapper.selectjgsnum());
        return count;
    }

    /**
     * 返回警告信息
     * @return
     */
    @Override
    public List<Map<String, Object>> selectjginfo() {
        return jgsMapper.selectjginfo();
    }

    /**
     * 返回警告信息
     * @return
     */
    @Override
    public List<Map<String, Object>> selectjginfoList() {
        return jgsMapper.selectjginfoList();
    }
}
