package com.example.dpinterface;

import com.example.utils.CryptUtils;
import com.example.utils.HMACTokenUtils;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

/**
 * 资产管理+工单列表接口
 */

@Controller
@RequestMapping("/zcgl")
public class Zcglinterface {
    //登录账号
    private  static  final  String  LOGAIN_NAME = "itsm";
    //端口号
    private  static  final  String  DUANKOU_NUM = "8090";
    //服务器地址
    private  static  final  String  ADDR_URL = "156.8.11.22";

    //网络设备
    String categroy1 = "402881d6483f64c601483f64e31b0013";
    //中间件
    String categroy2 = "402881d6483f64c601483f64e31b0025";
    //存储
    String categroy3 = "402881d6483f64c601483f64e31b0015";
    //虚拟化
    String categroy4 = "402881d6483f64c601483f64e31b0050";
    //安全设备
    String categroy5 = "402881d6483f64c601483f64e31b0016";
    //服务器
    String categroy6 = "402881d6483f64c601483f64e31b0014";
    //数据库
    String categroy7 = "2c9898f84fb04cb3014fb15272810019";
    //其他
    String categroy8 = "";




    /**
     * 全部工单免登陆跳转
     * @return
     */
    @RequestMapping("zcglGdJump")
    @ResponseBody
    public String zcglGdJump(){
        try{
            String urlStr="";
            String serviceAddr="156.8.11.22:8090/itsms";
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("appkey_","itsm");
            map.put("time_",System.currentTimeMillis()+"");
            map.put("moduleId", "2c948a876cb1b2df016cb1b35001006d");
            String secret = CryptUtils.md5HexStr("dhccitsm");
            String method = "/init.mvc";
            String token = HMACTokenUtils.buildToken(method, map, secret);

            String param = mapToQueryStr(map);
            urlStr= serviceAddr + method + "?" + param + "&token_=" + token;
            return urlStr;
        }catch (UnsupportedEncodingException e){
            return "";
        }

    }

    /**
     * 资产管理  选择其中一个进入二级页时跳转
     * type值用来区分那个资产下的跳转
     * @param type
     * @return
     */
    @RequestMapping("zcglSelectOneJump")
    @ResponseBody
    public String zcglSelectOneJump(String type){
        String urlStr="";
        String serviceAddr="156.8.11.22:8090/itsms";
        try{
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("appkey_","itsm");
            map.put("time_",System.currentTimeMillis()+"");
            map.put("moduleId", "402883f56b1c7988016b1c7a22f4006d");
            if("1".equals(type)){
                System.out.println("网络设备");
                map.put("categoryId",categroy1);
            }else if("2".equals(type)){
                System.out.println("中间件");
                map.put("categoryId",categroy2);
            }else if("3".equals(type)){
                System.out.println("存储");
                map.put("categoryId",categroy3);
            }else if("4".equals(type)){
                System.out.println("虚拟化");
                map.put("categoryId",categroy4);
            }else if("5".equals(type)){
                System.out.println("安全设备");
                map.put("categoryId",categroy5);
            }else if("6".equals(type)){
                System.out.println("服务器");
                map.put("categoryId",categroy6);
            }else if("7".equals(type)){
                System.out.println("数据库");
                map.put("categoryId",categroy7);
            }else{
                //参数异常返回数据库的跳转url
                map.put("categoryId",categroy7);
            }
            String secret = CryptUtils.md5HexStr("dhccitsm");
            String method = "/init.mvc";
            String token = HMACTokenUtils.buildToken(method, map, secret);

            String param = mapToQueryStr(map);
            urlStr= serviceAddr + method + "?" + param + "&token_=" + token;
            return urlStr;
        }catch (UnsupportedEncodingException e){
            return "";
        }

    }

