package com.example.demo;

import com.alibaba.fastjson.JSON;
import com.example.utils.CryptUtils;
import com.example.utils.HMACTokenUtils;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.junit.Test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.*;

import static com.example.utils.FontUtils.decodeUnicode;

/**
 * @date：2019年3月20日
 */
public class HttpClientTest {

    /**
     * post请求传输map数据
     *
     * @param url url地址
     * @param map map数据
     * @param encoding 编码方式
     * @return
     * @throws ClientProtocolException
     * @throws IOException
     */
    public static String sendPostDataByMap(String url, Map<String, String> map, String encoding) throws ClientProtocolException, IOException {
        String result = "";
        // 创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建post方式请求对象
        HttpPost httpPost = new HttpPost(url);
        // 装填参数
        List<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();
        if (map != null) {
            for (Map.Entry<String, String> entry : map.entrySet()) {
                nameValuePairs.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
            }
        }

        // 设置参数到请求对象中
        httpPost.setEntity(new UrlEncodedFormEntity(nameValuePairs, encoding));

        // 设置header信息
        // 指定报文头【Content-type】、【User-Agent】
        httpPost.setHeader("Content-type", "application/x-www-form-urlencoded");
        httpPost.setHeader("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

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

    /**
     * get请求传输数据
     *
     * @param url
     * @param encoding
     * @return
     * @throws ClientProtocolException
     * @throws IOException
     */
    public String sendGetData(String url, String encoding) throws ClientProtocolException, IOException {
        String result = "";

        // 创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建get方式请求对象
        HttpGet httpGet = new HttpGet(url);
        httpGet.addHeader("Content-type", "application/json");
        // 通过请求对象获取响应对象
        CloseableHttpResponse response = httpClient.execute(httpGet);

        // 获取结果实体
        // 判断网络连接状态码是否正常(0--200都数正常)
        if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
            result = EntityUtils.toString(response.getEntity(), "utf-8");
        }
        // 释放链接
        response.close();

        return result;
    }

    @Test
    public void testSendPostDataByMap() throws ClientProtocolException, IOException {
        String url = "http://localhost:8080/httpService/sendPostDataByMap";
        Map<String, String> map = new HashMap<String, String>();
        map.put("name", "wyj");
        map.put("city", "南京");
        String body = sendPostDataByMap(url, map, "utf-8");
        System.out.println("响应结果：" + body);
    }

    @Test
    public void testSendPostDataByJson() throws ClientProtocolException, IOException {
        String url = "http://localhost:8080/httpService/sendPostDataByJson";
        Map<String, String> map = new HashMap<String, String>();
        map.put("name", "wyj");
        map.put("city", "南京");
        String body = sendPostDataByJson(url, JSON.toJSONString(map), "utf-8");
        System.out.println("响应结果：" + body);
    }

    @Test
    public void testSendGetData() throws ClientProtocolException, IOException {
        String url = "http://localhost:8080/SjwProject/system/detest2?name=wyj&city=南京&id=1";
        String body = sendGetData(url, "utf-8");
        System.out.println("响应结果：" + body);
    }

    @Test
    public void mytest() throws ClientProtocolException, IOException {
        //String url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/ci_category_counts.mvc?categories=cagt_1_virtual_device";
        //String url = "http://156.8.11.22:8090/itims/login.action?userName=admin&pwd=21232f297a57a5a743894a0e4a801fc3&DMSN=998";
        //http://localhost:8080/fvsd4/init.mvc?moduleId=2c948a876cb1b2df016cb1b35001006d
        //String url = "http://156.8.11.22:8080/itims/login.action?userName=admin&pwd=21232f297a57a5a743894a0e4a801fc3&DMSN=998";


        //String password = "dhccitsm";
        //String serviceAddr="http://156.8.11.253:8080/fvsd4";
        String serviceAddr="http://156.8.11.22:8090/itsms";
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("appkey_","itsm");
        map.put("time_",System.currentTimeMillis()+"");
        map.put("moduleId", "2c948a876cb1b2df016cb1b35001006d");

        String secret = CryptUtils.md5HexStr("dhccitsm");
        String method = "/init.mvc";

        String token = HMACTokenUtils.buildToken(method, map, secret);

        String param = mapToQueryStr(map);
        String urlStr = serviceAddr + method + "?" + param + "&token_=" + token;
        System.out.println(urlStr);


    }


    private static String mapToQueryStr(Map<String, Object> params) throws UnsupportedEncodingException {
        StringBuilder sb = new StringBuilder();
        for(Map.Entry<String, Object> entry : params.entrySet()) {
            if(entry.getValue() instanceof String[]){
                String[] values = (String[])entry.getValue();
                for(String item : values) {
                    sb.append(entry.getKey()).append("=").append(URLEncoder.encode(item, "UTF-8")).append('&');
                }
            } else {
                sb.append(entry.getKey()).append("=").append(URLEncoder.encode((String)entry.getValue(), "UTF-8")).append('&');
            }
        }

        String paramStr = sb.substring(0, sb.length() - 1);

        return paramStr;
    }

    @Test
    public void mytest2() throws ClientProtocolException, IOException {
        String serviceAddr="http://156.8.11.22:8090/itsms";
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("appkey_","itsm");
        map.put("time_",System.currentTimeMillis()+"");
        map.put("moduleId", "402883f56b1c7988016b1c7a22f4006d");
        map.put("categoryId","402881d6483f64c601483f64e31b0013");

        String secret = CryptUtils.md5HexStr("dhccitsm");
        String method = "/init.mvc";

        String token = HMACTokenUtils.buildToken(method, map, secret);

        String param = mapToQueryStr(map);
        String urlStr = serviceAddr + method + "?" + param + "&token_=" + token;
        System.out.println(urlStr);


    }


    //态势感知的健康值
    //一级页展示值
    //192.168.43.101:8080/fvsd4/ioptcn/rest/jlsjw/large/healthScore.mvc
    //{"score":"0.78"}
    @Test
    public void mytest3() throws ClientProtocolException, IOException {
        String url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/large/healthScore.mvc";
        String str = sendGetData(url,"utf-8");
        System.out.println(str);


    }

    //健康度的二级页的列表接口
    //{"success" :true,"total" : 3, "root" :[{"code":"Device0000000003","id":"112211","name":"服务器1","score":"00.0","ip":"114.23.0.1"},{"code":"Device0000000002","id":"334433","name":"服务器3333","score":"2.0","ip":"114.23.0.1"},{"code":"Device0000000098","id":"556655","name":"虚拟机上的上的","score":"32.4","ip":"114.102.22.31"}]}
    @Test
    public void mytest4() throws ClientProtocolException, IOException {
        String url = "http://192.168.43.101:8080/fvsd4/ioptcn/rest/jlsjw/large/riskList.mvc?start=0&limit=10";
        String str = sendGetData(url,"utf-8");
        System.out.println(str);


    }
//decodeUnicode
@Test
public void mytest5() throws ClientProtocolException, IOException {
    String url = "http://156.8.16.16/phpdir/trade_third.php?tradecode=networkclient&login=thirdadmin&pass=888888&contype=2";
    String str = sendGetData(url,"utf-8");
    String strs = decodeUnicode(str);
    System.out.println(strs);


}
}