package com.example.controller;

import com.example.entity.User;
import com.alibaba.fastjson.JSONObject;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @Author:0xOO
 * @Date: 2018/9/26 0026
 * @Time: 14:42
 */

@RestController
@Controller
@RequestMapping("/testBoot")
public class UserController {

    @Resource
    private UserService userService;


    @RequestMapping(value="getJson")
    public String getdemo(HttpServletRequest request){

        JSONObject obj = new JSONObject();
        System.out.println("userMappertest1的信息：");
        obj.put("data",userService.Sel());
        return obj.toJSONString();
    }
}