    /**
     * 工单的一级+二级页接口 带有分页功能 当前每页默认十条
     * http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/queryTask.mvc?filter=handling&start=0&limit=2
     * start 从0开始
     * @param start
     * @param limit
     * 0825新增参数
     * processDefinitionKey=incident
     * @return
     */
    @RequestMapping("getGdListDate")
    @ResponseBody
    public String dogetResponseDateGdList(String start,String limit){
        String url="";
        try{
        if("".equals(limit)){
            limit = 10+"";
        }
        if(!"".equals(start) && start != null){
             url= "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/queryTask.mvc?filter=handling&processDefinitionKey=incident&start="+start+"&limit="+limit;
        }else{
            url="http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/queryTask.mvc?filter=handling&processDefinitionKey=incident";
        }

            String  a = sendGetData(url,"utf-8");
            return a;
        }catch ( Exception e){
            return "";
        }
    }

    /**
     * 资产管理  选择其中一个进入到当前资产的二级页接口
     * 需要升级为带参数接口 当前返回的是网络设备的二级页接口数据0822
     * @return
     */
    @RequestMapping("getZcglListDateByType")
    @ResponseBody
    public String dogetResponseDateZcglList(String type,String start,String limit){
        String url_paramesKey = "categoryId=";
        String url_resultVal="";
        String pageHelp="";
        try{
        if(!"".equals(start) && !"".equals(limit)){
            pageHelp="&start="+start+"&limit="+limit;
        }
        if("1".equals(type)){
            url_resultVal=categroy1;
        }else if("2".equals(type)){
            url_resultVal=categroy2;
        }else if("3".equals(type)){
            url_resultVal=categroy3;
        }else if("4".equals(type)){
            url_resultVal=categroy4;
        }else if("5".equals(type)){
            url_resultVal=categroy5;
        }else if("6".equals(type)){
            url_resultVal=categroy6;
        }else if("7".equals(type)){
            url_resultVal=categroy7;
        }else if("8".equals(type)){
            url_paramesKey="excludeIds=";
            url_resultVal=categroy1+","+categroy2+","+categroy3+","+categroy4+","+categroy5+","+categroy6+","+categroy7;
        }
        String url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/listByCiCategory.mvc?deepIn=false&"+url_paramesKey+url_resultVal+pageHelp;
            String  a = sendGetData(url,"utf-8");
            return a;
        }catch ( Exception e){
            return "";
        }
    }
    /**
     * 资产管理  一级页大屏上八个资产的数量
     *
     * @return
     */
    @RequestMapping("getZcglAllDateForDp")
    @ResponseBody
    public String dogetResponsegetZcglAllDateForDp(){
        String url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/ci_category_counts.mvc?categories=cagt_2_virtual_machine,cagt_2_network_device,cagt_2_middle_application,cagt_2_storage_device,cagt_2_security_device,cagt_2_server_device,cagt_2_database_application";
        try{
            String  a = sendGetData(url,"utf-8");
            return a;
        }catch ( Exception e){
            return "";
        }
    }

    /**
     * 健康数接口
     * @return
     */
    @RequestMapping("getJksDate")
    @ResponseBody
    public String dogetResponseDateJks(){
        try{
            String url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/large/healthScore.mvc";
            String str = sendGetData(url,"utf-8");
            return str;
        }catch ( Exception e){
            return "";
        }
    }

    /**
     * 健康数二级页接口返回
     * @return
     */
    @RequestMapping("getRiskListDate")
    @ResponseBody
    public String dogetResponseRiskListDate(String start,String limit){
        try{
            String url = "";
            if("".equals(limit)){
                limit=10+"";
            }
            if(!"".equals(start) && start != null){
                url = "http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/large/riskList.mvc?start="+start+"&limit="+limit;
            }else{
                url="http://156.8.11.22:8090/itsms/ioptcn/rest/jlsjw/large/riskList.mvc?start=0&limit=10";
            }
            String str = sendGetData(url,"utf-8");
            return str;
        }catch ( Exception e){
            return "";
        }
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
}
