package com.example.service.impl;

import com.example.entity.User;
import com.example.mapper.UserMapper;
import com.example.mapper.test02.UserMappertest2;
import com.example.mapper.test03.UserMappertest3;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("UserService")
public class IUserService implements UserService {


    @Override
    public List<Map<String, Object>> Sel() {
        return null;
    }
}
