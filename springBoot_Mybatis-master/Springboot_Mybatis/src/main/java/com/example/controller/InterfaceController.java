package com.example.controller;

import com.alibaba.fastjson.JSONObject;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
@RestController
@RequestMapping("/dodo")
public class InterfaceController {

    @RequestMapping("/doPostGetJson")
    public String doPostGetJson() throws ParseException {
        //此处将要发送的数据转换为json格式字符串
        String jsonText = "{id:1,name:'南京'}";
        JSONObject json = (JSONObject) JSONObject.parse(jsonText);
        System.out.println("json:"+json);
        System.out.println("jsonStr:"+json.toJSONString());
        JSONObject sr = this.doPost(json);
        System.out.println("返回参数：" + sr);
        return sr.toString();
    }


    public static JSONObject doPost(JSONObject date) {
        HttpClient client = HttpClients.createDefault();
        // 要调用的接口方法
        String url = "http://127.0.0.1:8080/SjwProject/testBoot/getJson";
        HttpPost post = new HttpPost(url);
        JSONObject jsonObject = null;
        try {
            StringEntity s = new StringEntity(date.toString());
            s.setContentEncoding("UTF-8");
            s.setContentType("application/json");
            post.setEntity(s);
            post.addHeader("content-type", "text/xml");
            HttpResponse res = client.execute(post);
            /*String response1 = EntityUtils.toString(res.getEntity());
            System.out.println(response1);*/
            if (res.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                String result = EntityUtils.toString(res.getEntity());// 返回json格式：
                jsonObject = JSONObject.parseObject(result);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return jsonObject;
    }

}
