package com.example.service.impl;

import com.example.mapper.test03.UpsMapper;
import com.example.service.UpsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("UpsService")
public class IUpsService implements UpsService {

    @Autowired
    UpsMapper upsMapper;


    @Override
    public List<Map<String, Object>> selectupsinfo() {
        return upsMapper.selectupsinfo();
    }

    @Override
    public List<Map<String, Object>> selectsmjfwsd() {
        return upsMapper.selectsmjfwsd();
    }
}
