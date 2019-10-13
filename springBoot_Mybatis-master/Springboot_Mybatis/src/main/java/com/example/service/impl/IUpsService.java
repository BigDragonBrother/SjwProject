package com.example.service.impl;


import com.example.mapper.test03.UpsMapper;
import com.example.service.UpsService;
import net.sf.json.JSONArray;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

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

    @Override
    public List<Map<String, Object>> selectDhInfoList() {
        return upsMapper.selectDhInfoList();
    }

    @Override
    public List<Map<String, Object>> selectDhInfoList415() {
        SimpleDateFormat formats = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String tstr = formats.format(new Date());
        List<Map<String, Object>> param = upsMapper.selectDhInfoList415();
        List<Map<String, Object>> resultList = new ArrayList<>();
        List<Map<String, Object>> paramList = new ArrayList<>();
        Map<String,Object> map = new HashMap<>();
        map.put("DeviceId",param.get(0).get("devid"));
        map.put("DeviceName",param.get(0).get("devname"));
        map.put("StationName",param.get(0).get("devname"));

//            Map<String,Object> map1 = new HashMap<>();
//            map1.put("PropertyId",param.get(0).get("varid"));
//            map1.put("PropertyName",param.get(0).get("insname"));
//            map1.put("PropertyValue",param.get(0).get("hvalue"));
//            map1.put("Unit",param.get(0).get("insunit"));
//            map1.put("PropertyType","状态");
//            map1.put("UpdateTime",tstr);
//            paramList.add(map1);

            Map<String,Object> map2 = new HashMap<>();
            map2.put("PropertyId","P001");
            map2.put("PropertyName",param.get(1).get("insname"));
            map2.put("PropertyValue",param.get(1).get("hvalue"));
            map2.put("Unit",param.get(1).get("insunit"));
            map2.put("PropertyType","参数");
            map2.put("UpdateTime",tstr);
            paramList.add(map2);

            Map<String,Object> map3 = new HashMap<>();
            map3.put("PropertyId","P002");
            map3.put("PropertyName",param.get(2).get("insname"));
            map3.put("PropertyValue",param.get(2).get("hvalue"));
            map3.put("Unit",param.get(2).get("insunit"));
            map3.put("PropertyType","参数");
            map3.put("UpdateTime",tstr);
            paramList.add(map3);
        map.put("Properties",paramList);
        resultList.add(map);
        return resultList;
    }

    @Override
    public List<Map<String, Object>> selectDhInfoListtwo() {
        SimpleDateFormat formats = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String tstr = formats.format(new Date());
        //String url = "http://123.207.71.18:8017/api/pushdevicedata";
        String url = "http://156.8.11.105:80/api/pushdevicedata";
        List<Map<String, Object>> param = upsMapper.selectDhInfoList415();
        List<Map<String, Object>> resultList = new ArrayList<>();
        List<Map<String, Object>> paramList = new ArrayList<>();

        Map<String,Object> map = new HashMap<>();
        map.put("DeviceId",415);
        map.put("DeviceName",param.get(0).get("devname"));
        map.put("StationName",param.get(0).get("devname"));

//        Map<String,Object> map1 = new HashMap<>();
//        map1.put("PropertyId",param.get(0).get("varid"));
//        map1.put("PropertyName",param.get(0).get("insname"));
//        map1.put("PropertyValue",param.get(0).get("hvalue"));
//        map1.put("Unit",param.get(0).get("insunit"));
//        map1.put("PropertyType","状态");
//        map1.put("UpdateTime",tstr);
//        paramList.add(map1);

        Map<String,Object> map2 = new HashMap<>();
        map2.put("PropertyId","P001");
        map2.put("PropertyName",param.get(1).get("insname"));
        map2.put("PropertyValue",param.get(1).get("hvalue"));
        map2.put("Unit",param.get(1).get("insunit"));
        map2.put("PropertyType","参数");
        map2.put("UpdateTime",tstr);
        paramList.add(map2);

        Map<String,Object> map3 = new HashMap<>();
        map3.put("PropertyId","P002");
        map3.put("PropertyName",param.get(2).get("insname"));
        map3.put("PropertyValue",param.get(2).get("hvalue"));
        map3.put("Unit",param.get(2).get("insunit"));
        map3.put("PropertyType","参数");
        map3.put("UpdateTime",tstr);
        paramList.add(map3);
        map.put("Properties",paramList);
        resultList.add(map);
        JSONArray jsonArray1 = JSONArray.fromObject(resultList);
        try{
            String body = sendPostDataByJson(url,jsonArray1.toString(), "utf-8");
            System.out.println("body:"+body);
        }catch (Exception e){
            e.printStackTrace();
        }


        List<Map<String, Object>> paramtwo = upsMapper.selectDhInfoListtwo();
        List<Map<String, Object>> resultListtwo = new ArrayList<>();
        List<Map<String, Object>> paramListtwo = new ArrayList<>();

        Map<String,Object> maptwo = new HashMap<>();
        maptwo.put("DeviceId",416);
        maptwo.put("DeviceName",paramtwo.get(0).get("devname"));
        maptwo.put("StationName",paramtwo.get(0).get("devname"));

        Map<String,Object> map2two = new HashMap<>();
        map2two.put("PropertyId","P001");
        map2two.put("PropertyName",paramtwo.get(1).get("insname"));
        map2two.put("PropertyValue",paramtwo.get(1).get("hvalue"));
        map2two.put("Unit",paramtwo.get(1).get("insunit"));
        map2two.put("PropertyType","参数");
        map2two.put("UpdateTime",tstr);
        paramListtwo.add(map2two);

        Map<String,Object> map3two = new HashMap<>();
        map3two.put("PropertyId","P002");
        map3two.put("PropertyName",paramtwo.get(2).get("insname"));
        map3two.put("PropertyValue",paramtwo.get(2).get("hvalue"));
        map3two.put("Unit",paramtwo.get(2).get("insunit"));
        map3two.put("PropertyType","参数");
        map3two.put("UpdateTime",tstr);
        paramListtwo.add(map3two);
        maptwo.put("Properties",paramListtwo);
        resultListtwo.add(maptwo);
        JSONArray jsonArray2 = JSONArray.fromObject(resultListtwo);
        try{
            String body2 = sendPostDataByJson(url,jsonArray2.toString(), "utf-8");
            System.out.println("body2:"+body2);
        }catch (Exception e){
            e.printStackTrace();
        }

        List<Map<String, Object>> paramthree = upsMapper.selectDhInfoListthree();
        List<Map<String, Object>> resultListthree = new ArrayList<>();
        List<Map<String, Object>> paramListthree = new ArrayList<>();

        Map<String,Object> mapthree = new HashMap<>();
        mapthree.put("DeviceId",417);
        mapthree.put("DeviceName",paramthree.get(0).get("devname"));
        mapthree.put("StationName",paramthree.get(0).get("devname"));

        Map<String,Object> map2three = new HashMap<>();
        map2three.put("PropertyId","P001");
        map2three.put("PropertyName",paramthree.get(1).get("insname"));
        map2three.put("PropertyValue",paramthree.get(1).get("hvalue"));
        map2three.put("Unit",paramthree.get(1).get("insunit"));
        map2three.put("PropertyType","参数");
        map2three.put("UpdateTime",tstr);
        paramListthree.add(map2three);

        Map<String,Object> map3three = new HashMap<>();
        map3three.put("PropertyId","P002");
        map3three.put("PropertyName",paramthree.get(2).get("insname"));
        map3three.put("PropertyValue",paramthree.get(2).get("hvalue"));
        map3three.put("Unit",paramthree.get(2).get("insunit"));
        map3three.put("PropertyType","参数");
        map3three.put("UpdateTime",tstr);
        paramListthree.add(map3three);
        mapthree.put("Properties",paramListthree);
        resultListthree.add(mapthree);
        JSONArray jsonArray3 = JSONArray.fromObject(resultListthree);
        try{
            String body3 = sendPostDataByJson(url,jsonArray3.toString(), "utf-8");
            System.out.println("body3:"+body3);
        }catch (Exception e){
            e.printStackTrace();
        }

        List<Map<String, Object>> paramfour = upsMapper.selectDhInfoListfour();
        List<Map<String, Object>> resultListfour = new ArrayList<>();
        List<Map<String, Object>> paramListfour = new ArrayList<>();

        Map<String,Object> mapfour = new HashMap<>();
        mapfour.put("DeviceId",418);
        mapfour.put("DeviceName",paramfour.get(0).get("devname"));
        mapfour.put("StationName",paramfour.get(0).get("devname"));

        Map<String,Object> map2four = new HashMap<>();
        map2four.put("PropertyId","P001");
        map2four.put("PropertyName",paramfour.get(1).get("insname"));
        map2four.put("PropertyValue",paramfour.get(1).get("hvalue"));
        map2four.put("Unit",paramtwo.get(1).get("insunit"));
        map2four.put("PropertyType","参数");
        map2four.put("UpdateTime",tstr);
        paramListfour.add(map2four);

        Map<String,Object> map3four = new HashMap<>();
        map3four.put("PropertyId","P002");
        map3four.put("PropertyName",paramfour.get(2).get("insname"));
        map3four.put("PropertyValue",paramfour.get(2).get("hvalue"));
        map3four.put("Unit",paramfour.get(2).get("insunit"));
        map3four.put("PropertyType","参数");
        map3four.put("UpdateTime",tstr);
        paramListfour.add(map3four);
        mapfour.put("Properties",paramListfour);
        resultListfour.add(mapfour);
        JSONArray jsonArray4 = JSONArray.fromObject(resultListfour);
        try{
            String body4 = sendPostDataByJson(url,jsonArray4.toString(), "utf-8");
            System.out.println("body4:"+body4);
        }catch (Exception e){
            e.printStackTrace();
        }

        return resultList;
    }
    //动环数据带参数
    @Override
    public List<Map<String, Object>> selectDhInfoListByParam(Map<String, Object> param) {
        return upsMapper.selectDhInfoListByParam(param);
    }

    @Override
    public List<Map<String, Object>> DhJgInfoList(Map<String, Object> param) {
        return upsMapper.DhJgInfoList(param);
    }

    /**
     * post请求传输json数据
     *
     * @param url url地址
     * @param json json数据
     * @param encoding 编码方式
     * @return
     * @throws ClientProtocolException
     * @throws IOException
     */
    public static String sendPostDataByJson(String url, String json, String encoding) throws ClientProtocolException, IOException {
        String result = "";

        // 创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建post方式请求对象
        HttpPost httpPost = new HttpPost(url);
        // 设置参数到请求对象中
        StringEntity stringEntity = new StringEntity(json, ContentType.APPLICATION_JSON);
        stringEntity.setContentEncoding("utf-8");
        httpPost.setEntity(stringEntity);

        // 执行请求操作，并拿到结果（同步阻塞）
        CloseableHttpResponse response = httpClient.execute(httpPost);

        // 获取结果实体
        // 判断网络连接状态码是否正常(0--200都数正常)
        if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
            result = EntityUtils.toString(response.getEntity(), "utf-8");
        }
        // 释放链接
        response.close();

        return result;
    }

}
