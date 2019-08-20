package com.example.controller;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/system")
public class IndexController {
    private static Logger Log = Logger.getLogger(IndexController.class);

    @RequestMapping("index")
    public String index() {
        return "index";
    }

    @RequestMapping("index1")
    public String detest() {
        Log.info("日志内容");
        System.out.println("what is your name and hap old are you  text hot ");
        return "index1";
    }

    @RequestMapping("index2")
    public String detest1(String appkey_, String time_, String token_) {
        System.out.println("appkey_:" + appkey_ + "time_:" + time_ + "token_:" + token_);
        return "index1";
    }

    @RequestMapping("detest2")
    @ResponseBody
    public String detest2(String name, String city) {
        System.out.println("appkey_:");
        return "index1";
    }

}
