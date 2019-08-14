package com.example.controller;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import com.example.utils.CryptUtils;
import org.apache.commons.codec.binary.Hex;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

//import com.otu.core.util.CryptUtils;

import net.sf.json.JSONObject;

/**
 * fvsd直接登录测试url
 * 
 * @author <a href="mailto:zhangdanfeng@dhcc.com.cn">zhangdanfeng</a>
 * @date 2019-07-25
 */
@Controller
@RequestMapping("/itsm")
public class ItsmTestHtmlLoginController {
	private static final String ITSM_LOGIN_URL ="https://itsm.dhcc.com.cn/fvsd4";
	private static final String INTERFACE_NAME = "/init.mvc";
    private static final String DMSN_CORE = "998";
	
    @RequestMapping(value = "itsmTestHtmlLogin.mvc")
	public ModelAndView itsmToItim(String appkey, String secret) throws UnsupportedEncodingException{
        appkey = "jlsjw";
        secret = "jlsjw";
    	Map<String, Object> paramMap_ = prepareParamMap(null, appkey);
	    
		String token = buildToken(INTERFACE_NAME, paramMap_, CryptUtils.md5HexStr(secret) );//
        System.out.println("token:"+token);
        String param = mapToQueryStr(paramMap_);
        System.out.println("param:"+param);
        String urlStr = ITSM_LOGIN_URL + INTERFACE_NAME + "?" + param + "&token_=" + token;
        String urlResStr = ITSM_LOGIN_URL + INTERFACE_NAME + "?" + param + "&token_=" + token+"&";
        System.out.println("urlStr:"+urlStr);
        ModelAndView mAndView = new ModelAndView(new RedirectView(urlStr));
		return mAndView;
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
    
    private static Map<String, Object> prepareParamMap(Map<String, Object> paramMap, String appkey) {
	    Map<String, Object> paramMap_ = paramMap;
	    if (paramMap_ != null) {
            if (paramMap_.get("appkey_") == null) {
                paramMap_.put("appkey_", appkey);
            }
            if (paramMap_.get("time_") == null) {
                paramMap_.put("time_", System.currentTimeMillis() + "");
            }
        } else {
            paramMap_ = new HashMap<String, Object>();
            paramMap_.put("appkey_", appkey);
            paramMap_.put("time_", System.currentTimeMillis() + "");
        }
	    
	    return paramMap_;
	}
    
    private static String hmacSHA256(String content , String pwd) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");

            byte[] secretByte = pwd.getBytes("utf-8");
            byte[] dataBytes = content.getBytes("utf-8");

            SecretKey secret = new SecretKeySpec(secretByte, "HMACSHA256");

            mac.init(secret);

            byte[] doFinal = mac.doFinal(dataBytes);

            return Hex.encodeHexString(doFinal);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public final static String buildToken(String url, String paramJson, String secret) {
       return hmacSHA256(url + paramJson , secret);
    }
    
    public final static String buildToken(String url, Map<String, Object> paramMap, String secret) {
        //把传进来的map转成了json串 作为参数进入下一个方法hmacSHA256
        String paramJson = JSONObject.fromObject(new TreeMap<String, Object>(paramMap)).toString();
        
        return hmacSHA256(url + paramJson , secret);
     }
}
